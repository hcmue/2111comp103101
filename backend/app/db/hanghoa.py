from sqlalchemy import Column, Integer, String, DateTime, func, Float, ForeignKey
from .database import Base
from sqlalchemy.orm import relationship


class Loai(Base):
    """Category information."""
    __tablename__ = "tblloais"

    ma_loai = Column(Integer, primary_key=True, autoincrement=True)
    ten_loai=Column(String(50), index=True, nullable=False)
    mota=Column(String(255), nullable=True)
    hanghoas = relationship("HangHoa", back_populates="loai")


class HangHoa(Base):
    """Product information."""
    __tablename__ = "tblhanghoas"

    mahh = Column(Integer, primary_key=True, autoincrement=True)
    ten_hh=Column(String(50), index=True, nullable=False)
    mota=Column(String(255), nullable=True)
    hinh=Column(String(50), index=True, nullable=True)
    giaban=Column(Float, nullable=False)
    ma_loai=Column(
        Integer,
        ForeignKey("tblloais.ma_loai", ondelete="CASCADE", onupdate="CASCADE"),
        nullable=False
    )
    loai = relationship("Loai", back_populates="hanghoas")

