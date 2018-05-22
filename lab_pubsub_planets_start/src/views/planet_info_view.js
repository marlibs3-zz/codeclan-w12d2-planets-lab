const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function(container){
  this.container = container;
};

PlanetInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Planets:selected-planet-ready', (evt) => {
    const planet = evt.detail;
    this.render(planet);
  })
};

PlanetInfoView.prototype.render = function(planet){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${planet.name}, has an orbit of '${planet.orbit}' and the day is ${planet.day} earth days. It has a surface area of ${planet.surfaceArea}, and a volume of ${planet.volume}. The gravity is ${planet.gravity} of earths gravity. It has ${planet.moons}.`;
  const planetImage = document.createElement('img');
  planetImage.textContent = `src="${planet.image}"`;
  this.container.innerHTML = '';
  this.container.appendChild(planetImage);
  this.container.appendChild(infoParagraph);
};

module.exports = PlanetInfoView;
