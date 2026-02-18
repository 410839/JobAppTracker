from pydantic import BaseModel
from models import JobApp
from datetime import datetime

class JobCreate(BaseModel):
    date: datetime
    job_title: str
    company_name: str
    link_to_job_app: str
    status: str

class JobResponse(BaseModel):
    id: int
    job_title: str
    company_name: str
    link_to_job_app: str
    status: str

    class Config:
        from_attributes = True
        orm_mode = True
