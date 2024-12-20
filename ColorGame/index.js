// randomColor array
const randomColor = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];
// generating random numbers

//selecting the buttons to click
let first_button = document.getElementById("btnA");
let second_button = document.getElementById("btnB");
let resetButton = document.getElementById("reset");

// a function which will generate random colors and add them to the divs and change their innerHTML text (FirstDiv)

let button_One = () => {
  const randomNum = Math.floor(Math.random() * 5);

  // A swith statement for the logic and generation of the random colors
  switch (randomNum) {
    case 0:
      document.getElementById("firstDiv").style.backgroundColor =
        randomColor[0];
      document.getElementById("firstDiv").innerHTML = "Bright Orange";
      break;
    case 1:
      document.getElementById("firstDiv").style.backgroundColor =
        randomColor[1];
      document.getElementById("firstDiv").innerHTML = "Light Peach";
      break;
    case 2:
      document.getElementById("firstDiv").style.backgroundColor =
        randomColor[2];
      document.getElementById("firstDiv").innerHTML = "Neon Pink";
      break;
    case 3:
      document.getElementById("firstDiv").style.backgroundColor =
        randomColor[3];
      document.getElementById("firstDiv").innerHTML = "Light Yellow";
      break;
    case 4:
      document.getElementById("firstDiv").style.backgroundColor =
        randomColor[4];
      document.getElementById("firstDiv").innerHTML = "Cyan Blue";
  }

  setTimeout(function () {
    document.getElementById("firstDiv").style.backgroundColor = "lightblue";
    document.getElementById("firstDiv").innerHTML = "Start";
  }, 3000);
};

let button_Two = () => {
  const randomNum = Math.floor(Math.random() * 5);

  switch (randomNum) {
    case 0:
      document.getElementById("secondDiv").style.backgroundColor =
        randomColor[0];
      document.getElementById("secondDiv").innerHTML = "Bright Orange";
      break;
    case 1:
      document.getElementById("secondDiv").style.backgroundColor =
        randomColor[1];
      document.getElementById("secondDiv").innerHTML = "Light Peach";
      break;
    case 2:
      document.getElementById("secondDiv").style.backgroundColor =
        randomColor[2];
      document.getElementById("secondDiv").innerHTML = "Neon Pink";
      break;
    case 3:
      document.getElementById("secondDiv").style.backgroundColor =
        randomColor[3];
      document.getElementById("secondDiv").innerHTML = "Light Yellow";
      break;
    case 4:
      document.getElementById("secondDiv").style.backgroundColor =
        randomColor[4];
      document.getElementById("secondDiv").innerHTML = "Cyan Blue";
  }

  setTimeout(function () {
    document.getElementById("secondDiv").style.backgroundColor = "lightblue";
    document.getElementById("secondDiv").innerHTML = "Start";
  }, 3000);
};

// adding the event listeners to the buttons
first_button.addEventListener("click", button_One);
second_button.addEventListener("click", button_Two);
resetButton.addEventListener("click", function () {
  document.getElementById("firstDiv").style.backgroundColor = "lightblue";
  document.getElementById("firstDiv").innerHTML = "Start";
  document.getElementById("secondDiv").style.backgroundColor = "lightblue";
  document.getElementById("secondDiv").innerHTML = "Start";
});
