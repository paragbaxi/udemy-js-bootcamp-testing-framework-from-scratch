#!/usr/bin/env node

const Runner = require('./runner');

// find all files that end in ".test.js"

const runner = new Runner();

const run = async () => {
    await runner.collectFiles(process.cwd());
    runner.runTests();
};

run();
