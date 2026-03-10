

export default function Filters({filters, setJobAppFilters}) {


    function handleJobTitleChange(e) {
        setJobAppFilters({
            ...filters,
                job_title: e.target.value
        })
    };

    return (
        <div>
            <input type = "text"
            placeholder="Search job title..."
            value = {filters.job_title ?? ""}
            onChange= {handleJobTitleChange}
            />
        </div>
    );
}