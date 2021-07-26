import React from "react";
import Item from "../../components/Item";
import styles from "./index.scss";

const List = ({ data, deletedata, submittingStatue }) => (
  <div className={styles.list}>
    {data.map((theItem) => {
      const { id, note, date, time } = theItem;
      return (
        <Item
          key={id}
          id={id}
          note={note}
          date={date}
          time={time}
          deletedata={deletedata}
          submittingStatue={submittingStatue}
        />
      );
    })}
  </div>
);

export default List;
