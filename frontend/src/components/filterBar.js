

export default function Filters({filters, setJobAppFilters}) {


    function handleJobTitleChange(e) {
        setJobAppFilters({
            ...filters,
                job_title: e.target.value
        });
    }

    function handleCompanyNameChange(e) {
        setJobAppFilters({
            ...filters,
            company_title: e.target.value
        });
    }

    return (
        <div>
            <input type = "text"
            placeholder="Search job title..."
            value = {filters.job_title ?? ""}
            onChange= {handleJobTitleChange}
            />

            <input type = "text"
            placeholder= "Search company name"
            value = {filters.company_title ?? ""}
            onChange = {handleCompanyNameChange}
            />
            
        </div>
    );
}