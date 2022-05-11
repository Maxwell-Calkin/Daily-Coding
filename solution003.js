// In this kata we mix some tasty fruit juice. We can add some components with certain amounts. Sometimes we pour out a bit of our juice. Then we want to find out, which concentrations our fruit juice has.

// Example:

// You take an empty jar for your juice
// Whenever the jar is empty, the concentrations are always 0
// Now you add 200 units of apple juice
// And then you add 200 units of banana juice
// Now the concentration of apple juice is 0.5 (50%)
// Then you pour out 200 units
// The concentration of apple juice is still 50%
// Then you add 200 units of apple juice again
// Now the concentration of apple juice is 0.75, while the concentration of banana juice is only 0.25 (300 units apple juice + 100 units banana juice)
// Complete the functions in order to provide this functionality. The test code for the example above can be found in the test fixture.

class Jar() {
    constructor(){
        this.totalAmount = 0
        this.types = {}
    }

    add(amount, type){
        if(this.types[type]){
            this.types[type] += amount
        }else{
        this.types[type] = amount
        this.totalAmount+=amount
        }
    }
    pourOut(amount){
        this.totalAmount-=amount
    }
    getTotalAmount(){
        return this.totalAmount
    }
    getConcentration(type){
        return this.
    }
    // TODO
  }
  
  Jar.prototype.add = function(amount, type) {
    // TODO
  };
  
  Jar.prototype.pourOut = function(amount) {
    // TODO
  };
  
  Jar.prototype.getTotalAmount = function() {
    // TODO
  };
  
  Jar.prototype.getConcentration = function(type) {
    // TODO
  }

let jar = new Jar
jar.add