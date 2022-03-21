import csv from 'k6/x/csv'
import {
  randomItemIn,
  randomIntBetween,
  randomCSV,
  randomDate
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

// Random Date
export const randomDateinRange = () => {
  const startDate = new Date(2022, 2, 21) //Javascript January = 0, 2 = March
  const endDate = new Date(2022, 2, 31)
  const randomDateIn = randomDate(startDate, endDate)
  console.log(`Random Date in Range ${randomDateIn}`)
}
