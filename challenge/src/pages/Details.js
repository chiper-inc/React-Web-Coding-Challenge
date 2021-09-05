import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/loader/Loader";
import DetailBike from "../components/detailsBike/DetailBike";

const Details = () => {
  const { serial } = useParams();
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBikes = async () => {
      setLoading(true);
      const { data } = await axios.get(
        `https://bikeindex.org:443/api/v3/search?page=1&per_page=100&serial=${serial}&location=Berlin&distance=10&stolenness=proximity`
      );
      setBikes(data.bikes);
      console.log(data.bikes);
      setLoading(false);
    };
    fetchBikes();
  }, []);
  console.log(bikes);
  return <div>{loading ? <Loader /> : <DetailBike bikes={bikes} />}</div>;
};

export default Details;
