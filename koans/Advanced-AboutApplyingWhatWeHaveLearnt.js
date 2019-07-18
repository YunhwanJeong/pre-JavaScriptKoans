var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
      /* solve using filter() & all() / any() */

      let nutFilter = (product) => product.containsNuts === false;
      let mushroomFilter = (product) => product.ingredients.every(hasMushrooms);
      let hasMushrooms = (ing) => ing !== "mushrooms";

      let noNutsProducts = products.filter(nutFilter);
      let productsICanEat = noNutsProducts.filter(mushroomFilter);

      // for(let product of noNutsProducts) {
      //   if(product.ingredients.every(function(ing) {return ing !== "mushrooms";})) {
      //     productsICanEat.push(product);
      //   }
      // }

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    let range = function (start, end) {
      let nums = [];
      if (start === end) {
        nums.push(start);
      }

      for (let i = start; i < end; i++) {
        nums.push(i);
      }
      return nums;
    }
    
    var sum = range(1, 1000).reduce (function (sumOfMultiples, numbers) {
      if (numbers % 3 === 0 || numbers % 5 === 0) {
        return sumOfMultiples + numbers;
      } else {
        return sumOfMultiples;
      }
    }, 0)    /* try chaining range() and reduce() */

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
  it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };
    
  //   /* chain() together map(), flatten() and reduce() */
  let ingredientFilter = (product) => product['ingredients'];
  let ingredientCounter = function (total, ingredient) {
    total[ingredient] = (total[ingredient] || 0) + 1;
    return total;
  };
  products.map(ingredientFilter).flat().reduce(ingredientCounter, ingredientCount);



  expect(ingredientCount['mushrooms']).toBe(2);
  //   var ingredientCount = { "{ingredient name}": 0 };

  //   /* chain() together map(), flatten() and reduce() */
  //   let ingredientFilter = (product) => product['ingredients'];
  //   let onlyIngredients = products.map(ingredientFilter).flat();


  //   for (let i = 0; i < onlyIngredients.length; i++) {
  //     ingredientCount[onlyIngredients[i]] = onlyIngredients.reduce(function (total, ingredient) {
  //       if (ingredient === onlyIngredients[i]) {
  //         return total + 1;
  //       } else {
  //         return total;
  //       }
  //   }, 0);
  // }
  //   expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });
  */
});
