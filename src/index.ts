#!/usr/bin/env node

import meow from 'meow';
import clipboard from 'clipboardy';
import { ERROR, SUCCESS } from './contants.js';

interface Flags {
  round: boolean;
  fontSize: number;
  disableCopy: boolean;
}

const cli = meow(
  `
  Usage: 
    $ rem-this <number>

  Flags:
    --round, -r  Round the number to the nearest integer (default: true)
    --font-size, -f Set the default font size (default: 16)
    --disable-copy, -d Disable copying to clipboard (default: false)
`,
  {
    importMeta: import.meta,
    flags: {
      round: {
        type: 'boolean',
        alias: 'r',
        default: true
      },
      fontSize: {
        type: 'number',
        alias: 'f',
        default: 16
      },
      disableCopy: {
        type: 'boolean',
        alias: 'd',
        default: false
      }
    }
  }
);

const app = async () => {
  const { round, fontSize, disableCopy } = cli.flags as Flags;
  const input = cli.input[0];

  if (isNaN(Number(input))) {
    console.error(ERROR(`"${input}" is not a number...`));
    process.exit(1);
  }

  const parsed = parseInt(input, 10);
  const result = round ? Math.round(parsed / fontSize) : parsed / fontSize;

  console.log(SUCCESS(`${parsed}px => ${result}rem`));

  if (!disableCopy) {
    await clipboard.write(`${result}rem`);
    console.log(SUCCESS(`Copied to clipboard!`));
  }

  process.exit(0);
};

app().catch(e => {
  console.error('Something went wrong: ', e);
  process.exit(1);
});
