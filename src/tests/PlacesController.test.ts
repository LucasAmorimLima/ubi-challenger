import app from '../app';
import supertest from 'supertest';
import { getToken } from './axios/getToken';

describe("Places Tests",()=>{
  
  it('should get all places ', async () => {
    const token  = await getToken()
    const res = await supertest(app)
      .get('/places')
      .set('Authorization', 'Bearer  ' + token)
      .set('Content-Type', 'application/json')
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toEqual(200)
  })
 
  it('should get place by id ', async () => {
    const token  = await getToken()
    const res = await supertest(app)
      .get('/places/61eb2c62ecb525a3d2246720')
      .set('Authorization', 'Bearer  ' + token)
      .set('Content-Type', 'application/json')
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toEqual(200)
  })
  
  it('should create a new place', async () => {
    const token  = await getToken()
    const res = await supertest(app)
      .post('/places')
      .set('Authorization', 'Bearer  ' + token)
      .set('Content-Type', 'application/json')
      .send({
        "name":"celular",
      })
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toEqual(200)
  })

  it('should create a new place', async () => {
    const token  = await getToken()
    const res = await supertest(app)
      .put('/places/61eb2c62ecb525a3d2246720')
      .set('Authorization', 'Bearer  ' + token)
      .set('Content-Type', 'application/json')
      .send({
        "name":"rice",
      })
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toEqual(200)
  })

  it('should create a new place', async () => {
    const token  = await getToken()
    const res = await supertest(app)
      .delete('/places/61eb2c62ecb525a3d2246720')
      .set('Authorization', 'Bearer  ' + token)
      .set('Content-Type', 'application/json')
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toEqual(200)
  })
})
  
  

