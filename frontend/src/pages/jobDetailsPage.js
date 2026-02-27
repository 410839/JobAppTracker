import { useEffect, useState } from "react";
import { getJobs } from "../services/jobService.js";


export default function GetJobDetails() {

    const [loading, setLoading] = useState(true);

    const [jobApps, setJobApps] = useState([]);

    useEffect(() => {
        async function fetchJobs() {
            const data = await getJobs()
            setJobApps(data);
            setLoading(false);
        }
        fetchJobs();
    }, []);

    if(loading) return <p>Loading Jobs ... </p>

    return (
        <div>
            <ul>
                {jobApps.map((jobApp) => (
                    <li key = {jobApp.id}> {jobApp.company_name} </li>
                ))}
            </ul>
        </div>
    );
}