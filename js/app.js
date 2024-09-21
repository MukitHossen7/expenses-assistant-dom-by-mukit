//Calculate function Code

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

  if (income < 0 || expensesAmount > income) {
    document.getElementById("income-error").classList.remove("hidden");
    return;
  }
  if (isNaN(income) || isNaN(software) || isNaN(courses) || isNaN(internet)) {
    document.getElementById("income-error").classList.remove("hidden");
    document.getElementById("software-error").classList.remove("hidden");
    document.getElementById("courses-error").classList.remove("hidden");
    document.getElementById("internet-error").classList.remove("hidden");
    return;
  }

  document.getElementById("total-expenses").innerText = expensesAmount;
  document.getElementById("balance").innerText = balance;
  document.getElementById("results").classList.remove("hidden");

  //Expense History function code

  let historyList = document.getElementById("history-list");
  let div = document.createElement("div");
  div.innerHTML = `
     <div class="flex flex-col bg-white shadow-sm rounded-md p-4">
     <span class="text-xs text-gray-500">Date: ${new Date().toLocaleDateString()}</span>
      <span class="text-xs text-gray-500">Income: ৳${income}</span>
       <span class="text-xs text-gray-500">Expenses: ৳${expensesAmount}</span>
        <span class="text-xs text-gray-500">Balance: ৳${balance}</span>
     </div>
  `;
  historyList.insertBefore(div, historyList.children[0]);
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

//History Tab Button
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

  document.getElementById("expense-form").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

//Assistant Tab Button
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
  document.getElementById("expense-form").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});
