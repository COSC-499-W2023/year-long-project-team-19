const request = require('supertest');
const app = require('../index'); 
const Rules = require('../models/Rules');
const mongoose = require('mongoose');


describe('Show Rules', () => {
  it('should return rules with status code 200', async () => {
    const rulesFromDB = await Rules.find();
    const rules = rulesFromDB.map(rule => ({
      ...rule.toObject(), // convert Mongoose document to plain JavaScript object in order to do comparison
      _id: rule._id.toString(),
    }));

    const res = await request(app).get('/api/rules/showRules');

    expect(res.status).toBe(200);
    expect(res.body.rules).toEqual(rules);
  });
});

afterAll(done => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close();
  done();
});