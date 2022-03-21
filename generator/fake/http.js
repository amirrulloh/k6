import {
    uuidv4
  } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js'
import { getAllProducts } from '@apis/fake/http/apis.js'
import { assertStatus } from '@utils/index.js'

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
  assertStatus(res, 200, 'getAllProducts')
}