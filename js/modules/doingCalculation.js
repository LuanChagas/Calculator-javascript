export default class DoCalculation {
  constructor() {
    this.display = document.querySelector(".display-numbers-content h3");

    this.oper = ["/", "*", "-", "+"];
    this.numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    this.clean = "C";
    this.perc = "%";

    this.equalsCalc = "=";
    this.ce = "CE";

    this.show = [];
    this.cal = [];
  }

  showScreen() {
    if (!this.show.length) {
      this.display.innerHTML = 0;
    } else {
      this.display.innerHTML = this.show.join("");
    }
  }

  clearScreen() {
    this.display.innerHTML = 0;
    this.show = [];
    this.cal = [];
  }

  equalsOper() {
    let hasOper = false;

    this.cal.forEach((x) => {
      if (this.oper.includes(x)) {
        hasOper = true;
      }
    });
    return hasOper;
  }

  lastIsOper() {
    let isOper = false;

    this.oper.forEach((op) => {
      if (this.cal[this.cal.length - 1] === op) {
        isOper = true;
      }
    });
    console.log(isOper);
    return isOper;
  }

  firstIsOper() {
    let isOper = false;

    if (this.cal[0] === "-") {
      isOper = true;
    }
    return isOper;
  }

  operator(value) {
    if (this.lastIsOper()) {
      if (this.firstIsOper() && value === "+") {
        this.show.pop();
      } else if (this.show.length > 1) {
        this.show[this.show.length - 1] = value;
        this.showScreen();
      }
    } else if (this.equalsOper()) {
      this.result();
      this.show.push(value);
      this.cal.push(value);
    } else if (this.cal[0]) {
      this.cal.push(value);
      this.show.push(value);
      this.showScreen();
    } else if (!this.cal[0] && value === "-") {
      this.show.push(value);
      this.cal.push(value);
    }
    console.log("show " + this.show);
    console.log("cal " + this.cal);
  }

  numbersChoice(value) {
    let ver = this.show.join("");
    if (value) {
      if (ver.length <= 36) {
        if (value === "." && this.display.innerHTML.includes(".")) {
          this.showScreen();
        } else {
          this.show.push(value);
          this.cal.push(value);
          this.showScreen();
        }
      }
      console.log(this.display.innerHTML);
    }
  }

  doPercent() {
    if (!this.lastIsOper()) {
      if (this.display.innerHTML == 0) {
        this.display.innerHTML = 0;
      } else {
        let res = eval(this.show.join(""));
        this.result();
        res = this.display.innerHTML = res / 100;
        this.show = [res];
      }
    }
  }

  cleanRegis() {
    this.cal.pop();
    this.show.pop();
    this.showScreen();
  }

  result() {
    try {
      let resul = eval(this.show.join(""));
      console.log(resul);
      if (resul != undefined) {
        this.cal = [];
        this.cal.push(resul);
        this.display.innerHTML = resul;
        this.show = [resul];
      }
    } catch (e) {
      console.log(e);
    }
  }

  choice(value) {
    if (this.numbers.includes(value)) {
      this.numbersChoice(value);
    } else if (this.clean === value) {
      this.clearScreen();
    } else if (this.oper.includes(value)) {
      this.operator(value);
    } else if (value === this.equalsCalc) {
      this.result();
    } else if (value === this.ce) {
      this.cleanRegis();
    } else if (value === this.perc) {
      this.doPercent(value);
    }
  }
}
