# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

mercury = Planet.create(name: "Mercury", size: "1,516 mile radius", distance: "35.98 million miles", orbital_period: "88 days", day_length: "58 days", gravity: "38%", description:"Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes only 87.97 days, the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.", link: "https://en.wikipedia.org/wiki/Mercury_(planet)", has_moons: false)
venus = Planet.create(name: "Venus", size: "3,760 mile radius", distance: "67.24 million miles", orbital_period: "225 days", day_length: "116 days", gravity: "91%", description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and, rarely, is visible to the naked eye in broad daylight.", link: "https://en.wikipedia.org/wiki/Venus", has_moons: false)
earth = Planet.create(name: "Earth", size: "3,958 mile radius", distance: "92.96 million miles", orbital_period: "365 days", day_length: "1", gravity: "1", description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago.", link: "https://en.wikipedia.org/wiki/Earth", has_moons: true)
mars = Planet.create(name: "Mars", size: "2,106 mile radius", distance: "141.6 million miles", orbital_period: "687 days", day_length: "1", gravity: "38%", description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the 'Red Planet'.", link: "https://en.wikipedia.org/wiki/Mars", has_moons: true)
jupiter = Planet.create(name: "Jupiter", size: "43,441 mile radius", distance: "483.8 million miles", orbital_period: "12 years", day_length: "10 hours", gravity: "240%", description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.", link: "https://en.wikipedia.org/wiki/Jupiter", has_moons: true)
saturn = Planet.create(name: "Saturn", size: "36,184 mile radius", distance: "890.8 million miles", orbital_period: "29 years", day_length: "11 hours", gravity: "107%", description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has only one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.", link: "https://en.wikipedia.org/wiki/Saturn", has_moons: true)
uranus = Planet.create(name: "Uranus", size: "15,759 mile radius", distance: "1.784 billion miles", orbital_period: "84 years", day_length: "17 hours", gravity: "86%", description: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn.", link: "https://en.wikipedia.org/wiki/Uranus", has_moons: true)
neptune = Planet.create(name: "Neptune", size: "15,299 mile radius", distance: "2.793 billion miles", orbital_period: "165 years", day_length: "16 hours", gravity: "110%", description: "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.", link: "https://en.wikipedia.org/wiki/Neptune", has_moons: true)
pluto = Planet.create(name: "Pluto", size: "738 mile radius", distance: "3.6 billion miles", orbital_period: "248 years", day_length: "6 days", gravity: "8%", description: "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first Kuiper belt object to be discovered and is the largest known plutoid. Pluto was discovered by Clyde Tombaugh in 1930 as the ninth planet from the Sun.", link: "https://en.wikipedia.org/wiki/Pluto", has_moons: true)



jamie = User.create(name: "Jamie")

deimos = Moon.create(name: "Deimos", size: "3.85 mile radius", orbital_period: "30 hours", gravity: ".3%", description: "Deimos is the smaller and outermost of the two natural satellites of the planet Mars, the other being Phobos. Deimos has a mean radius of 6.2 km and takes 30.3 hours to orbit Mars. Deimos is 23,460 km from Mars, much further than Mars's other moon, Phobos.", link: "https://en.wikipedia.org/wiki/Deimos_(moon)", planet_id: 4)
# phobos = Moon.create(name: "Phobos", size:"", orbital_period:"", gravity:"", description:"", link: "", planet_id: 4)
# luna = Moon.create(name: "Luna", size:"", orbital_period:"", gravity:"", description:"", link: "", planet_id: 3)
# Moon.create(name: "", size:"", orbital_period:"", gravity:"", description:"", link: "", planet_id: 4)
# Moon.create(name: "", size:"", orbital_period:"", gravity:"", description:"", link: "", planet_id: 4)
# Moon.create(name: "", size:"", orbital_period:"", gravity:"", description:"", link: "", planet_id: 4)
# Moon.create(name: "", size:"", orbital_period:"", gravity:"", description:"", link: "", planet_id: 4)
# Moon.create(name: "", size:"", orbital_period:"", gravity:"", description:"", link: "", planet_id: 4)
# Moon.create(name: "", size:"", orbital_period:"", gravity:"", description:"", link: "", planet_id: 4)
# Moon.create(name: "", size:"", orbital_period:"", gravity:"", description:"", link: "", planet_id: 4)
# Moon.create(name: "", size:"", orbital_period:"", gravity:"", description:"", link: "", planet_id: 4)
# Moon.create(name: "", size:"", orbital_period:"", gravity:"", description:"", link: "", planet_id: 4)
# Moon.create(name: "", size:"", orbital_period:"", gravity:"", description:"", link: "", planet_id: 4)
# Moon.create(name: "", size:"", orbital_period:"", gravity:"", description:"", link: "", planet_id: 4)
# Moon.create(name: "", size:"", orbital_period:"", gravity:"", description:"", link: "", planet_id: 4)
# Moon.create(name: "", size:"", orbital_period:"", gravity:"", description:"", link: "", planet_id: 4)
