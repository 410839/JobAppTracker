from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, DateTime
from database import engine, Base

# Model for what a job application looks like in the db

class JobApp(Base):
    __tablename__ = "jobs"

    id: Mapped[int] = mapped_column(primary_key = True, index = True)
    date: Mapped[DateTime] = mapped_column(DateTime(), nullable = False)
    job_title: Mapped[str] = mapped_column(String(30), nullable = False)
    company_name: Mapped[str] = mapped_column(String(30), nullable = False)
    link_to_job_app: Mapped[str] = mapped_column(String(), nullable = False)
    status: Mapped[str] = mapped_column(String(30), nullable = False)

    def __repr__(self) -> str:
        return f"ID: {self.id} Date Applied: {self.date} Company Name: {self.company_name} Link: {self.link_to_job_app} Status: {self.status}"

