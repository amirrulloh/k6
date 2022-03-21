#!/bin/bash
set -ex

install_k6_deps() {
    sudo apt-get update
    if ! [ -x "$(command -v curl)" ]; then
        echo 'Error: curl is not installed. Curl will be install.' >&2
        sudo apt-get -y install curl
    fi
    if ! [ -x "$(command -v dirmngr)" ]; then
        echo 'Error: dirmngr is not installed. Dirmngr will be install.' >&2
        sudo apt-get -y install dirmngr --install-recommends
    fi
    if ! [ -x "$(command -v k6)" ]; then
        echo 'Error: k6 is not installed. k6 will be install.' >&2
        sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
        echo "deb https://dl.bintray.com/loadimpact/deb stable main" | sudo tee -a /etc/apt/sources.list
        sudo apt-get update
        sudo apt-get -y install k6
    fi
    if ! [ -x "$(command -v nodejs)" ]; then
        echo 'Error: nodejs is not installed. nodejs will be install.' >&2
        curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
        sudo apt-get update
        sudo apt-get -y install nodejs
        npm install --save-dev webpack webpack-cli k6 babel-loader @babel/core @babel/preset-env core-js
    fi
}

main() {
    install_k6_deps
}

main "$@"
