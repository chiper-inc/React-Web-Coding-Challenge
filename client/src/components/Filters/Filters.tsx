import React, { useState } from "react";
import styles from './Filters.module.css'

const Filters: React.FC = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState({
    from: '',
    to: '',
  })

  return (
    <div>
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search by title..."
          onChange={(e) => setTitle(e.target.value)}
          className={styles.search}
        />
        <div className={styles.date}>
          <span>From: </span>
          <input type='date' onChange={e => setDate({...date, from: e.target.value})} />
        </div>
        <div className={styles.date}>
          <span>To: </span>
          <input type='date' onChange={e => setDate({...date, to: e.target.value})} />
        </div>
      </div>
      <div className={styles.button}>
        <button type="submit" className={styles.btn}>Search</button>
      </div>
    </div>
  );
};

export default Filters;