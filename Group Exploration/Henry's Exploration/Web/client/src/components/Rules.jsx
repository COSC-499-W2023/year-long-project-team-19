import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { isLoggedIn } from "../auth.js";
import AddRuleModal from "./modals/AddRuleModal";
import EditRuleModal from "./modals/EditRuleModal";
import Button from 'react-bootstrap/Button';

const Rules = () => {
  const [reload, setReload] = React.useState(false);
  const [id, setId] = React.useState([]);
  const [titles, setTitles] = React.useState([]);
  const [contexts, setContexts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  //add rule modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setRuleInfo({
      order: "",
      title: "",
      context: "",
    });
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const [ruleInfo, setRuleInfo] = useState({
    order: "",
    title: "",
    context: "",
  });

  //edit rule modal
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => {
    setRuleInfoEdit({
      _id: "",
      order: "",
      title: "",
      context: "",
    });
    setShowEdit(false);
  };
  const handleShowEdit = (id, title, context) => {
    setRuleInfoEdit({
      _id: id,
      title,
      context,
    });
    setShowEdit(true);
  };
  
  const [ruleInfoEdit, setRuleInfoEdit] = useState({
    _id: "",
    order: "",
    title: "",
    context: "",
  });

  const handleEditChanges = async () => {
    try {
      console.log(ruleInfoEdit);
      //api call here
      setReload(!reload);
      setShowEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await axios(
          "https://nodeserver-two.vercel.app/api/rules/showRules"
        );
        const { rules } = result.data;
        setTitles(rules.map((item) => item.title));
        setId(rules.map((item) => item._id));
        setContexts(rules.map((item) => item.context));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [reload]);

  const handleSaveChanges = async () => {
    try {
      await axios.post(
        "https://nodeserver-two.vercel.app/api/rules/addRules",
        {
          order: ruleInfo.order,
          title: ruleInfo.title,
          context: ruleInfo.context
        }
      );
      setReload(!reload);
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      {isLoggedIn() ? (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "10px",
            }}
          >
            <Button variant="success" onClick={handleShow}>
              Add Rules{" "}
            </Button>
          </div>
        </div>
      ) : null}
      <div className="rules-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {titles.map((title, index) => (
              <section key={index} className="rule-section">
                <h2>{title}</h2>
                <p>{contexts[index]}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "10px",
                  }}
                >
                <Button variant="primary" onClick={() => handleShowEdit(id[index], title, contexts[index])}>
                  Edit
                </Button>
                </div>
              </section>
            ))}
          </>
        )}
      </div>

      <AddRuleModal
        show={show}
        handleClose={handleClose}
        handleSaveChanges={handleSaveChanges}
        setRuleInfo={setRuleInfo}
        ruleInfo={ruleInfo}
      />

      <EditRuleModal
        show={showEdit}
        handleClose={handleCloseEdit}
        handleEditChanges={handleEditChanges}
        setRuleInfo={setRuleInfoEdit}
        ruleInfo={ruleInfoEdit}
      />
    </>
  );
};

export default Rules;
