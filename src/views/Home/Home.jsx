import React, { useState, useEffect, useRef } from "react";
import Edit from "../../components/Edit";
import List from "../../components/List";
import { API_GET_DATA } from "../../global/api/API";
import styles from "./index.scss";

async function fetchGETData(setData) {
  const res = await fetch(API_GET_DATA, { method: "GET" });
  const { data } = await res.json();
  setData(data);
}

async function fetchPUTData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({data}),
  });
}

const Home = () => {
  
  const [data, setData] = useState([]);
  const submittingStatue = useRef(false);

  useEffect(() => {
    if (!submittingStatue.current) {
      return;
    }
    fetchPUTData(data).then((data) => (submittingStatue.current = false));
  }, [data]);

  useEffect(() => {
    fetchGETData(setData);
  }, []);

  return (
    <div className={styles.app}>
      <Edit addData={setData} submittingStatue={submittingStatue} />
      <List
        data={data}
        deletedata={setData}
        submittingStatue={submittingStatue}
      />
    </div>
  );
};

export default Home;
