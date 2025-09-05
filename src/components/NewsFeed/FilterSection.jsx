// Sorting by Comment Count and Date Created
const FilterSection = ({searchQuery,sortOrder,handleSearchChange,handleSorting}) => {
    return (
        <div>
            {/* Searching  */}
            <div>
                <label htmlFor="">Search User</label>
                <input 
                    type="text" 
                    value={searchQuery}
                    placeholder="Search by User"
                    onChange={(e)=>handleSearchChange(e.target.value)}
                    className="input"
                />
            </div>
            {/* Sorting */}
            <div>
                <label htmlFor="">Sort By Comment Count</label>
                <select name="" id="" 
                    value={sortOrder} 
                    onChange={(e)=> handleSorting(e.target.value)}
                    className="select w-1/2">
                    <option value="">Low To High</option>
                    <option value="">High To Low</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Sort By Last Created </label>
                <select name="" id="">
                    <option value="">Latest</option>
                    <option value="">Newest</option>
                </select>
            </div>
        </div>
    );
};

export default FilterSection;