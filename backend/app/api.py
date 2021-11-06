from typing import List, Optional
from fastapi import FastAPI, UploadFile, File, HTTPException, Depends, status
import os
import shutil
from datetime import datetime, timedelta
from jose import JWTError, jwt
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
import logging
from .db.database import engine, Base, LocalSession
from .db.user import User
from .db.hanghoa import Loai, HangHoa
from .models import user_model

Base.metadata.create_all(bind=engine)


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


@app.get("/")
def read_root():
    return {"Hello": "World"}

# openssl rand -hex 32
SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS512" # SHA-512
ACCESS_TOKEN_EXPIRE_MINUTES = 5

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Unauthorize",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("username")
        if username is None:
            raise credentials_exception
        else:
            return username
    except JWTError:
        raise credentials_exception


@app.post("/login", tags=["Authen"])
def validate_user(model: user_model.LoginModel):
    session = LocalSession()
    user = session.query(User).filter(User.username == model.username).one_or_none()
    if user:
        # Generate token
        access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = create_access_token(
            data={"username": model.username, "name": user.name, "email": user.email},
            expires_delta=access_token_expires
        )
        return {"success": True, "data": access_token}
    else:
        return {"success": False, "message": "Invalid username/password"}


@app.get("/products/{id}", tags=["PRODUCT"])
def read_product_data(id: int):
    if id < 1:
        raise HTTPException(status_code=404, detail=f"Not found {id}")
    return {"data": f"Found product {id}"}


DIRECTORY = os.getcwd()


@app.post("/products", tags=["PRODUCT"])
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


@app.post("/predict", tags=["PREDICT"])
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


@app.post("/images", tags=["UPLOAD"])
def upload_single_file(image: UploadFile = File(...)):
    try:
        file_save = os.path.join(DIRECTORY, "data", image.filename)
        with open(file_save, "wb") as tmp:
            shutil.copyfileobj(image.file, tmp)

        return {"filename": image.filename}
    except Exception as e:
        print(e)
        return {"success": False}


@app.post("/images/multiple", tags=["UPLOAD"])
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


@app.get("/users")
def get_all_user():
    session = LocalSession()
    users = session.query(User).all()
    return users


@app.get("/users/{id}")
def get_all_user(id: int):
    session = LocalSession()
    user = session.query(User).filter(User.id == id).one_or_none()
    if user:
        return user
    else:
        raise HTTPException(status_code=404, detail="Not found")


@app.post("/users")
def create_new_user(model: user_model.UserModel):
    new_user = User(name=model.name, username=model.username,email=model.email)
    session = LocalSession()
    session.add(new_user)
    session.commit()
    session.refresh(new_user)

    return new_user


@app.delete("/users/{id}")
def remove_user(id: int, current_user: User = Depends(get_current_user)):
    session = LocalSession()
    user = session.query(User).filter(User.id == id).delete()
    session.commit()
    return user


@app.get("/loais", tags= ["CATEGORY"])
def get_all_category():
    session = LocalSession()
    loais = session.query(Loai).all()
    result = []
    for item in loais:
        result.append({
            "ma": item.ma_loai,
            "ten": item.ten_loai,
            "hanghoa": item.hanghoas
        })
    return result