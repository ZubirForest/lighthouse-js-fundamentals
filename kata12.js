const chooseRecipe = (bakeryA, bakeryB, recipes) => {

  AMatches = [];
  BMatches = [];
  finalMatch = '';
  
  bakeryA.forEach(inStock => {

    recipes.forEach(recipe => {
      
      const candidate = recipe.name;
      const ingredients = recipe.ingredients;

      ingredients.forEach(item => {

        if (inStock === item) {
          
          AMatches.push(candidate);

        }
  
      })
    })

  })

  bakeryB.forEach(inStock => {

    recipes.forEach(recipe => {
      
      const candidate = recipe.name;
      const ingredients = recipe.ingredients;
  
      ingredients.forEach(item => {

        if (inStock === item) {

          BMatches.push(candidate);
          
        }
  
      })
    })

  })

  AMatches.forEach(matchA => {

    BMatches.forEach(matchB => {

      if (matchA === matchB) {

        finalMatch = matchA;

      }

    })

  })

  return finalMatch;

};