import fetch from 'axios'

export const getResults = async () => {
  const url =
    'https://api.airtable.com/v0/appA4fTKg81EM2xey/Decks?api_key=keyBj1QK7piMXmdoF'

  const res = fetch(url)

  console.log('res', res)
  return res
}
