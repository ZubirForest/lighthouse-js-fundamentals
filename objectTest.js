// Create an object
/*
var breakfast = {
  name: 'The Lumberjack',
  price: 9.95,
  ingredients: ['eggs', 'sausage', 'toast', 'hashbrowns', 'pancakes']
};
*/

// Use the following object
/*
var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary: function () {
    return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."; 
  }
};

console.log(savingsAccount.withdraw = 50);
*/

// Facebook Friends
/*
let facebookProfile = {

  name: 'Andrew McNeill',
  friends: 300,
  messages: ['Test message', 'Even more test'],
  postMessage: function (message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function(index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friends += 1;
  },
  removeFriend: function () {
    if(facebookProfile.friends > 0) {
      facebookProfile.friends -= 1; 
    }
  }

}

facebookProfile.deleteMessage(0);
console.log(facebookProfile.messages);
*/

// Donuts Revisited

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function (element) {
  console.log(element.type + ' donuts cost $' + element.cost + ' each');
});





















