// Sorting by Comment Count and Date Created
const FilterSection = ({searchQuery,sortOrder}) => {
    return (
        <div>
            {/* Searching  */}
            <div>
                <label htmlFor="">Search User</label>
                <input type="text" />
            </div>
            {/* Sorting */}
            <div>
                <label htmlFor="">Sort By Comment Count</label>
                <select name="" id="">
                    <option value="">Low To High</option>
                    <option value="">High To Low</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Sort By Last Created </label>
            </div>
        </div>
    );
};

export default FilterSection;