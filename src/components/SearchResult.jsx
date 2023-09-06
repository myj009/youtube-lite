import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/contextApi";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {
  const [result, setResult] = useState(null);
  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResult();
  }, [searchQuery]);

  const fetchSearchResult = async () => {
    setLoading(true);
    const data = await fetchDataFromApi(`search/?q=${searchQuery}`);
    console.log(data);
    setResult(data?.contents);
    setLoading(false);
  };

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto no-scrolling bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item) => {
            if (item?.type !== "video") return false;
            let video = item?.video;
            return <SearchResultVideoCard key={video?.videoId} video={video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
