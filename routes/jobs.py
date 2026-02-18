from fastapi import FastAPI, APIRouter, Depends, HTTPException, Response
from database import get_db, Session
from schemas import JobResponse, JobCreate, JobUpdate
from models import JobApp
from typing import List

router = APIRouter()

#Endpoint for getting all job apps

@router.get("/", response_model = List[JobResponse])
def get_jobs(db: Session = Depends(get_db)):
    jobs = db.query(JobApp).all()
    if not jobs:
        raise HTTPException(status_code= 404, detail = "No Job Applications")
    
    return jobs
    
#Endpoint for getting job apps by company name

@router.get("/{company_name}", response_model = List[JobResponse])
def get_job(company_name: str, db: Session = Depends(get_db)):
    jobs = db.query(JobApp).filter(JobApp.company_name == company_name).all()
    if not jobs:
        raise HTTPException(status_code = 404, detail = "Job Application not found!")
    
    return jobs

#Endpoint for getting job apps by status of application

@router.get("/{applied}", response_model = List[JobResponse])
def get_job_by_status(applied: str, db: Session = Depends(get_db)):
    jobs = db.query(JobApp).filter(JobApp.status == applied).all()
    if not jobs:
        raise HTTPException(status_code= 404, detail= f"No Job applications are of the status {applied}")

    return jobs

#Endpoint for creating a new job application

@router.post("/", response_model = JobResponse)
def add_job(job: JobCreate, db: Session = Depends(get_db)):
    if db.query(JobApp).filter(JobApp.link_to_job_app == job.link_to_job_app).first():
        raise HTTPException(status_code=404, detail= "Links are the same as previous JobApp it already exists!")

    new_job = JobApp(**job.dict())
    db.add(new_job)
    db.commit()
    db.refresh(new_job)
    return new_job

#Endpoint for updating existing job application
    
@router.patch("/{id}", response_model = JobResponse)
def update_job(id: int, job_update: JobUpdate, db: Session = Depends(get_db)):
    job = db.query(JobApp).filter(JobApp.id == id).first()

    if not job:
        raise HTTPException(status_code=404, detail="Job Application to update not found!")
    
    update_data = job_update.dict(exclude_unset=True)

    for field, val in update_data.items():
        setattr(job, field, val)

    db.commit()
    db.refresh(job)
    return job


#Endpoint for deleting a job application

@router.delete("/{id}", response_model = JobResponse)
def delete_job(id: int, db: Session = Depends(get_db)):
    job = db.query(JobApp).filter(JobApp.id == id).first()

    if not job:
        raise HTTPException(status_code=404, detail="Job Application not found!")

    db.delete(job)
    db.commit()
    
    return Response(status_code=204)
    