const fs = require("fs");

function numberToKebab(n) {
  const under20 = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  const tens = {20:"twenty",30:"thirty",40:"forty",50:"fifty",60:"sixty",70:"seventy",80:"eighty",90:"ninety"};
  if (n < 20) return under20[n];
  if (n === 100) return "hundred";
  if (n % 10 === 0) return tens[n];
  const t = Math.floor(n / 10) * 10;
  const u = n % 10;
  return `${tens[t]}-${under20[u]}`;
}

function kebabToCamel(k) {
  return k.split("-").map((w, i) => w[0].toUpperCase() + w.slice(1)).join("");
}

let updated = 0;
for (let i = 1; i <= 100; i++) {
  const kebab = numberToKebab(i);      // e.g., "twenty-one"
  const camel = kebabToCamel(kebab);   // e.g., "TwentyOne"
  const candidates = [
    `file-${kebab}.js`,  // kebab-case
    `file${camel}.js`,   // CamelCase
    `file${i}.js`,       // numeric
  ];

  const file = candidates.find(f => fs.existsSync(f));
  if (!file) {
    console.warn(`Skipped ${i}: none of ${candidates.join(", ")} found`);
    continue;
  }

  // Build 100 comment lines
  let comments = "";
  for (let j = 1; j <= 100; j++) {
    comments += `// Modified ${file} - line ${j}\n`;
  }

  fs.appendFileSync(file, comments);
  console.log(`Updated ${file}`);
  updated++;
}

console.log(`Done. Updated ${updated} file(s).`);
