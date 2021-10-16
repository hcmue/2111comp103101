import json
import os
import uuid
from fastapi import APIRouter, HTTPException
from app.models import TodoModel
from pathlib import Path

router = APIRouter()


full_path = os.path.join(Path(__file__).parent.parent, "todos.json")


def read_todo_items():
    with open(full_path, "r") as f:
        data = f.read()
        return json.loads(data)


@router.get("/todos")
async def get_todos() -> dict:
    items = read_todo_items()
    return {"data": items}


@router.get("/todos/{id}")
async def get_todos(id) -> dict:
    items = read_todo_items()
    data = {}
    for item in items:
        if item["id"] == id:
            data = item
            break

    return {"data": data}


@router.post("/todos")
async def add_todo(todo: TodoModel.TodoItem) -> dict:
    todo.id = str(uuid.uuid4())
    items = read_todo_items()

    print(type(items), type(items[0]), type(todo))
    items.append(todo.__dict__)

    print(items)
    # Save file
    with open(full_path, "w") as f:
        json.dump(items, f, indent=4)

    return {
        "data": todo
    }


@router.put("/todos/{id}")
async def get_todos(id, todo: TodoModel.EditTodoItemModel) -> dict:
    items = read_todo_items()
    for item in items:
        if item["id"] == id:
            item["name"] = todo.name
            item["noted"] = todo.noted
            item["is_completed"] = todo.is_completed

            # Save
            with open(full_path, "w") as f:
                json.dump(items, f, indent=4)
            return {"success": True, "data": todo}

    return HTTPException(status_code=404, detail=f"Item {id} not found")


@router.delete("/todos/{id}")
async def remove_todos(id):
    items = read_todo_items()
    for item in items:
        if item["id"] == id:
            items.remove(item)

            #Save
            with open(full_path, "w") as f:
                json.dump(items, f, indent=4)
            return {"success": True}

    return HTTPException(status_code=404, detail=f"Item {id} not found")