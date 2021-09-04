import React, {useEffect, useState} from 'react';
import axios from 'axios';
import BikesList from '../BikesList/BikesList';
import Filter from '../Filter/Filter';
import Pagination from '../Pagination/Pagination';


function BikesCore() {
    const [reportedBikes, setReportedBikes] = useState();
    const [totalCasesCount, setTotalCasesCount] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [casesPerPage] = useState(10);

    //Get Bikes reported and total cases count
    function getData (page = currentPage, keyword= '') {
        Promise.all([
            axios.get(`https://bikeindex.org:443/api/v3/search?page=${page}&per_page=10&query=${keyword}&location=Berlin&distance=10&stolenness=proximity`),
            axios.get(`https://bikeindex.org:443/api/v3/search/count?query=${keyword}&location=Berlin&distance=10&stolenness=proximity`)
        ])
        .then(([{data: { bikes}} , {data: { proximity : totalCasesCount}}]) => {
            setReportedBikes(bikes);
            setTotalCasesCount(totalCasesCount);
        })
        .catch(error => alert(error))
    }
    useEffect(() => {
        getData()
    }, []);

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Filter getData={getData} currentPage={currentPage}/>
            <span>Total: {totalCasesCount}</span>
            <BikesList bikes={reportedBikes}/>
            <Pagination casesPerPage={casesPerPage} totalCasesCount={totalCasesCount} paginate={paginate} />
        </div>
    )
}

export default BikesCore
