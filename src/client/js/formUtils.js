async function fetchAPIData(txt) {
  return await fetch(`http://127.0.0.1:8081/api`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      
    },
    body: JSON.stringify({
      txt: txt,
    }),
  });
}

async function request(text) {
  return fetchAPIData(text)
  .catch((err) => {
    alert("Expressjs Server is Down.")
    return false
  })

}

function showLoading() {
  const loading = document.querySelector(".loading");
  loading.classList.remove("hide");
}

function hideLoading() {
  const loading = document.querySelector(".loading");
  loading.classList.add("hide");
}

function showResults() {
  const results = document.querySelector(".results");
  results.classList.remove("hide");
}

function hideResults() {
  const results = document.querySelector(".results");
  results.classList.add("hide");
}

function setResults(results) {
  resetResult();
  setConfidence(results.confidence);
  setAgreement(results.agreement);
  setIrony(results.irony);
}

function setConfidence(value) {
  const stat = document.getElementById("confidence-stat");
  stat.innerText = `${value}%`;

  const confBar = document.getElementById("confidence-bar");
  confBar.style.height = `${value}%`;
}

function setAgreement(value) {
  const agreementIcon = document.getElementById("agreement-icon");
  if (value === "AGREEMENT")
    return agreementIcon.classList.add("fas", "fa-check-circle", "green");
  agreementIcon.classList.add("fas", "fa-times-circle", "red");
}

function setIrony(value) {
  const ironyIcon = document.getElementById("irony-icon");

  if (value === "IRONIC")
    return ironyIcon.classList.add("fas", "fa-check-circle", "green");

  ironyIcon.classList.add("fas", "fa-times-circle", "red");
}

function resetResult() {
  const ironyIcon = document.getElementById("irony-icon");
  const agreementIcon = document.getElementById("agreement-icon");
  ironyIcon.classList.remove(
    "fas",
    "fa-check-circle",
    "fa-times-circle",
    "green",
    "red"
  );
  agreementIcon.classList.remove(
    "fas",
    "fa-check-circle",
    "fa-times-circle",
    "green",
    "red"
  );
}


export {
  hideLoading,
  showLoading,
  showResults,
  hideResults,
  setResults,
  request
}