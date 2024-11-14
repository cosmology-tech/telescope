import * as shell from 'shelljs';
import { prompt } from '../prompt';
import dargs from 'dargs';
import { crossGlob as glob } from '@cosmology/utils';

const fs = require('fs');
const path = require('path');
const repo = 'https://github.com/cosmology-tech/telescope-module-boilerplate.git';

export default async argv => {
    if (!shell.which('git')) {
        shell.echo('Sorry, this script requires git');
        return shell.exit(1);
    }

    let results: { [key: string]: any } = {};

    const argsFromCommand = process.argv.slice(2);
    argsFromCommand.forEach((arg, index) => {
        if (arg.startsWith('--')) {
            let key = arg.slice(2).replace(/-/g, '').toUpperCase();
            key = `__${key}__`;
            const value = argsFromCommand[index + 1] && !argsFromCommand[index + 1].startsWith('--') ? argsFromCommand[index + 1] : '';

            if (Array.isArray(value)) {
                results[key] = value.split(',');
            } else {
                results[key] = value;
            }
        }
    });
    const { name } = results.__MODULENAME__ ? { name: results.__MODULENAME__ } : await prompt([
        {
            type: 'string',
            name: 'name',
            message: 'Enter your new module name',
        }
    ], argv);
    shell.exec(`git clone ${repo} ${name}`);
    shell.cd(name);

    let questions = JSON.parse(fs.readFileSync(`.questions.json`));
    questions = questions.filter(question => !(question.name in results));

    const fullname = shell
        .exec('git config --global user.name', { silent: true })
        .trim();
    const email = shell
        .exec('git config --global user.email', { silent: true })
        .trim();

    // @__USERNAME__/__MODULENAME__
    // __PACKAGE_IDENTIFIER__
    const args = dargs(
        {
            _: [],
            ...argv,
            __MODULENAME__: name,
            __USERFULLNAME__: fullname,
            __USEREMAIL__: email,
        },
        { allowCamelCase: true }
    );

    const answerResults = await prompt(questions, args);
    results = { ...results, answerResults }

    const license = results.__LICENSE__ ?? await prompt(
        [
            {
                name: '__LICENSE__',
                message: 'Which license?',
                choices: ['MIT', 'closed'],
                type: 'list',
                required: true,
            },
        ],
        []
    );

    let scopedResults;
    if (results.__ACCESS__ === 'public') {
        if (results.__USENPMSCOPED__ !== undefined) {
            scopedResults = { scoped: true }
        } else {
            scopedResults = await prompt(
                [
                    {
                        type: 'confirm',
                        name: 'scoped',
                        message: 'use npm scopes?',
                        required: true,
                    },
                ],
                []
            );
        }
    }

    const files = []
        .concat(glob(process.cwd() + '/**/.*'))
        .concat(glob(process.cwd() + '/**/*'));

    for (let i = 0; i < files.length; i++) {
        const templateFile = files[i];
        if (fs.lstatSync(templateFile).isDirectory()) continue;

        let content = fs.readFileSync(templateFile).toString();
        if (
            path.basename(templateFile) === 'LICENSE' &&
            license.__LICENSE__ === 'closed'
        ) {
            content = `Copyright (c) ${new Date().getFullYear()} __USERFULLNAME__ <__USEREMAIL__> - All Rights Reserved
Unauthorized copying via any medium is strictly prohibited
Proprietary and confidential`;
        }

        Object.keys(results).forEach(key => {
            if (/^__/.test(key)) {
                content = content.replace(new RegExp(key, 'g'), results[key]);
            }
        });
        if (results.__ACCESS__ === 'public') {
            if (scopedResults.scoped) {
                content = content.replace(
                    /__PACKAGE_IDENTIFIER__/g,
                    `@${results.__USERNAME__}/${results.__MODULENAME__}`
                );
            } else {
                content = content.replace(
                    /__PACKAGE_IDENTIFIER__/g,
                    `${results.__MODULENAME__}`
                );
            }
        } else {
            content = content.replace(
                /__PACKAGE_IDENTIFIER__/g,
                `@${results.__USERNAME__}/${results.__MODULENAME__}`
            );
        }

        fs.writeFileSync(templateFile, content);
    }

    shell.rm('-rf', '.git');
    shell.rm('-rf', '.questions.json');

    console.log(`

       |||
      (o o)
  ooO--(_)--Ooo-

  ✨ Great work!
  `);
};
