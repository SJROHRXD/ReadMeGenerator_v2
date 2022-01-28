// a shebang?
// a shebang tells the OS to execute the code with the node.js v that's installed on the user's local system

import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import gradient from 'gradient-string';
// import figlet from 'figlet';

let userName;

const sleep = (ms = 4000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        ` ReadMe Generator: 9001 \n`
    );

    await sleep();
    rainbowTitle.stop();

    console.log(chalk.magentaBright(`Navigate through the prompts to generate your README.md`))
};





await welcome(); // top level await; thanks node!