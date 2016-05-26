##Sozialhilfe Rechner
[![Build Status](https://api.travis-ci.com/nomaad/sozialhilfe-rechner.svg?token=fgEBVqi8zNcyppeyHVrN)](https://travis-ci.com/nomaad/sozialhilfe-rechner) [![codecov](https://codecov.io/gh/nomaad/sozialhilfe-rechner/branch/master/graph/badge.svg?token=XqBcQDwJHt)](https://codecov.io/gh/nomaad/sozialhilfe-rechner)

Ionic 2 Project based on https://github.com/lathonez/clicker/commit/5ac11b57de6e20d17cff860d845a13c328af86e9

## Install & Start

```bash
npm install -g ionic@beta   #install ionic2 beta
git clone https://github.com/nomaad/sozialhilfe-rechner.git
cd sozialhilfe-rechner
npm install       # or `npm run reinstall` if you get an error
npm start         # start the application (ionic serve)
```

## Run Unit Tests
```bash
npm test          # run unit tests
```

## Debug Unit tests
```bash
npm run karma    # start karma in debug mode: mutli run Chrome, hit `debug` to get going.
```

## Run E2E
```
# e2e (aka. end-to-end, integration) - In two different shell windows
# Make sure you don't have a global instance of Protractor

npm start
npm run e2e
```