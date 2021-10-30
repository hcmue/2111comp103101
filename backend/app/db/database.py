from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


# engine = create_engine("mariadb+pymysql://user:pass@host/dbname?charset=utf8mb4")
engine = create_engine(
    'mysql+pymysql://root:@localhost/45comp130101',
    encoding="utf-8",
    echo=True
)
Base = declarative_base()
LocalSession = sessionmaker(autocommit=False, autoflush=False, bind=engine)