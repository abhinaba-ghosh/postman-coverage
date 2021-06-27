import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import 'jest';
import { getPostmanXAPIKey } from '../src/utils';
import { getPostmanOperations, getCollection, getSchema } from '../src/postman';

describe('Postman Collection and Schema collector', () => {
  it('should get the postman xapi key', async () => {
    process.env.API_POSTMAN_XAPI_KEY = 'PM1234';
    const key = await getPostmanXAPIKey();
    expect(key).toEqual('PM1234');
    delete process.env.NODE_ENV;
  });

  //   it('returns data when sendMessage is called', done => {
  //       var mock = new MockAdapter(axios);
  //       const data = { response: true };
  //       mock.onGet('https://us-central1-hutoma-backend.cloudfunctions.net/chat').reply(200, data);

  //       chatbot.sendMessage(0, 'any').then(response => {
  //           expect(response).toEqual(data);
  //           done();
  //       });
  //   });

  it('should get the postman xapi key', async () => {
    const col = await getSchema('');
    console.log(JSON.stringify(col));
  });
});
