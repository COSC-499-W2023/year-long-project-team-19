import React, { useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import logo from "../images/logo.png";

const Cards = () => {
  const [cards, setCards] = React.useState([]);
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
  }, []);

  return (
    <>
      <Navbar />
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
    </>
  );
};

export default Cards;
