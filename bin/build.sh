#!/bin/bash

electron-packager . Version --platform=darwin --arch=x64 --version=0.36.7 --out=build --overwrite
zip -rX build/Version-v$(bin/version.js)-darwin-x64.zip build/Version-darwin-x64/Version.app/
