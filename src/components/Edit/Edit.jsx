import React, { useState } from "react";
import { v4 } from "uuid";
import styles from "./index.scss";

const Edit = ({ addData, submittingStatue }) => {
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const note_onChange = (e) => {
    setNote(e.target.value);
  };
  const date_onChange = (e) => {
    setDate(e.target.value);
  };
  const time_onChange = (e) => {
    setTime(e.target.value);
  };

  const addItem = () => {
    submittingStatue.current = true;
    addData((predata) => [{ id: v4(), note, date, time }, ...predata]);
  };

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事:</p>
      <input type="text" value={note} onChange={note_onChange} />
      <p>日期:</p>
      <input type="date" value={date} onChange={date_onChange} />
      <p>時間:</p>
      <input type="time" value={time} onChange={time_onChange} />
      <button
        className={styles.add}
        onClick={() => {
          addItem();
        }}
      >
        新增
      </button>
    </div>
  );
};

export default Edit;
