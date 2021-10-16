import json
import os
from fastapi import FastAPI
from app.models import Product
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # có thể định nghĩa danh sách các IP, domain cho phép truy cập
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/hanghoa")
def create_new_product(model: Product.HangHoa):
    return {"success": True, "data": model}


# TODO router
def read_todo_items():
    folder = Path(__file__).parent
    # print("Thu muc: ", folder)
    full_path = os.path.join(folder, "todos.json")
    with open(full_path, "r") as f:
        data = f.read()
        return json.loads(data)


@app.get("/todos", tags=["todos"])
async def get_todos() -> dict:
    items = read_todo_items()
    return {"data": items}


@app.get("/todos/{id}", tags=["todos"])
async def get_todos(id) -> dict:
    items = read_todo_items()
    data = {}
    for item in items:
        if item["id"] == id:
            data = item
            break

    return {"data": data}
