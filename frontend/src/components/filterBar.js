import {useSearchParams} from "react-router-dom";



export default function Filters({ draftFilters, setDraftJobAppFilters, setJobAppFilters, defaultFilters }) {
    const [searchParams, setSearchParams] = useSearchParams();

    function handleJobTitleChange(e) {
        setDraftJobAppFilters({
            ...draftFilters,
                job_title: e.target.value
        });
    }

    function handleCompanyNameChange(e) {
        setDraftJobAppFilters({
            ...draftFilters,
            company_name: e.target.value
        });
    }

    function handleClearFilters() {
        setDraftJobAppFilters(defaultFilters);
        setJobAppFilters(defaultFilters);
        setSearchParams({});
    }

    function handleApplyFilters(e) { 
        e.preventDefault();
        setJobAppFilters({
            ...draftFilters
        });
        const activeFilters = Object.fromEntries(
            Object.entries(draftFilters).filter(([_, v]) => v !== "")
        );
    
        // update URL
        setSearchParams(activeFilters);
    }

    return (
        <div>
            <form onSubmit = {handleApplyFilters}>

            <input type = "text"
            placeholder="Search job title..."
            value = {draftFilters.job_title ?? ""}
            onChange= {handleJobTitleChange}
            />

            <input type = "text"
            placeholder= "Search company name"
            value = {draftFilters.company_name ?? ""}
            onChange = {handleCompanyNameChange}
            />

            <button type="button" onClick = {handleClearFilters}>Clear Filters</button>
            <input type = "submit" value= "Apply Filters"></input>
            </form>
        

        </div>
    );
}