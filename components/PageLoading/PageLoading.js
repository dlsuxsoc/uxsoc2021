import React from "react";
import { Oval } from "react-loader-spinner";
import styles from "./PageLoading.module.scss";

const PageLoading = () => {
  return (
    <div className={styles.container}>
      <Oval width={72} height={72} color="#41BC9C" />
    </div>
  );
};

export default PageLoading;
