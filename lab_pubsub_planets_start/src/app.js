const planetsData = require('./data/planets.js');
const MenuView = require('./views/menu_view.js');
const PlanetInfoView = require('./views/planet_info_view.js');

document.addEventListener('DOMContentLoaded', function() => {
  console.log('DOMContentLoaded');
  const selectElement = document.querySelectorAll('li');

});

//
//
document.addEventListener('DOMContentLoaded', function(){
  const selectElement = document.querySelector('select#animals-dropdown');
  const animalDropdown = new SelectView(selectElement);
  animalDropdown.bindEvents();

  const infoDiv = document.querySelector('div#animal-info')
  const animalInfoDisplay = new AnimalInfoView(infoDiv);
  animalInfoDisplay.bindEvents();

  const animalsDataSource = new Animals();
  animalsDataSource.bindEvents();
});
