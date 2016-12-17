$(function (){
	$('#submit_food_btn').click(function (event){
		$('#recipes').empty();
		
		event.preventDefault();
		
		var calories = $('#calories').val();
		var search_term = $('#search_input').val();
		
		getRecipes(search_term, calories)
	});
});

function printRecipes(recipes){
// 	var element = $('<p>',{
// 		text: response.main.ingredients
// 	});
// 	var cities = $('<p>',{
// 		text: response.recipeNam
// 	});
// 	$('.recipes').append(cities);
//   $('.recipes').append(element);

  for(i = 0; i < recipes.length; i++){
   // get the name of the recipe
    $('#recipes').append("<h2>" + recipes[i].recipeName + "</h2>")
    
    $('#recipes').append("<img src=\"" + recipes[i].imageUrlsBySize["90"] + "\">")
   // get the total time to cook
    $('#recipes').append("<h3>" + ((recipes[i].totalTimeInSeconds / 60) - (recipes[i].totalTimeInSeconds % 60)) + " minutes cooking time" + "</h3>")
//   $('#recipes').append(recipes[i].recipeName)
    

   
   
   // print all ingredients for a recipe
   $('#recipes').append("<b> Ingredients: </b> <br>")
   for (j = 0; j < recipes[i].ingredients.length; j++){
    $('#recipes').append("- " + recipes[i].ingredients[j] + "<br>")
  
    } 
  }
}

function getRecipes(search_term, calories) {
    if (calories != parseInt(calories, 10)){
        alert("you have to enter a number");
        document.getElementById("calories").value="";
        return 
    }
    
  var url = 'https://api.yummly.com/v1/api/recipes?_app_id=4e9f2aa0%26&_app_key=e54e9cfa05d58b64bab7da2301f05c0b&q='
  + search_term +'&nutrition.ENERC_KCAL.max=' + calories
  
  $.get( url, function( data ) {
    var recipes = data.matches
    printRecipes(recipes)
  });
}