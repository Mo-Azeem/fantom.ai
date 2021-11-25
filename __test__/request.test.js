import { request } from "../src/client/js/formUtils";
import "regenerator-runtime/runtime.js";
import fetch from 'node-fetch'

global.fetch = fetch

const sampleText = `Insanity is: doing the exact same unit tests 
over and over and over again, expecting your code to get improved`;

describe("Fetching Data Function Case", () => {
  test("it should fetch API data via request() successfully", async () => {
    const response = await request(sampleText);
    const sucess_code = 200; //status code: OK

    expect(response.status).toEqual(sucess_code);
  });

  test("it should fail when an empty string is provided to the fetch method", async () => {
    const response = await request("");
    const bad_request = 400; //status code: OK

    expect(response.status).toEqual(bad_request);
  });
});
