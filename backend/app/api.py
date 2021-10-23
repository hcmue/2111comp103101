from typing import List, Optional
from fastapi import FastAPI, UploadFile, File, HTTPException
import os
import shutil
from pydantic import BaseModel
import logging


app = FastAPI()
# logging = logging.getLogger()
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s %(levelname)s %(message)s',
    filename='app.log',
    filemode='w'
)


class HangHoa(BaseModel):
    MaHh: int
    TenHh: str
    MoTa: Optional[str]
    DonGia: float


@ app.get("/")
def read_root():
    return {"Hello": "World"}


@ app.get("/products/{id}")
def read_product_data(id: int):
    if id < 1:
        raise HTTPException(status_code=404, detail=f"Not found {id}")
    return {"data": f"Found product {id}"}


DIRECTORY = os.getcwd()


@ app.post("/products", tags=["PRODUCT"])
def upload_new_product(ten_hh: str, gia: float, mo_ta: Optional[str], image: UploadFile = File(...)):
    try:
        new_file_name = f"{ten_hh}_{image.filename}"
        file_save = os.path.join(DIRECTORY, "data", new_file_name)
        with open(file_save, "wb") as tmp:
            shutil.copyfileobj(image.file, tmp)

        return {"filename": new_file_name, "data": ten_hh}
    except Exception as e:
        logging.error(e)
        return HTTPException(status_code=500, detail="Server error")


@ app.post("/predict", tags=["PREDICT"])
def upload_and_predict_single_file(model_name: str, image: UploadFile = File(...)):
    logging.info("UPLOAD FILE")
    logging.error("CO LOI ROI")
    logging.debug("Debug message")
    try:
        new_file_name = f"{model_name}_{image.filename}"
        file_save = os.path.join(DIRECTORY, "data", new_file_name)
        with open(file_save, "wb") as tmp:
            shutil.copyfileobj(image.file, tmp)

        return {"filename": new_file_name}
    except Exception as e:
        print(e)
        return {"success": False}


@ app.post("/images", tags=["UPLOAD"])
def upload_single_file(image: UploadFile = File(...)):
    try:
        file_save = os.path.join(DIRECTORY, "data", image.filename)
        with open(file_save, "wb") as tmp:
            shutil.copyfileobj(image.file, tmp)

        return {"filename": image.filename}
    except Exception as e:
        print(e)
        return {"success": False}


@ app.post("/images/multiple", tags=["UPLOAD"])
def upload_multiple_file(images: List[UploadFile] = File(...)):
    try:
        uploaded_files = []
        for image in images:
            uploaded_files.append(image.filename)
            file_save = os.path.join(DIRECTORY, "data", image.filename)
            with open(file_save, "wb") as tmp:
                shutil.copyfileobj(image.file, tmp)

        return {"files": uploaded_files}
    except Exception as e:
        print(e)
        return {"success": False}
