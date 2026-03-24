import { useEffect, useState } from "react";
import { getJobs } from "../services/jobService.js";
import Navbar from "../components/navBarComponent.js";
import Header from "../components/headerComponent.js"
import JobAppCard from "../components/jobAppDisplay.js";
import Filters from '../components/filterBar.js';
import ActiveFilters from "../components/activeFilterDisplay.js";
import {useSearchParams} from "react-router-dom";


export default function GetJobDetails() {

    const [searchParams, setSearchParams] = useSearchParams();

    const [loading, setLoading] = useState(true);

    const [jobApps, setJobApps] = useState([]);

    const defaultJobAppFilters = {status: "", company_name: "", job_title: ""};

    const [jobAppFilters, setJobAppFilters] = useState(defaultJobAppFilters);

    const [draftJobAppFilters, setDraftJobAppFilters] = useState(defaultJobAppFilters);

    const [appliedJobAppFilters, setAppliedJobAppFilters] = useState([]);

    useEffect(() => {
        async function fetchJobs() {
            
            const data = await getJobs(jobAppFilters);

           
            setJobApps(data);
            setLoading(false);
            
        }
        setAppliedJobAppFilters(Object.entries(jobAppFilters).filter(([key, v]) => v !== ""));
        
        const activeFilters = Object.fromEntries(
            Object.entries(jobAppFilters).filter(([_, v]) => v !== "")
        );
        // update URL
        setSearchParams(activeFilters);
        fetchJobs();
    }, [jobAppFilters]);

    if(loading) return <p>Loading Jobs ... </p>

    return (
        <div>
            <Header/>
            <Navbar />
            <Filters draftFilters = {draftJobAppFilters} setDraftJobAppFilters = {setDraftJobAppFilters} setJobAppFilters = {setJobAppFilters} defaultFilters = {defaultJobAppFilters}/>
            {appliedJobAppFilters.map(([key, jobFilter]) => (
                
                <ActiveFilters filterType = {key} filter = {jobFilter} appliedFilters = {appliedJobAppFilters} setJobAppFilters = {setJobAppFilters}/>
            ))}
            <ul>
                {jobApps.map((jobApp) => (
                    <JobAppCard jobInfo = {jobApp}/>
                ))}
            </ul>
        </div>
    );
}