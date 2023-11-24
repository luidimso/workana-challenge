const { getHash } = require("./hash");
const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

jest.mock("https");
jest.useFakeTimers();


https.request.mockImplementation(('https', () => ({
    ...jest.requireActual('https'),
    request: (option, cb) => cb({
     on: jest.fn()
    }),
    end: jest.fn()
})));

function getHashTest() {
    return crypto.pbkdf2Sync('b','c',100000,512,'sha512').toString("hex");
}




it("should call doRequest method with data", async () => {
    getHash();

    expect(https.request).toBeCalledWith("https://www.google.com", expect.any(Function));
});

it("should compare encrypted hashes and be different", async () => {
    const originalHash = getHash();
    const testHash = getHashTest();

    expect(originalHash).not.toBe(testHash);
});

it("should contains 'hello' string", async () => {
    const data = fs.readFileSync('multitask.js','utf8');
    
    expect(data).toBe("hello");
});