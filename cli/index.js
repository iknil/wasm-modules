const { program } = require('commander');
const inquirer = require('inquirer');
const fse = require('fs-extra');
const fs = require('fs');

function checkExisted(name) {
    const names = fs.readdirSync('./modules');
    
    return names.indexOf(name) >= 0;
}

function createModule(name, description) {
    const dir = `./modules/${name}`;
    const fileCargo = `${dir}/Cargo.toml`;
    const filePackage = `${dir}/package.json`;

    fs.mkdir(dir, () => {});

    fse.copySync('./cli/template/', dir);

    // apply change to cargo
    let data = fs.readFileSync(fileCargo, 'utf8');
    let result = data.replace(/<package-name>/g, name);
    result = result.replace(/<description>/g, description);
    fs.writeFileSync(fileCargo, result, 'utf8');

    // aplly change to package
    data = fs.readFileSync(filePackage, 'utf8');
    result = data.replace(/<package-name>/g, name);
    result = result.replace(/<description>/g, description);
    fs.writeFileSync(filePackage, result, 'utf8');
}

program
    .command('create')
    .argument('<name>')
    .action((name) => {
        // 检查模块是否已经存在
        if (checkExisted(name)) {
            console.error(`module ${name} has existed.`);
        } else {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'description',
                        message: 'module description?'
                    }
                ])
                .then(answers => {
                    const { description } = answers;
                    createModule(name, description);
                });
        }
    });

program.parse();