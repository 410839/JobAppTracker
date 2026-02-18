from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session, DeclarativeBase

#Create the sqlite db engine

engine = create_engine("sqlite:///jobs.db", echo = True)

class Base(DeclarativeBase):
    pass

# connection = engine.connect()
#Create the local session for db communication

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

#Function for getting the db 

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

