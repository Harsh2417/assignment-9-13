function myFunction() {
    let num = prompt("Enter number");
    if (num>10) {
      document.getElementById("demo").innerHTML =
      "Number is greater";
    }
    else{
        document.getElementById("demo").innerHTML =
        "Number is less than given number";   
    }
  }
  