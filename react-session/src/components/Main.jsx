import React, { useState, useEffect } from "react";
import axios from "axios";

import { serverUrl } from "../Constants";

const getData = async () => {
  const headers = { "Access-Control-Allow-Origin": "*" };

  try {
    const { data: res } = await axios.get(`${serverUrl}/`, { headers });
    return res;
  } catch (err) {
    console.error(err);
    return "none";
  }
};

export const Main = () => {
  const [apiData, setApiData] = useState("None");

  useEffect(() => {
    const internalAsyncFunc = async () => {
      const res = await getData();
      setApiData(res);
    };

    internalAsyncFunc();
  });

  return (
    <div>
      <h1>Start here</h1>
      <DataComponent data={apiData} />
    </div>
  );
};

const DataComponent = (props) => <h2>DATA: {props.data}</h2>;
