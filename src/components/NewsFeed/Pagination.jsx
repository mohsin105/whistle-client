import React, { useEffect } from 'react';

const Pagination = ({currentPage, handlePageChange, totalPages}) => {
    useEffect(()=>{
        console.log(totalPages);
        console.log(currentPage);
        // Array.from({length:3},(_,i)=> console.log(i));
    },[totalPages]);
    return (
        <div>
            
            {Array.from({length:totalPages},(_,i)=>(
                <button
                    key={i}
                    value={i+1}
                    onClick={()=> i+1>totalPages? handlePageChange(i):handlePageChange(i+1)}
                    className={`mx-1 px-3 py-1 rounded ${currentPage===i+1? "bg-secondary text-white":' bg-gray-200'}`}
                >
                    {i+1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;