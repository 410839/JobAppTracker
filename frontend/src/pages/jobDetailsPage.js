import { useEffect, useState } from "react";
import { getJobs } from "../services/jobService.js";
import Navbar from "../components/navBarComponent.js";
import Header from "../components/headerComponent.js"
import JobAppCard from "../components/jobAppDisplay.js";


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
            <Header/>
            <Navbar />
            <ul>
                {jobApps.map((jobApp) => (
                    // <li key = {jobApp.id}> {jobApp.company_name} </li>
                    <JobAppCard jobInfo = {jobApp}/>
                ))}
            </ul>
        </div>
    );
}