

export default function ActiveFilters({filterType, filter, appliedFilters, setJobAppFilters}){

   function cleanFilterType(theFilter) {
        return theFilter.split("_").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(" ");
   }

   function removeFilter(e) {
        e.preventDefault();
        
        let b = {
            ...appliedFilters,
            company_name: ""
        }
        
        if (filterType === "company_name") {
            setJobAppFilters(b);
            console.log(appliedFilters);
            console.log(b);
        } else if (filterType === "job_title") {

            let a = {
                ...appliedFilters,
                job_title: ""
            }
            setJobAppFilters(a);
            console.log(a);
        }
   }

   const fullCleanFilterType = cleanFilterType(filterType);

    
    return (
        <div>
            <button> {fullCleanFilterType}: {filter}</button> 
            <button onClick={removeFilter}>X</button>
        </div>
        
        
    );
}