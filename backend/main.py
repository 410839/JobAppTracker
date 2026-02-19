from fastapi import FastAPI
from database import engine, Base
#from sqlalchemy import MetaData
from contextlib import asynccontextmanager
import time

# Lifespan function to define behavior on app startup and shutdown load in the 

shared_resources = {}

@asynccontextmanager
async def lifespan(app: FastAPI):

    print("App Starting")

    #Start engine
    Base.metadata.create_all(engine)

    #Keep track of times 
    shared_resources['start_time'] = time.time()
    
    print("Resources initialized")

    yield

    print("App shutting down")

    end_time = time.time()

    uptime = end_time - shared_resources['start_time']

    print(f"Application ran for {uptime:.2f} seconds. Cleaning up resources") 

#Create the fastapi app

app = FastAPI(
    title = "Connor Owens Job Tracker",
    description = "App to help me practice fastapi along with react in order to gain understanding and develop a tool to help me with job applications",
    version = "1.0.0",
    lifespan = lifespan
)

#Include the jobs router 

from routes.jobs import router as jobs_router

app.include_router(jobs_router, prefix="/jobs", tags=['Jobs'])

#Health check of the app

@app.get("/health")
def health_check():
    return {"status": "OK"}