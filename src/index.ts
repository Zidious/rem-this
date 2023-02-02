#!/usr/bin/env node

import meow from 'meow';
import { ERROR, SUCCESS } from './contants';

interface Flags {
  round: boolean;
  fontSize: number;
}

const cli = meow(
  `
  Usage: 
    $ rem-this <number>

  Flags:
    --round, -r  Round the number to the nearest integer (default: true)
    --font-size, -fs Set the default font size (default: 16)
`,
  {
    flags: {
      round: {
        type: 'boolean',
        alias: 'r',
        default: true
      },
      fontSize: {
        type: 'number',
        alias: 'fs',
        default: 16
      }
    }
  }
);

const app = async () => {
  const { round, fontSize } = cli.flags as Flags;
  const input = cli.input[0];

  if (isNaN(Number(input))) {
    console.error(ERROR(`"${input}" is not a number`));
    process.exit(1);
  }

  const parsed = parseInt(input, 10);
  const result = round
    ? Math.round(parsed / fontSize)
    : parseInt(input, 10) / fontSize;

  console.log(SUCCESS(`${parsed}px \n${result}rem`));
  process.exit(0);
};

app().catch(e => {
  console.error('Something went wrong: ', e);
  process.exit(1);
});
