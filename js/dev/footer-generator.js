// Require path and fs modules
const path = require('path');
const fs = require('fs');

class FooterGenerator {
    
    constructor(footerFileName, footerFilePath) {
        this.footerFileName = footerFileName;
        this.footerFilePath = footerFilePath;
        this.fullPath = footerFilePath + "\\" + footerFileName;
    }
    
    generateFile() {      
        let myFile = new File(["KIVK"], this.fullPath);
//        
//        console.log(myFile.fileSize);
//        console.log(myFile.fileName);
    }
    
    getFilePath() {
        return this.fullPath;
    }
}

module.exports = {
    FooterGenerator: FooterGenerator
};
