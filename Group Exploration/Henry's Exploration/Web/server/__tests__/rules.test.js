const request = require('supertest');
const { app, server } = require('../index'); 
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

describe('Edit Rules', () => {
  const mockId_true = '6553fcd8adcb4e7629dd495c';
  const mockId_false = new mongoose.Types.ObjectId(); 

  it('should return 404 if rules not found', async () => {

    const data = {
      _id: mockId_false,
      order: 1,
      context: 'test',
      title: 'test'
    };

    const res = await request(app).post('/api/rules/editRules').send(data);
    expect(res.status).toBe(404);
  });

  it('should return 200 if rule is updated ', async () => {
    //save current rule state first
    const originalRule = await Rules.findOne({ _id: mockId_true });

    const data = {
      _id: mockId_true,
      order: 1,
      context: 'test',
      title: 'test'
    };

    const res = await request(app).post('/api/rules/editRules').send(data);
    expect(res.status).toBe(200);

    const originalData = {
      _id: mockId_true,
      order: originalRule.order,
      context: originalRule.context,
      title: originalRule.title
    };
    const revertResponse = await request(app).post('/api/rules/editRules').send(originalData);
    expect(revertResponse.status).toBe(200);
  });
  
});

//TODO:
//add rules
//delete rules

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