#!/bin/bash

cd /root
apt-get install -y npm
git-buildpackage --git-ignore-new --git-ignore-branch
cp ../*.deb .
status=$?
find . -not -uid $(stat -c "%u" .) -exec chown --reference=. {} \;
exit $status # exit with the saved status value