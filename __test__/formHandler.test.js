/**
* @jest-environment jsdom
*/

import "regenerator-runtime/runtime.js";
import { handleSubmit } from "../src/client/js/formHandler";
import {
  hideResults,
  showLoading,
  hideLoading,
  showResults,
  request
} from "../src/client/js/formUtils";

jest.mock("../src/client/js/formUtils.js");

hideResults.mockImplementation(() => console.log('Hiding Old Results if Exist, Preparing for Fetching New Data!'))
showLoading.mockImplementation(() => console.log('Showing Loading UI.'))
hideLoading.mockImplementation(() => console.log('Hiding Loading UI, Got Some New Data to Display!'))
showResults.mockImplementation(() => console.log('Now Showing The New Fetched Data!'))
request.mockImplementation(() => {
    return {
        json: () => {
            return JSON.stringify({
                agreement: "AGREEMENT", 
                irony: "NONIRONIC",
                confiedence: "100"
            })
        }
    }
})

const sampleText = `Everything you’ve ever wanted is on the other side of fear.`;

function emulateUserTyping(text) {
    document.getElementById("nlg-text").value = text;
}

describe("Testing Form Submitting Handling", () => {
  test("it should retrive form data successfully and submit it to the API.", async () => {
    document.body.innerHTML = `
            <form id="nlg-form">
                <p>Paste your text here</p>
                <textarea
                type="text"
                name="nlg-text"
                id="nlg-text"
                required></textarea>
                <button id="button" onclick="${handleSubmit}">Proceed</button>    
            </form>`;

    //emulating user typing into the textarea
    emulateUserTyping(sampleText);
    //emulating submitting the form
    await handleSubmit();
  });
});