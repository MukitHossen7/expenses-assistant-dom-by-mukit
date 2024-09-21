// let income = document.getElementById("income");
// let software = document.getElementById("software");
// let courses = document.getElementById("courses");
// let internet = document.getElementById("internet");

//Calculate function

function getInputById(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}
document.getElementById("calculate").addEventListener("click", function () {
  let income = getInputById("income");
  let software = getInputById("software");
  let courses = getInputById("courses");
  let internet = getInputById("internet");
  let expensesAmount = software + courses + internet;
  let balance = income - expensesAmount;
  document.getElementById("total-expenses").innerText = expensesAmount;
  document.getElementById("balance").innerText = balance;
  document.getElementById("results").classList.remove("hidden");
});

//Calculate Savings Function
function getSavingsInputById(id) {
  let savingsInput = parseFloat(document.getElementById(id).value);

  return savingsInput;
}
document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    let income = getInputById("income");
    let software = getInputById("software");
    let courses = getInputById("courses");
    let internet = getInputById("internet");
    let expensesAmount = software + courses + internet;
    let balance = income - expensesAmount;
    let savings = getSavingsInputById("savings");
    let savingsAmount = (balance * savings) / 100;
    let remainingBalance = balance - savingsAmount;
    document.getElementById("savings-amount").innerText = savingsAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  });

//History Button Section
// function getStyleButtonById(id) {
//   let buttonStyle = document.getElementById(id);
//   buttonStyle.classList.add(
//     "text-white",
//     "bg-gradient-to-r",
//     "from-blue-500",
//     "to-purple-600"
//   );
//   return buttonStyle;
// }
document.getElementById("history-tab").addEventListener("click", function () {
  let historyBtn = document.getElementById("history-tab");
  historyBtn.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  let assistantBtn = document.getElementById("assistant-tab");
  assistantBtn.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
});

document.getElementById("assistant-tab").addEventListener("click", function () {
  let historyBtn = document.getElementById("history-tab");
  historyBtn.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  let assistantBtn = document.getElementById("assistant-tab");
  assistantBtn.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
});
