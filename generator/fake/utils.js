import csv from 'k6/x/csv'

export const appendCSV = () => {
  const append = csv.append('./data/fake-response.csv', ["test"])
  console.log(`Apeend CSV`)
}