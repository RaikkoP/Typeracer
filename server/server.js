import { readFileSync } from 'fs';
import http from 'http';
let possibleWords = [];
const regex = /[A-Z0-9.&'-]/;
const allWords = readFileSync('words.txt').toString('UTF-8').split('\n');

function getPossibleWords() {
    for (let i = 0; i < allWords.length; i++) {
        if (regex.test(allWords[i])) {
            continue;
        }
        possibleWords.push(allWords[i]);
    };
};

getPossibleWords();

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(possibleWords));
}).listen(3000, function (req, res) {
    console.log("Server listening on 3000")
});