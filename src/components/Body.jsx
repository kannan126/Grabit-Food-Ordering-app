import Restcard from "./Restcard";
import resarr from "../utils/mock";
import { useState, useEffect } from "react";

//Body Section (Body Component) //Parent Component
const Body = () => {
  const [List, setlist] = useState(resarr);
  const [filterres,setfilterres] =  useState(resarr);
 
  const [search, setsearch] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data.cards[3].card.card.restaurentCount);
    console.log(json);
  };

  return (
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filterres = List.filter((res) => {
             return res.info.name.toLowerCase().includes(search.toLowerCase());
            });
            setfilterres(filterres);
          }}
        >
          Search
        </button>
      
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            let filterlist = List.filter((res) => res.info.avgRating > 4.5);
            setfilterres(filterlist);
          }}
        >
          Top Rated restaurent
        </button>
      </div>
      </div>
      <div className="res-container">
        {filterres.map((restaurent) => (
          <Restcard key={restaurent.info.id} resdata={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
