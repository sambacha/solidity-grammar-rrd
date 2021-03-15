// @file railroad grammar generator
// @license MIT
'use strict';
var fs = require('fs');

const { parseEbnf, createDocumentation } = require("ebnf2railroad");

var ebnf = fs.readFileSync('solidity.ebnf','utf8');
const ast = parseEbnf(ebnf); // can throw parse error exceptions
const htmlOutput = createDocumentation(ast);
// @exports html {solidity.ebnf}
