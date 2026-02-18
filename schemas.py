from pydantic import BaseModel
#from models import JobApp
from datetime import datetime

#Schema for what a job create object needs

class JobCreate(BaseModel):
    date: datetime
    job_title: str
    company_name: str
    link_to_job_app: str
    status: str

#Schema for what should be returned by the endpoint responses

class JobResponse(BaseModel):
    id: int
    job_title: str
    company_name: str
    link_to_job_app: str
    status: str

    class Config:
        from_attributes = True
        orm_mode = True

#Schema for a Job application update

class JobUpdate(BaseModel):
    status: str
    
