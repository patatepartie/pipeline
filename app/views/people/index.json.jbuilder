json.array! @people do |person|
  json.id               person.id
  json.firstName       person.first_name
  json.lastName        person.last_name
  json.coolnessFactor  person.coolness_factor
end
