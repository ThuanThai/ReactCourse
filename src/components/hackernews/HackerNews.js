import React, { useEffect, useState } from "react";
import axios from "axios";

//https://hn.algolia.com/api/v1/search?query=react

const handleGetData = async (query) => {
    try {
        const res = await axios.get(
            `https://hn.algolia.com/api/v1/search?query=${query}`
        );
        return res.data?.hits;
    } catch (error) {
        console.log(error);
    }
};

const HackerNews = () => {
    const [hits, setHits] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(false);
    useEffect(() => {
        setLoading(true);
        handleGetData(query)
            .then((data) => {
                setHits(data);
                setLoading(false);
            })
            .catch((error) => {
                setErrorMessage(true);
            });
    }, [query]);
    return (
        <div>
            <input
                type="text"
                className="p-5 mb-5 border border-green-300"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
            />

            {loading && <p>loanding...</p>}
            {loading && errorMessage && (
                <p className="font-thin text-red-500">There is no result</p>
            )}
            {!loading &&
                hits.length > 0 &&
                hits.map((item) => <h3 key={item.created_at}>{item.title}</h3>)}
        </div>
    );
};

export default HackerNews;
