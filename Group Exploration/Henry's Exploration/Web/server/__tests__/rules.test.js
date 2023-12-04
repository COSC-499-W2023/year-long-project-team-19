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

  it('should return 404 if HTTP req other than GET', async () => {
    const res = await request(app).post('/api/rules/showRules');
    const res2 = await request(app).put('/api/rules/showRules');
    const res3 = await request(app).delete('/api/rules/showRules');

    expect(res.status).toBe(404);
    expect(res2.status).toBe(404);
    expect(res3.status).toBe(404);
  });

  it('should return a 500 status code if an error occurs while fetching rules', async () => {
    jest.spyOn(Rules, 'find').mockImplementationOnce(() => {
      throw new Error('Mocked error');
    });
    const res = await request(app).get('/api/rules/showRules');
  
    expect(res.status).toBe(500);
    expect(res.body.message).toBe('Server error');
  });
  
});

afterAll(done => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close();
  done();
});