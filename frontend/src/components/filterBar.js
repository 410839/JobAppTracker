

export default function Filters({filters}, {setFilters}) {
    return (
        <div>
            <input type = "text"
            placeholder="Search job title..."
            value = {filters.job_title ?? ""}
            onChange = {(e) => setFilters((prev) => ({
                ...prev,
                job_title: e.target.value || null
            }))
            }
            />
        </div>
    );
}