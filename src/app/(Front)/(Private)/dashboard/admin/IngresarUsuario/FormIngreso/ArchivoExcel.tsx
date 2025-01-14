import xlsx from 'node-xlsx';
import fs from "node:fs";

const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/myFile.xlsx`));

console.log('res;', workSheetsFromBuffer);
