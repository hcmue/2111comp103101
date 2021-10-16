from pydantic import BaseModel


class HangHoa(BaseModel):
    ten_hh: str
    don_gia: float