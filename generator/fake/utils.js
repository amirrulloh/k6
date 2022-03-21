import csv from 'k6/x/csv'
import {
  randomItemIn,
  randomIntBetween,
  randomCSV
} 
from '@utils/index.js'

// Append Response to CSV
export const appendCSV = () => {
  csv.append('./data/fake-response.csv', ["test"])
  console.log(`Append CSV Success`)
}

// Random item in List
export const randomItemInList = () => {
  const randomItem = randomItemIn(["One", "Two"])
  console.log(`Random Item in List ${randomItem}`)
}

// Random integer in range
export const randomIntegerBetween = () => {
  const randomInteger = randomIntBetween(1, 10)
  console.log(`Random Int Between in Range ${randomInteger}`)
}

// Random read csv
const csvData = randomCSV('Read CSV', './data/fake-data.csv')
export const randomReadCSV = () => {
  console.log(`Random Read CSV ${csvData}`)
}

