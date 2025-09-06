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
                <label htmlFor="">Sort By</label>
                <select name="" id="" 
                    value={sortOrder} 
                    onChange={(e)=> handleSorting(e.target.value)}
                    className="select w-1/2">
                    <option value="-comment_count">Most Comments</option>
                    <option value="comment_count">Lowest Comments</option>
                    <option value="-like_count">Most Likes</option>
                    <option value="like_count">Lowest Likes</option>
                    <option value="-created_at">Latest</option>
                    <option value="created_at">Earliest</option>
                </select>
            </div>
            
        </div>
    );
};

export default FilterSection;