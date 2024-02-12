const request = require('supertest');
const { app, server } = require('../index'); 
const mongoose = require('mongoose');
const Cards = require('../models/Cards');

describe('Show Cards', () => {
  it('should return cards with status code 200', async () => {
    const cardsFromDB = await Cards.find();
    const cards = cardsFromDB.map(card => ({
      ...card.toObject(), // convert Mongoose document to plain JavaScript object in order to do comparison
      _id: card._id.toString(),
    }));

    const res = await request(app).get('/api/cards/showCards');

    expect(res.status).toBe(200);
    expect(res.body.cards).toEqual(cards);
  });
});

describe('Add Card', () => {
  it('should add a card with status code 200', async () => {
    const newCard = {
      name: 'rambo',
      type: 'red',
      hp: 110,
      attack: 50,
      cost: 30,
      ability: 'New Ability',
    };

    const res = await request(app).post(`/api/cards/addCard`).send(newCard);
    expect(res.status).toBe(200);
  });
});

describe('Edit Card', () => {
  it('should edit a card with status code 200', async () => {

    const newCard = {
      originalName: 'rambo',
      name: 'rambo',
      type: 'red',
      hp: 100,
      attack: 50,
      cost: 30,
      ability: 'New Ability',
    };

    const res = await request(app).put(`/api/cards/editCard`).send(newCard);
    console.log(res.body);
    expect(res.status).toBe(200);
  });

  it('should return 400 if missing required fields', async () => {
    const newCard = {
      originalName: 'rambo',
      name: 'rambo',
      type: 'red',
      hp: 100,
      attack: 50,
      // cost: 30, // missing field
    };

    const res = await request(app).put(`/api/cards/editCard`).send(newCard);
    expect(res.status).toBe(400);
  });

});

describe('Delete Card', () => {
  it('should delete a card with status code 200', async () => {
    const res2 = await request(app).delete(`/api/cards/deleteCard`).send({ name: 'rambo' });
    expect(res2.status).toBe(200);
  });
});

afterAll(done => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close();
  if (server && server.close) {
    server.close(done);
  } else {
    done();
  }
  done();
});