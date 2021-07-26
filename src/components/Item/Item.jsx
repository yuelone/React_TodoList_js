import React from "react";
import styles from "./index.scss";

const Item = ({ id, note, date, time, deletedata, submittingStatue }) => {
  const deleteItem = () => {
    submittingStatue.current = true;
    deletedata((pre) => {
      return pre.filter((theItem) => theItem.id !== id);
    });
  };

  return (
    <div className={styles.item}>
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button
        className={styles.remove}
        onClick={() => {
          deleteItem();
        }}
      >
        刪除
      </button>
    </div>
  );
};

export default Item;
