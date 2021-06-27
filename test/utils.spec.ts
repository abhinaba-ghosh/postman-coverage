import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { setPostmanCovConfig } from '../src/config';
import { getPostmanSchema } from '../src/postman';

describe('Postman Collection and Schema collector', () => {
  // it('should get the postman xapi key', async () => {
  //   process.env.API_POSTMAN_XAPI_KEY = 'PM1234';
  //   const key = await getPostmanXAPIKey();
  //   expect(key).toEqual('PM1234');
  //   delete process.env.NODE_ENV;
  // });

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
    setPostmanCovConfig();
    const col = await getPostmanSchema();
    console.log(col);
  });
});
