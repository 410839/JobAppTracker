from fastapi import FastAPI, APIRouter

router = APIRouter()

@router.get("/")
def read_root():
    return {"Job App Tracker": "Start"}


@router.get("/jobs")
def get_jobs():
    return {}

@router.get("/jobs/{id}")
def get_job(id: int):
    return {}

@router.post("/AddJobApp")
def add_job():
    return

@router.delete("/delete/{id}")
def delete_job(id: int):
    return