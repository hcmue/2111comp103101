from sqlalchemy import Column, Integer, String, DateTime, func
from .database import Base


class User(Base):
    """User information."""
    __tablename__ = "tblusers"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name=Column(String(50), index=True, nullable=False)
    username=Column(String(50), index=True, nullable=False, unique=True)
    password=Column(String(255), nullable=False)
    email=Column(String(150), index=True, nullable=False, unique=True)
    created_at = Column(DateTime(), nullable=False, server_default=func.current_timestamp())

