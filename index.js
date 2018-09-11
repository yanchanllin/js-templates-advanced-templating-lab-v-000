function init() {
  //put any page initialization/handlebars initialization here
handlebars.registerHelper('displayIngredient', function(ingredient){
  return new Handlebars.SafeString('<li name="ingredientList">' + ingredient + '</li>');
});

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
