//using arguments
function sum(){
  let arg = Array.prototype.slice.call(arguments);
  let total = 0;
  arg.forEach((el)=>{total+=el;});
  return total;
}

console.log(sum(1,2,3,4,5));

function sum_good(...args){
  let total = 0;
  args.forEach((el)=>{total+=el;});
  return total;
}

console.log(sum_good(1,2,3,4,5));
