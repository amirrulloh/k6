#!/usr/bin/env bash
mv errors.log errors.log.$(date "+%Y.%m.%d-%H.%M.%S")

service=$(printf 'dist/%s.bundle.js' ${SERVICE//\-/\_})
scenario=${SCENARIO}
if [ -z "$SCENARIO" ] 
then
  scenario=ramping
fi

SCENARIO=$scenario ./k6_mac run $service --no-thresholds --logformat=raw --console-output=./errors.log 
