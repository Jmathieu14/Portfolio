#!/bin/bash

mkdir ~/.nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 16

sudo ln -s /home/ec2-user/.nvm/versions/node/v16.15.0/bin/npm /usr/bin/npm
sudo ln -s /home/ec2-user/.nvm/versions/node/v16.15.0/bin/node /usr/bin/yarn
sudo ln -s /home/ec2-user/.nvm/versions/node/v16.15.0/bin/yarn /usr/bin/yarn