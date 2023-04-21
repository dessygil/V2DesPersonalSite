#!/bin/bash

cd my-app
npm install
npm test
npx cypress run
npm run dev
