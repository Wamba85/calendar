#!/usr/bin/env sh
set -x
npm install -g eslint
set +x

set -x
npm install --save-dev cross-env
set +x

set -x
npm run build