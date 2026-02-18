from fastapi import FastAPI, APIRouter, Depends, HTTPException
from database import get_db, Session
from schemas import JobResponse, JobCreate
from models import JobApp
from typing import List

router = APIRouter()

@router.get("/", response_model = List[JobResponse])
def get_jobs(db: Session = Depends(get_db)):
    jobs = db.query(JobApp).all()
    if not jobs:
        raise HTTPException(status_code= 404, detail = "No Job Applications")
    
    return jobs
    

@router.get("/{id}", response_model = JobResponse)
def get_job(id: int, db: Session = Depends(get_db)):
    job = db.query(JobApp).filter(JobApp.id == job.id).first()
    if not job:
        raise HTTPException(status_code = 404, detail = "Job Application not found!")
    
    return job

@router.get("/status={applied}")
def get_job_by_status(applied: bool):
    return

@router.post("/", response_model = JobResponse)
def add_job(job: JobCreate, db: Session = Depends(get_db)):
    if db.query(JobApp).filter(JobApp.link_to_job_app == JobApp.link_to_job_app).first():
        raise HTTPException(status_code=404, detail= "Links are the same as previous JobApp it already exists!")

    new_job = JobApp(**job.dict())
    db.add(new_job)
    db.commit()
    db.refresh(new_job)
    return new_job
    
@router.put("/{id}")
def update_job(id: int):
    return

@router.delete("/delete/{id}")
def delete_job(id: int):
    return