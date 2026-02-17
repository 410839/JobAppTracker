from fastapi import FastAPI

app = FastAPI(
    title = "Connor Owens Job Tracker",
    description = "App to help me practice fastapi along with react in order to gain understanding and develop a tool to help me with job applications",
    version = "1.0.0"
)

from routes.jobs import router as jobs_router

app.include_router(jobs_router, prefix="/jobs", tags=['Jobs'])