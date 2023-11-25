import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import logo from "../images/logo.png";
import { isLoggedIn } from "../auth.js";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Cards = () => {
  const [cards, setCards] = React.useState([]);
  const [reload, setReload] = React.useState(false);
  // Modal for adding cards
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setCardInfo({
      name: '',
      type: '',
      hp: 0,
      attack: 0,
      defense: 0,
      ability: '',
    });
  };
  const handleShow = () => setShow(true);
  const [cardInfo, setCardInfo] = useState({
    name: '',
    type: '',
    hp: 0,
    attack: 0,
    defense: 0,
    ability: '',
  });
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setCardInfo((prevInfo) => ({
      ...prevInfo,
      [name]: name === 'hp' || name === 'attack' || name === 'defense' ? parseInt(value) : value,
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
          defense: cardInfo.defense,
          ability: cardInfo.ability,
        }
      );
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
    console.log(cardInfo);
  
    // Close the modal
    handleClose();
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          "https://nodeserver-two.vercel.app/api/cards/showCards" //exposing the api link is okay since there's no sensitive data (?)
        );
        setCards(result.data.cards);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [reload]);

  return (
    <>
      <Navbar />
      {isLoggedIn() ? (
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px' }}>
            <Button variant="success" onClick={handleShow}>Add Card </Button>
          </div>
        </div>
      ) : null}
      <div className="bg-docs" style={{marginTop: '10px'}}>
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
                      <th>Defense</th>
                      <td>{card.defense}</td>
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
            </figure>
          ))}
        </div>
      </div>

      {/* Modal */}
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
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter type"
              name="type"
              value={cardInfo.type}
              onChange={handleChange}
            />
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
            <Form.Label>Defense</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter defense"
              name="defense"
              value={cardInfo.defense}
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
    </>
  );
};

export default Cards;
