import csv from 'k6/x/csv'
import {
  randomItemIn,
} 
from '@utils/index.js'

// Append Response to CSV
export const appendCSV = () => {
  const append = csv.append('./data/fake-response.csv', ["test"])
  console.log(`Append CSV Success`)
}

// Random item in List
export const randomItemInList = () => {
  const randomItem = randomItemIn(["One", "Two"])
  console.log(`Random Item in List ${randomItem}`)
}

