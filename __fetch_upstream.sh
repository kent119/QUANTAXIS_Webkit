#!/bin/sh

git remote add upstream https://github.com/yutiansut/QUANTAXIS_Webkit.git
git fetch upstream
git merge upstream/master
git push
