

export default function JobAppCard({ jobInfo } ) {

    return (
        <li key = {jobInfo.id}> Date: {jobInfo.date} Company Name: {jobInfo.company_name} Job Title: {jobInfo.job_title} <a href = {jobInfo.link_to_job_app} target = "_blank" rel = "noopener no referrer">Link to Job Application</a> Status of Application: {jobInfo.status} </li>
    );
}