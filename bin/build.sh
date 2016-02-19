#!/bin/bash

VERSION=v$(bin/version.js)
echo Building version $VERSION
electron-packager . Version --platform=darwin --arch=x64 --version=0.36.7 --out=build --overwrite
cd build/Version-darwin-x64/
zip -rX ../Version-$VERSION-darwin-x64.zip Version.app/
