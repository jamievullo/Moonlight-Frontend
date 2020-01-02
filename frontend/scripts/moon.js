const moonUrl = `${targetUrl}/moons`;

let chosenMoon; 

class Moon {
    constructor(name, size, orbital_period, gravity, description, link) {
    this.name = name
    this.size = size    
    this.orbital_period = orbital_period    
    this.gravity = gravity
    this.description = description
    this.link = link 
    }
}