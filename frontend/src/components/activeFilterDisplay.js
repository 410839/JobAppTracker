

export default function ActiveFilters({ filterType, filter}){

   function cleanFilterType(theFilter) {
        return theFilter.split("_").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(" ");
   }

   const fullCleanFilterType = cleanFilterType(filterType);

    
    return (
            
        <button> {fullCleanFilterType}:{filter}</button>
        
    );
}