import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/loader/Loader";
import DetailBike from "../components/detailsBike/DetailBike";

const Details = () => {
  const { id } = useParams();
  const [bike, setBikes] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBikes = async () => {
      setLoading(true);
      const { data } = await axios.get(
        "https://bikeindex.org/api/v3/bikes/" + id
      );
      setBikes(data.bike);
      console.log(data.bike);
      setLoading(false);
    };
    fetchBikes();
  }, []);
  // console.log(bike);
  return <div>{loading ? <Loader /> : <DetailBike bike={bike} />}</div>;
};

export default Details;
