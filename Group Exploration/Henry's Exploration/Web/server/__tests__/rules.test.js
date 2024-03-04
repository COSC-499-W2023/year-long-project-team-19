const request = require('supertest');
// const { app, server } = require('../index'); 
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

describe('Edit Rules', () => {
  const mockId_true = '65de8324eee003e10f5c18c0';
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
      order: 100,
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

describe('Add Rules', () => {
  it('should return 400 if missing required fields', async () => {
    const data = {
      order: 1,
      context: 'test'
    };

    const res = await request(app).post('/api/rules/addRules').send(data);
    expect(res.status).toBe(400);
  });

  it('should return 200 if rule is added', async () => {
    const data = {
      order: 10,
      context: 'test',
      title: 'test'
    };
  
    const res = await request(app).post('/api/rules/addRules').send(data);
    expect(res.status).toBe(200);
    const rule = await Rules.findOne({ order: 10, context: 'test', title: 'test' });
    await rule.deleteOne();
  });
  
});


//TODO:
//delete rules
