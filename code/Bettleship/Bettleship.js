var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },

  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  },
};

var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
  ships: [
    { locations: ["0", "0", "0"], hits: ["", "", ""] },
    { locations: ["0", "0", "0"], hits: ["", "", ""] },
    { locations: ["0", "0", "0"], hits: ["", "", ""] },
  ],

  fire: function (guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);

      if (index >= 0) {
        ship.hits[index] = "hit";

        view.displayHit(guess);
        view.displayMessage("Hit!");

        if (this.isSunk(ship)) {
          view.displayMessage("You sank my battleship!");

          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("You missed");
    return false;
  },

  isSunk: function (ship) {
    for (var i = 0; i < this.numShips; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  },

  generateShipLocations: function () {
    //主方法创建model中的ships数组；
    var locations;
    //循环次数与生成的战舰数目相同
    for (var i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip(); //生成战舰占据的一系列位置
      } while (this.collision(locations)); //检查位置是否重叠，如果重叠再次尝试，直到不重叠为止
      this.ships[i].locations = locations; //将generateShip生成的newShipLocations[]赋给model.ships[]
    }
  },
  generateShip: function () {
    //创建一艘战舰并指定位置
    var direction = Math.floor(Math.random() * 2); //Math.random()生成0~1内的随机数，x2得到0~2内 Math.floor向下取整 取整得0或1；
    var row, col;

    if (direction === 1) {
      //生成水平战舰起始位置
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength)); //列时起始位置必须小于列数减去战舰长度
    } else {
      //生成垂直战舰起始位置
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength)); //行时起始位置必须小于行数减去战舰长度
      col = Math.floor(Math.random() * this.boardSize);
    }

    var newShipLocations = [];
    for (var i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        //在水平战舰的位置数组中添加位置；
        newShipLocations.push(row + "" + (col + i));
      } else {
        //在垂直战舰的位置数组中添加位置；
        newShipLocations.push(row + i + "" + col);
      }
    }
    return newShipLocations;
  },

  collision: function (locations) {
    //检查战舰是否与已有战舰重叠
    for (var i = 0; i < this.numShips; i++) {
      //迭代游戏板中既有的每艘战舰；
      var ship = model.ships[i];
      for (var j = 0; j < locations.length; j++) {
        //检查新战舰的location数组中的位置是否包含在既有战舰的location数组中
        if (ship.locations.indexOf(locations[j]) >= 0) {
          //为检查位置是否被既有战舰占据，如果indexOf返回索引大于或等于0则已被占据，就返回true（说明已被占据）
          return true;
        }
      }
    }
    return false;
  },
};

var controller = {
  guesses: 0,
  processGuess: function (guess) {
    var location = parseguess(guess);

    if (location) {
      this.guesses++;
      var hit = model.fire(location);

      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage(
          "You sank all my battelships,in " + this.guesses + " guesses"
        );
      }
    }
  },
};

//辅助代码，可重用

function parseguess(guess) {
  var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

  if (guess === null || guess.length !== 2) {
    alert("Oops,please enter a letter and a number on the board.");
  } else {
    firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var colum = guess.charAt(1);

    if (isNaN(row) || isNaN(colum)) {
      alert("Oops,that isn't on the board.");
    } else if (
      row < 0 ||
      row >= model.boardSize ||
      colum < 0 ||
      colum >= model.boardSize
    ) {
      alert("Oops,that off the board!");
    } else {
      return row + colum;
    }
  }
  return null;
}

function handelFireButton() {
  var guessInput = document.getElementById("guessInput");
  var guess = guessInput.value;
  controller.processGuess(guess);

  guessInput.value = "";
}
function handelClick() {
  var location = this.id;
  if (location) {
    controller.guesses++;
    var hit = model.fire(location);

    if (hit && model.shipsSunk === model.numShips) {
      view.displayMessage(
        "You sank all my battelships,in " + controller.guesses + " guesses"
      );
    }
  }
}

function handelKeyPress(e) {
  var fireButton = document.getElementById("fireButton");
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

function init() {
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      currLoc = i.toString() + j.toString();
      document.getElementById(currLoc).onclick = handelClick;
    }
  }

  var fireButton = document.getElementById("fireButton");
  fireButton.onclick = handelFireButton; //鼠标点击Fire

  var guessInput = document.getElementById("guessInput");
  guessInput.onkeypress = handelKeyPress; //键盘 Enter

  model.generateShipLocations();
}

window.onload = init; //网页加载完毕后再执行函数init；
