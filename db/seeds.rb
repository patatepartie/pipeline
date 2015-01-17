# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Person.create([
  {
    first_name: 'Henrik',
    last_name: 'Joreteg',
    coolness_factor: 11
  },
  {
    first_name: 'Bob',
    last_name: 'Saget',
    coolness_factor: 2
  },
  {
    first_name: 'Larry',
    last_name: 'King',
    coolness_factor: 4
  },
  {
    first_name: 'Diana',
    last_name: 'Ross',
    coolness_factor: 6
  },
  {
    first_name: 'Crazy',
    last_name: 'Dave',
    coolness_factor: 8
  },
  {
    first_name: 'Larry',
    last_name: 'Johannson',
    coolness_factor: 4
  }
])
