import React, { useEffect, useState } from "react";
import "./loader.css";
import FadeLoader from "react-spinners/FadeLoader";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <FadeLoader className="fadeloader" color="#FFF" />
          <h2 className="chargement">LOADING...</h2>
        </div>
      ) : null}
    </>
  );
};

export default Loader;
