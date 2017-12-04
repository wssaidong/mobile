#!/bin/bash

echo 'start'

npm run build

rm -rf /d/github_code/2449149803/*.js
rm -rf /d/github_code/2449149803/*.css
rm -rf /d/github_code/2449149803/*.html

cp ./dist/* D:\\github_code\\2449149803
cd D:\\github_code\\2449149803

git add .
git commit -am 'commit'
git push origin master

echo 'end'
