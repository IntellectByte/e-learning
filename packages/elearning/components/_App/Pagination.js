import React, {useState, useEffect} from 'react';

const Pagination = ({totalItems, pageSize, onPageChange, fetchData}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / pageSize);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            onPageChange(pageNumber);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(<li key={i} className={currentPage === i ? 'active' : ''}>
                <button onClick={() => {
                    handlePageChange(i)
                }}>{i}</button>
            </li>);
        }
        return pageNumbers;
    };

    return (<div className="pagination">
        <ul>{renderPageNumbers()}</ul>
    </div>);
};

export default Pagination;
