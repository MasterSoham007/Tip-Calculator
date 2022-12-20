const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const noOfPeople = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");

let people = Number(noOfPeople.innerText);

const calculateBill = () => {
  const bill = Number(billInput.value);

  const tipPercentage = Number(tipInput.value) / 100;

  const tipAmount = bill * tipPercentage;

  const total = bill + tipAmount;

  const perPerson = total / people;

  perPersonTotal.innerText = `$${perPerson.toFixed(2)}`;
};

const increasePeople = () => {
  people += 1;

  noOfPeople.innerText = `${people}`;

  calculateBill();
};

const decreasePeople = () => {
  if (people <= 1) {
    return;
  }

  people -= 1;

  noOfPeople.innerText = `${people}`;

  calculateBill();
};
