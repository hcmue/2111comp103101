from pydantic import BaseModel


class UserModel(BaseModel):
    name: str
    username: str
    password: str
    email: str


class LoginModel(BaseModel):
    password: str
    username: str
