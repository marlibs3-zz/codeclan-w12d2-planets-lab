const PubSub = require('../helpers/pub_sub.js');

const MenuView = function(element){
  this.element = element;
};

MenuView.prototype.bindEvents = function(){

  PubSub.subscribe('Planets:all-planets-ready', (evt) => {
    const allPlanets = evt.detail;
    this.populate(allPlanets);
  });

  this.element.querySelectorAll('li', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('MenuView:change', selectedIndex);
  });
};

SelectView.prototype.populate = function(planetsData){
  planetssData.forEach((planet, index) => {
    const option = document.createElement('option');
    option.textContent = planet.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = MenuView;
