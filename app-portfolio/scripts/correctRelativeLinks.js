const { readFileSync, readdirSync, statSync, writeFileSync } = require('fs');
const { parse } = require('node-html-parser');

const getSubFoldersOrFiles = (folder, fileExtension) => {
    const filesOrFolders = readdirSync(folder);
    let filesOrSubfolders = [];
    for (let i in filesOrFolders) {
        const fileOrFolder = `${folder}/${filesOrFolders[i]}`;
        if (!!fileExtension) {
            if (filesOrFolders[i].includes(fileExtension)) filesOrSubfolders.push(fileOrFolder);
        } else {
            if (statSync(fileOrFolder).isDirectory()) filesOrSubfolders.push(fileOrFolder);
        }
    }
    return filesOrSubfolders;
}

const getSubFolders = (folder) => {
    return getSubFoldersOrFiles(folder);
}

const getHtmlFiles = (folder) => {
    return getSubFoldersOrFiles(folder, '.html');
}

const updatePathsInElementArray = (elements, attribute, isExampleWorkFolder) => {
    elements.forEach((element) => {
        const currentAttributeValue = element.attributes[attribute];
        if (!!currentAttributeValue && currentAttributeValue[0] === '/') {
            if (isExampleWorkFolder) {
                element.setAttribute(attribute, `../${currentAttributeValue}`);
            } else {
                element.setAttribute(attribute, `.${currentAttributeValue}`);
            }
        }
    });
};

const fixHtmlFile = (file, isExampleWorkFolder) => {
    const htmlString = readFileSync(file);
    const htmlObject = parse(htmlString);
    let links = htmlObject.querySelectorAll('link');
    let scripts = htmlObject.querySelectorAll('script');
    let images = htmlObject.querySelectorAll('img');
    updatePathsInElementArray(links, 'href', isExampleWorkFolder);
    updatePathsInElementArray(scripts, 'src', isExampleWorkFolder);
    updatePathsInElementArray(images, 'src', isExampleWorkFolder);
    writeFileSync(file, htmlObject.toString());
}

const fixHtmlFiles = (folder) => {
    const isExampleWorkFolder = folder === './build/example-work';
    const htmlFiles = getHtmlFiles(folder);
    for (let i in htmlFiles) {
        const htmlFile = htmlFiles[i];
        fixHtmlFile(htmlFile, isExampleWorkFolder);
    }
    const subFolders = getSubFolders(folder);
    subFolders.forEach((folder) => { fixHtmlFiles(folder) });
}

const main = () => {
    const buildFolder = './build';
    fixHtmlFiles(buildFolder);
}

main();
