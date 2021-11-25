import {
  hideLoading,
  showLoading,
  showResults,
  hideResults,
  setResults,
  request,
} from "./formUtils";

async function handleSubmit() {

  hideResults();
  const form = document.getElementById("nlg-form");
  const isValid = form.checkValidity();

  if (!isValid) return alert("Please add some text.");

  showLoading();
  const text = document.getElementById("nlg-text").value;

  const response = await request(text);
  if(!response) return
  var results = await response.json();
  hideLoading();
  setResults(results);
  showResults();
}

export { handleSubmit };
