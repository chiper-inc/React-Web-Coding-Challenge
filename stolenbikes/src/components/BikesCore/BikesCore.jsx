import React, {useEffect, useState} from 'react';
import axios from 'axios';
import BikesList from '../BikesList/BikesList';
import Filter from '../Filter/Filter';
import Pagination from '../Pagination/Pagination';


function BikesCore() {
    const [reportedBikes, setReportedBikes] = useState();
    const [totalCasesCount, setTotalCasesCount] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [casesPerPage] = useState(10);

    //Get Bikes reported and total cases count
    function getData (page = currentPage, keyword = '') {
            axios.get(`https://bikeindex.org:443/api/v3/search?page=${page}&per_page=10&query=${keyword}&location=Berlin&distance=10&stolenness=proximity`)
            .then(({data:{ bikes }}) => { setReportedBikes(bikes)})

            axios.get(`https://bikeindex.org:443/api/v3/search/count?query=${keyword}&location=Berlin&distance=10&stolenness=proximity`)
            .then(({data:{ proximity : totalCasesCount }}) => { setTotalCasesCount( totalCasesCount)})
            .catch(error => {
                alert("Oops, we couldn't bring the cases, try again by refreshing the page!")
             console.log(error)
            })
    }
    useEffect(() => {
        getData()
    }, []);


    //Change Page
    function paginate(pageNumber){
        if(currentPage !== pageNumber){
            setCurrentPage(pageNumber)
            getData()
            window.scroll(0, 0);
        }
    }
    return (
        <div>
            <Filter
                getData={getData}
                currentPage={currentPage}
                setTotalCasesCount={setTotalCasesCount}
                setReportedBikes={setReportedBikes}
                startDate={startDate} setStartDate={setStartDate}
                endDate={endDate} setEndDate={setEndDate}
            />
            {totalCasesCount ? <span>Total: {totalCasesCount}</span> : totalCasesCount === 0 ? null : <span>Loading Total...</span>}
            {reportedBikes ? <BikesList bikes={reportedBikes}/> : <p>Loading Cases...</p>}
            <Pagination casesPerPage={casesPerPage} totalCasesCount={totalCasesCount} paginate={paginate} />
        </div>
    )
}

export default BikesCore
