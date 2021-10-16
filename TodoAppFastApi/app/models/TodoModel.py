from typing import Optional
from pydantic import BaseModel


class TodoItem(BaseModel):
    id: str
    name: str
    noted: Optional[str]
    is_completed: bool

#snake_case