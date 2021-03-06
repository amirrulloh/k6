import Papa from './papaparse'
import { SharedArray } from 'k6/data'

export const randomItemIn = (List) => {
  return List[Math.floor(Math.random() * List.length)]
}

export const randomIntBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function parseCSV (label, filePath) {
  const data = new SharedArray(label, () => {
    let csv
    Papa.parse(open(filePath), { complete: results => { csv = results } })
    return csv.data
  })

  return data
}

export function randomCSV (label, filePath) {
  const data = parseCSV(label, filePath)
  console.log(JSON.stringify(data))
  return data[Math.floor(Math.random() * data.length)]
}

export const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0, 10)
}

