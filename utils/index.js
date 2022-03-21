import { check } from 'k6'

export const assertStatus = (res, status, name) => {
  check(res, {
    [`${name} status is ${status}`]: (r) => {
      // Will be printed only if verbose = true
      if (r.status != status && verbose) {
        console.log(JSON.stringify(res))
      }
      return r.status === status
    }
  })
}