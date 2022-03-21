export { appendCSV } from "@generator/fake/utils.js";

function distribute(value) {
  return value / __ENV.SERVER_COUNT
}

const config = {
  scenario: __ENV.SCENARIO,
  groupServices: {
    appendCSV: { targetRate: distribute(100 * __ENV.X_TARGET) },
  }
}

export const options = {
  scenarios: {}
}

const services = Object.keys(config.groupServices)
for (let i = 0; i < services.length; i++) {
  const name = services[i]
  if (config.scenario === 'verify') {
    options.scenarios[name] = {
      exec: name,
      tags: { mode: 'verify' },
      executor: 'shared-iterations',
      vus: 1,
      iterations: 1
    }
  } else if (config.scenario == "load") {
    options.scenarios[name] = {
      exec: name,
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1m',
      preAllocatedVUs: 1,
      maxVUs: __ENV.TOTAL_VUS,
      stages: [
        { duration: '4m', target: Math.round(config.groupServices[name].targetRate * 0.4) }, 
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.4) }, 
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.5) }, 
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.5) }, 
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.6) }, 
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.6) }, 
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.7) }, 
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.7) }, 
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.8) }, 
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.8) }, 
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate * 0.9) }, 
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate * 0.9) }, 
        { duration: '2m', target: Math.round(config.groupServices[name].targetRate) }, 
        { duration: '1m', target: Math.round(config.groupServices[name].targetRate) }, 
        { duration: '5m', target: 0 }
      ]
    }
  }
}