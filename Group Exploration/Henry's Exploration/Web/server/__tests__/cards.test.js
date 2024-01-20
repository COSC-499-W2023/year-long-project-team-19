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