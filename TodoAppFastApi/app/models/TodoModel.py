from typing import Optional
from pydantic import BaseModel


class Todo(BaseModel):
    name: str
    noted: Optional[str]
    is_completed: bool


class TodoItem(Todo):
    id: Optional[str]

    def __dict__(self):
        return {
            "id": str(self.id),
            "name": self.name,
            "noted": self.noted,
            "is_completed": self.is_completed
        }


class EditTodoItemModel(Todo):
    id: str

#snake_case