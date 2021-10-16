from fastapi import FastAPI
from app.models import Product
from fastapi.middleware.cors import CORSMiddleware
from app.routers import TodoRouter

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
app.include_router(TodoRouter.router, tags=["todos"])