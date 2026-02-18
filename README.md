# os-downloads [![CI](https://github.com/piroz/os-downloads/actions/workflows/ci.yml/badge.svg)](https://github.com/piroz/os-downloads/actions/workflows/ci.yml)
Look up downloads directory specific to different operating systems.

# Supported platform

- windows
- macos
- linux

# Install

```console
$ npm install --save os-downloads
```

# Usage

```javascript
const downloads = require("os-downloads");

downloads();
//=> 'C:\Users\Test\Downloads'
```