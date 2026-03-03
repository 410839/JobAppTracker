

export default function JobAppCard({ jobInfo } ) {

    return (
        <li key = {jobInfo.id}> {jobInfo.date} {jobInfo.company_name} {jobInfo.jobTitle} <a href = {jobInfo.link_to_job_app}>Link to Job Application</a> {jobInfo.status} </li>
    );
}