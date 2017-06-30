// function curriedSum(numArgs) {
//   function sumNums(...args) {
//     let total = 0;
//     args.forEach ((num) => {
//       total += num;
//     });
//     return total;
//   }
//   return sumNums.curry(numArgs);
// }
function curriedSum(numArgs) {
  let numbers = [];

  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let total = 0;
      numbers.forEach ((el) => {
        total += el;
      });
      return total;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));

Function.prototype.curry = function(numArgs) {
  let numbers = [];
  let _this = this;
  function _curriedSum() {
    let args = Array.from(arguments);
    numbers = numbers.concat(args);
    if (numbers.length === numArgs) {
      return _this.apply(null, numbers);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
};

Function.prototype.curry = function(numArgs) {
  let numbers = [];

  let _curriedSum = (...args) => {
    numbers = numbers.concat(args);
    if (numbers.length === numArgs) {
      return this(...numbers);
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30
console.log(f1);

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6));
