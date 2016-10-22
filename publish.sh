#!/usr/bin/env bash

rm index.zip
cd src
zip -X -r ../index.zip *
cd ..
aws lambda update-function-code --function-name helloAlexa  --zip-file fileb://index.zip
