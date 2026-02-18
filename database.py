from sqlalchemy import create_engine
 
from sqlalchemy.orm import sessionmaker, Session, DeclarativeBase


engine = create_engine("sqlite:///jobs.db", echo = True)

class Base(DeclarativeBase):
    pass

# connection = engine.connect()
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def insert_user() -> None:
    pass
