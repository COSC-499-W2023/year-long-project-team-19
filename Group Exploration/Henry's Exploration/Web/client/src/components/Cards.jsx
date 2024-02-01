import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Navbar from "./Navbar";
import logo from "../images/logo3.png";
import { isLoggedIn } from "../auth.js";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Cards = () => {
  const { color } = useParams(); //get color from url (/cards/:color)
  const [cards, setCards] = React.useState([]);
  const [reload, setReload] = React.useState(false);
  // Modal for adding cards
  const [show, setShow] = useState(false);
  const colorOptions = ['red', 'black', 'blue', 'white'];
  const handleClose = () => {
    setShow(false);
    setCardInfo({
      name: '',
      type: '',
      hp: 0,
      attack: 0,
      cost: 0,
      ability: '',
    });
  };
  const handleShow = () => setShow(true);
  const [cardInfo, setCardInfo] = useState({
    name: '',
    type: '',
    hp: 0,
    attack: 0,
    cost: 0,
    ability: '',
  });
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setCardInfo((prevInfo) => ({
      ...prevInfo,
      [name]: name === 'hp' || name === 'attack' || name === 'cost' ? parseInt(value) : value,
    }));
  };
  const handleSaveChanges = async () => {
    let isValid = true;
    for (const key in cardInfo) {
      if (cardInfo[key] === '' || cardInfo[key] === 0) {
        isValid = false;
        break;
      }
    }
    if (!isValid) {
      alert('Please fill out all fields');
      return;
    }
    
    try {
      await axios.post(
        "https://nodeserver-two.vercel.app/api/cards/addCard",
        {
          name: cardInfo.name,
          type: cardInfo.type,
          hp: cardInfo.hp,
          attack: cardInfo.attack,
          cost: cardInfo.cost,
          ability: cardInfo.ability,
        }
      );
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  
    // Close the modal
    handleClose();
  };

  //Modal for editing cards
  const [showEdit, setShowEdit] = useState(false);
  const [originalCardName, setOriginalCardName] = useState("");
  const handleCloseEdit = () => {
    setShowEdit(false);
    setCardInfo({
      name: '',
      type: '',
      hp: 0,
      attack: 0,
      cost: 0,
      ability: '',
    });
  };
  const handleShowEdit = (card) => {
    setOriginalCardName(card.name);
    setCardInfo({
      name: card.name,
      type: card.type,
      hp: card.hp,
      attack: card.attack,
      cost: card.cost,
      ability: card.ability,
    });
    setShowEdit(true);
  };
  const handleSaveChangesEdit = async () => {
    let isValid = true;
    for (const key in cardInfo) {
      if (cardInfo[key] === '' || cardInfo[key] === 0 || isNaN(cardInfo.attack) || isNaN(cardInfo.cost) || isNaN(cardInfo.hp)) { 
        isValid = false;
        break;
      }
    }
    if (!isValid) {
      alert('Please fill out all fields');
      return;
    }

    try {
      await axios.put(
        "https://nodeserver-two.vercel.app/api/cards/editCard",
        {
          originalName: originalCardName,
          name: cardInfo.name,
          type: cardInfo.type,
          hp: cardInfo.hp,
          attack: cardInfo.attack,
          cost: cardInfo.cost,
          ability: cardInfo.ability,
        }
      )
      setReload(!reload);
      setCardInfo({
        name: '',
        type: '',
        hp: 0,
        attack: 0,
        cost: 0,
        ability: '',
      });

      setShowEdit(false);
    } catch (error) {
      console.log(error);
    }
  };
  
  // Delete Card 
  const handleDelete = async (cardName) => {
    try {
      await axios.delete(
        "https://nodeserver-two.vercel.app/api/cards/deleteCard",
        {
          data: {name: cardName}
        }
      );
      setReload(!reload); //reload cards
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          "https://nodeserver-two.vercel.app/api/cards/showCards" //exposing the api link is okay since there's no sensitive data (?)
        );
        const filteredCards = result.data.cards.filter(
          (card) => card.type.toLowerCase() === color.toLowerCase()
        );
        setCards(filteredCards);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [reload, color]);

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
              Add Card{" "}
            </Button>
          </div>
        </div>
      ) : null}
      <div className="bg-docs" style={{ marginTop: "10px" }}>
        <div id="cards">
          {cards.map((card) => (
            <figure
              key={card._id}
              className={`card card--${card.type.toLowerCase()}`}
            >
              <div className="card__image-container">
                <img src={logo} alt={card.name} className="card__image" />
              </div>

              <figcaption className="card__caption">
                <h1 className="card__name">{card.name}</h1>

                <h3 className="card__type">{card.type}</h3>

                <table className="card__stats">
                  <tbody>
                    <tr>
                      <th>HP</th>
                      <td>{card.hp}</td>
                    </tr>
                    <tr>
                      <th>Attack</th>
                      <td>{card.attack}</td>
                    </tr>

                    <tr>
                      <th>Cost</th>
                      <td>{card.cost}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="card__abilities">
                  <h4 className="card__ability">
                    <span className="card__label">Ability</span>
                    {card.ability}
                  </h4>
                </div>
              </figcaption>
              {/* Only Displayed after logging in as admin. */}
              {isLoggedIn() ? (
                 <div style={{ display: 'flex', marginTop: '10px' }}>
                  <Button variant="info" style={{ width: '50%' }} onClick={() => handleShowEdit(card)}>
                    Edit
                  </Button>
                  <Button variant="danger" style={{ width: '50%' }} onClick={() => handleDelete(card.name) }>
                    Delete
                  </Button>
               </div>
              ) : (
                null
              )}
            </figure>
          ))}
        </div>
      </div>

      {/* Modal Add Card */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCardName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={cardInfo.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formCardType">
              <Form.Label>Color</Form.Label>
              <Form.Control
                as="select"  // for dropdown
                name="type"
                value={cardInfo.type}
                onChange={handleChange}
              >
                <option value="">Select Color</option>
                {colorOptions.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formCardHp">
              <Form.Label>HP</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter HP"
                name="hp"
                value={cardInfo.hp}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formCardAttack">
              <Form.Label>Attack</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter attack"
                name="attack"
                value={cardInfo.attack}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formCardDefense">
              <Form.Label>Cost</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter cost"
                name="cost"
                value={cardInfo.cost}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formCardAbility">
              <Form.Label>Ability</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ability"
                name="ability"
                value={cardInfo.ability}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

      {/* Modal for editing cards */}
      <Modal show={showEdit} onHide={handleCloseEdit} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCardNameEdit">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={cardInfo.name}
                onChange={handleChange}
                // 
              />
            </Form.Group>

            <Form.Group controlId="formCardTypeEdit">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter type"
                name="type"
                value={cardInfo.type}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formCardHpEdit">
              <Form.Label>HP</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter HP"
                name="hp"
                value={parseInt(cardInfo.hp)}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formCardAttackEdit">
              <Form.Label>Attack</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter attack"
                name="attack"
                value={parseInt(cardInfo.attack)}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formCardDefenseEdit">
              <Form.Label>Cost</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter cost"
                name="cost"
                value={parseInt(cardInfo.cost)}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formCardAbilityEdit">
              <Form.Label>Ability</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ability"
                name="ability"
                value={cardInfo.ability}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseEdit()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSaveChangesEdit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cards;
