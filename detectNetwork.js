// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var cardNumberArr = cardNumber.split('');
  var firstNumStr = cardNumberArr[0].toString();
  var firstTwoNum = cardNumberArr.slice(0, 2);
  var firstTwoNumStr = firstTwoNum.join('');
  var firstThreeNum = cardNumberArr.slice(0, 3);
  var firstThreeNumStr = firstThreeNum.join('');
  var firstFourNum = cardNumberArr.slice(0, 4);
  var firstFourNumStr = firstFourNum.join('');
  var firstSixNum = cardNumberArr.slice(0, 6);
  var firstSixNumStr = firstSixNum.join('');

  if (firstTwoNumStr === '38' || firstTwoNumStr === '39') {
    if (cardNumber.length === 14) {
      return 'Diner\'s Club';
    }
  } else if (firstTwoNumStr === '34' || firstTwoNumStr === '37') {
    if (cardNumber.length === 15) {
      return 'American Express';
    }
  } else if (firstTwoNumStr === '51' || firstTwoNumStr === '52' || firstTwoNumStr === '53' || firstTwoNumStr === '54' || firstTwoNumStr === '55') {
    if (cardNumber.length === 16) {
      return 'MasterCard';
    }
  } else if (firstFourNumStr === '5018' || firstFourNumStr === '5020' || firstFourNumStr === '5038' || firstFourNumStr === '6304') {
    if (cardNumber.length >= 12 && cardNumber.length <= 19) {
      return 'Maestro';
    }
  } else if (firstFourNumStr === '6011' || firstTwoNumStr === '65' || firstThreeNumStr === '644' || firstThreeNumStr === '645' || firstThreeNumStr === '646' || firstThreeNumStr === '647' || firstThreeNumStr === '648' || firstThreeNumStr === '649') {
    if (cardNumber.length === 16 || cardNumber.length === 19) {
      return 'Discover';
    }
  } else if (Math.abs(firstSixNumStr) >= 622126 && Math.abs(firstSixNumStr) <= 622925) {
    if (cardNumber.length >= 16 && cardNumber.length <= 19) {
      return 'China UnionPay';
    }
  } else if (Math.abs(firstFourNumStr) >= 6282 && Math.abs(firstFourNumStr) <= 6288) {
    if (cardNumber.length >= 16 && cardNumber.length <= 19) {
      return 'China UnionPay';
    }
  } else if (Math.abs(firstThreeNumStr) >= 624 && Math.abs(firstThreeNumStr) <= 626) {
    if (cardNumber.length >= 16 && cardNumber.length <= 19) {
      return 'China UnionPay';
    }
  } else if (firstFourNumStr === '4903' || firstFourNumStr === '4905' || firstFourNumStr === '4911' || firstFourNumStr === '4936' || firstFourNumStr === '6333' || firstFourNumStr === '6759' || firstSixNumStr === '564182' || firstSixNumStr === '633110') {
    if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {
      return 'Switch';
    }
  } else if (firstNumStr === '4') {
    if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
      return 'Visa';
    }
  }
};
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
