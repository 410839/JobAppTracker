import { useEffect, useState } from "react";
import { getJobs } from "../services/jobService.js";
import Navbar from "../components/navBarComponent.js";
import Header from "../components/headerComponent.js"
import JobAppCard from "../components/jobAppDisplay.js";
import Filters from '../components/filterBar.js';


export default function GetJobDetails() {

    const [loading, setLoading] = useState(true);

    const [jobApps, setJobApps] = useState([]);

    const defaultJobAppFilters = {status: "", company_name: "", job_title: ""};

    const [jobAppFilters, setJobAppFilters] = useState(defaultJobAppFilters);

    const [draftJobAppFilters, setDraftJobAppFilters] = useState(defaultJobAppFilters);

    useEffect(() => {
        async function fetchJobs() {
            
            const data = await getJobs(jobAppFilters);

           
            setJobApps(data);
            setLoading(false);
        }
        fetchJobs();
    }, [jobAppFilters]);



    if(loading) return <p>Loading Jobs ... </p>

    return (
        <div>
            <Header/>
            <Navbar />
            <Filters draftFilters = {draftJobAppFilters} setDraftJobAppFilters = {setDraftJobAppFilters} setJobAppFilters = {setJobAppFilters} defaultFilters = {defaultJobAppFilters}/>
            <ul>
                {jobApps.map((jobApp) => (
                    <JobAppCard jobInfo = {jobApp}/>
                ))}
            </ul>
        </div>
    );
}