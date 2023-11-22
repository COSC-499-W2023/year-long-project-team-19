import React, { useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Rules = () => {
  const [titles, setTitles] = React.useState([]);
  const [contexts, setContexts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await axios(
          "https://nodeserver-two.vercel.app/api/rules/showRules" //exposing the api link is okay since there's no sensitive data (?)
        );
        const { rules } = result.data;
        setTitles(rules.map((item) => item.title));
        setContexts(rules.map((item) => item.context));

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="rules-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {titles.map((title, index) => (
              <section key={index} className="rule-section">
                <h2>{title}</h2>
                <p>{contexts[index]}</p>
              </section>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Rules;
