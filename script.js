const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
  // question 2
  function isAdult(age) {
    if (age >= 18) {
      return 'Adult';
    } else {
      return 'Minor';
    }
  }
  
  console.log('Exercise 2 Result:', isAdult(21));
  
  // question 3
  function isCharAVowel(char) {
    const lowerCaseChar = char.toLowerCase();
  
    if (lowerCaseChar === 'a' || lowerCaseChar === 'e' || lowerCaseChar === 'i' || lowerCaseChar === 'o' || lowerCaseChar === 'u') {
      return true;
    } else {
      return false;
    }
  }
  
  console.log('Exercise 3 Result:', isCharAVowel('a'));
  
  // question 4
  function generateEmail(name, domain) {
    return name + '@' + domain;
  }
  
  console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
  
  // question 5
  function greetUser(name, timeOfDay) {
    const capitalizedTime = timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1);
    
    return "Good " + capitalizedTime + ", " + name + "!";
  }
  
  console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
  
  // exercise 6
  function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  
  console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
  
  // exercise 7
  function calculateTip(billAmount, tipPercentage) {
    return (billAmount * tipPercentage) / 100;
  }
  
  console.log('Exercise 7 Result:', calculateTip(50, 20));
  
  // question 8
  function convertTemperature(temperature, scale) {
    if (scale === 'C') {
      return (temperature * 9 / 5) + 32;
    } else if (scale === 'F') {
      return (temperature - 32) * 5 / 9;
    } else {
      return "Invalid scale. Please use 'C' for Celsius or 'F' for Fahrenheit.";
    }
  }
  
  console.log('Exercise 8 Result:', convertTemperature(32, "C"));
  
  // question 9
  function basicCalculator(num1, num2, operation) {
    switch (operation) {
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "Error: Division by zero";
        }
      default:
        return "Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'.";
    }
  }
  
  console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
  
  // question 10
  function calculateGrade(score) {
    if (score >= 90) {
      return 'A';
    } else if (score >= 80) {
      return 'B';
    } else if (score >= 70) {
      return 'C';
    } else if (score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
  console.log('Exercise 10 Result:', calculateGrade(85));
  
  // question 11
  function createUsername(firstName, lastName) {
    const firstPart = firstName.slice(0, 3);
    const secondPart = lastName.slice(0, 3);
    const totalCount = firstName.length + lastName.length;
    
    return firstPart + secondPart + totalCount;
  }
  
  console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));
  
  // question 12
  function numArgs() {
    return arguments.length;
  }
  
  console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));
  