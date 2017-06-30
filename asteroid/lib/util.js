const Util = {
  inherits(childClass,parentClass){
    let Surrogate = function(){};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  },

  // Scale the length of a vector by the given amount.
  scale(vec, m){
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Util;
