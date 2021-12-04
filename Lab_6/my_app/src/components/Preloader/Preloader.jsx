import React from "react";
import loading from "../../Assets/tenor.gif";
import styles from "./Preloader.module.css"

const Preloader = ({ style }) => {
	return <img src={loading} alt="" style={style} className={styles.loading}/>;
};

export default Preloader;