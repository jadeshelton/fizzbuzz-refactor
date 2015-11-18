function fizzbuzz(userChoice) {
  console.log("test");
  for ( var i = 1; i <= parseInt(userChoice); i++ ) {
    if (i % 5 == 0 && i % 3 == 0) {
      document.write("FizzBuzz" + "<br>" + "<br>"); 
    } else if ( i % 3 == 0 ) {
      document.write("Fizz" + "<br>" + "<br>"); 
    } else if (i % 5 == 0) {
      document.write("Buzz" + "<br>" + "<br>"); 
    } else {
      document.write(i + "<br>" + "<br>"); 
    }
  }
}

var userChoice = prompt("Enter a number and hit enter");

fizzbuzz(userChoice);