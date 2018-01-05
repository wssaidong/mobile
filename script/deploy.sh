#!/bin/bash

echo 'start'

npm run build

rm -rf /Users/cai/gitcode/2449149803/*.js
rm -rf /Users/cai/gitcode/2449149803/*.css
rm -rf /Users/cai/gitcode/2449149803/*.html

cp ./dist/* /Users/cai/gitcode/2449149803
cd /Users/cai/gitcode/2449149803

git add .
git commit -am 'commit'
git push origin master

echo 'end'
