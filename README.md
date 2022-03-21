# TIX-PERF-K6

Fake K6 script repository

## Directory Structures

```
.
├── Jenkinsfile
├── README.md
├── apis
├── data                    <-- see attention below
├── dist
├── examples
├── local-verify.sh
├── package-lock.json
├── package.json
├── run.sh
├── scenarios
├── scenarios-map.yaml
├── setup_k6_deps.sh
├── utils
└── webpack.config.js
``` 

- `Jenkinsfile` is a file related to jenkins pipeline
- `apis` is a directory where you can put your api request
- `data` is a directory where you can put your data related to your api request
- `dist` is a directory where the webpack put the bundled script
- `examples` is a directory where you can find example how to write your script
- `local-verify.sh` is a bash file to verify your script in your local environment
- `package-lock.json` and `package.json` is a file related to node package manager
- `run.sh` is a bash file that will be called by Jenkins pipeline
- `scenarios` is a directory where you can put your scenario script
- `scenario-map.yaml` is a file where you map your service with their path
- `utils` is a directory where you can put your shared utility script  
- `webpack.config.js` is a file related to webpack configuration


__Attention related to data__
- Data folder must be in your root, if there is no folder data in your root you 
  have to create it manually
- Please check your csv files in your data folder, ensure it doesn't have any 
  end of line space.

## Usage
- Update Dependency
```
npm install
```
- Bundle your script
```
npm run bundle
```
- Verify you script
```
LB_HOST=https://fakestoreapi.com SERVER_COUNT=1 SCENARIO=verify \
SERVICE=fakeStoreApi X_TARGET=1 TOTAL_VUS=500000 ./run.sh
```

- Run your script
```
LB_HOST=https://fakestoreapi.com SERVER_COUNT=1 SCENARIO=load \
SERVICE=fakeStoreApi X_TARGET=1 TOTAL_VUS=500000 ./run.sh
```

## Contribute
- Clone project
- Add your apis and scenarios
- Please follow this path convention `apis/<vertical>/<protocol>/<service>.js`
- Use eslint as code linter
- Pull request to main










