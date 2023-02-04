# rem-this

[![npm](https://img.shields.io/npm/dt/rem-this)](https://www.npmjs.com/package/rem-this)

> A simple CLI tool to convert pixel values to rem units.

## Install

```sh
npm install -g rem-this
```

## Usage

```sh
rem-this 1440
```
Output:

```
1440px => 90rem
Copied to clipboard!
```

## Flags

| Flags                | Description                                | Default |
| -------------------- | ------------------------------------------ | ------- |
| `--round`, `-r`      | Round the number to the nearest integer    | true    |
| `--disable-copy`, `-d` | Disable copying the result to the clipboard | false |
| `--font-size`, `-fs` | The base font size to convert to rem units | 16      |
