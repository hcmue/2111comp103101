from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class HangHoa(BaseModel):
    ten_hh: str
    don_gia: float


# RESTful API (GET, POST, PUT, DELETE)
@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/hello/{name}")
def read_root(name: str):
    return {"Hello": name}


@app.post("/hanghoa")
def create_new_product(model: HangHoa):
    return {"success": True, "data": model}