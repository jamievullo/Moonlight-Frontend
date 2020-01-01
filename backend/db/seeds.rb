# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

mercury = Planet.create(name: "Mercury", size: "4880 km", distance: "35.98 million miles", orbital_period: "88 days", day_length: "58 days", gravity: "0.38g", link: "https://en.wikipedia.org/wiki/Mercury_(planet)")

jamie = User.create(name: "Jamie")