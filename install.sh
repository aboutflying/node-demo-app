#!/bin/bash

cd /root
apt-get install -y npm
git-buildpackage --git-ignore-new --git-ignore-branch
cp ../*.deb .