import React from "react";
import LoadingGif from "../images/gif/loading-arrow.gif";

export default function Loading() {
  return (
    <div className="loading">
      <img src={LoadingGif} alt="" />
      <h4>loading...</h4>
    </div>
  );
}
