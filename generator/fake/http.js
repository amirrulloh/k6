import {
    uuidv4
  } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js'
import { getAllProducts } from '@apis/fake/http/apis.js'
import { assertStatus } from '@utils/index.js'
import csv from 'k6/x/csv'

export const fetchAll = () => {
  const params = {
    headers: {
        requestId: `${uuidv4()}`,
    },
    tags: {
      name: ''
    }
  }
  const res = getAllProducts(params)
  csv.append('./data/fake-response.csv', res.json())
  assertStatus(res, 200, 'getAllProducts')
}