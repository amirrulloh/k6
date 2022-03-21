/* eslint-disable no-template-curly-in-string */
import http from 'k6/http'

export const getAllProducts = (params) => {
  params.headers['Content-Type'] = 'application/json'
  params.tags.name = 'All Products'

  return http.get(
    `${__ENV.LB_HOST}/products`, //https://fakestoreapi.com/products
    params
  )
}
