const https = require('https');
const fs = require('fs');
const crypto = require('crypto');
const start = Date.now();

function doRequest(){
    https.request('https://www.google.com',res=>{
        res.on('data',()=>{
            console.log("Data received");
        });
        res.on('end',()=>{
            console.log("HTTPS: ",Date.now() - start)
        })
    }).end();
}

exports.getHash = () => {
    const hash = crypto.pbkdf2Sync('a','b',100000,512,'sha512').toString("hex");

    doRequest();

    fs.readFile('multitask.js','utf8',()=>{});

    return hash;
}