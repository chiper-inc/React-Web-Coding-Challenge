import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../card/Card";
import Loader from "../loader/Loader";

const CardList = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBikes = async () => {
    setLoading(true);
    const { data } = await axios.get(
      "https://bikeindex.org:443/api/v3/search?page=1&per_page=10&distance=10&stolenness=proximity"
    );
    setBikes(data.bikes);
    setLoading(false);
  };
  useEffect(() => {
    fetchBikes();
  }, []);

  return (
    <div>
      {loading ? <Loader /> : bikes?.map((b) => <Card key={b.id} {...b} />)};
    </div>
  );
};
export default CardList;
