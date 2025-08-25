const fs = require("fs");

// 1..100 as words (CamelCase) so we can map words -> numbers
const words = [
  "One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten",
  "Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen",
  "Twenty","TwentyOne","TwentyTwo","TwentyThree","TwentyFour","TwentyFive","TwentySix","TwentySeven","TwentyEight","TwentyNine",
  "Thirty","ThirtyOne","ThirtyTwo","ThirtyThree","ThirtyFour","ThirtyFive","ThirtySix","ThirtySeven","ThirtyEight","ThirtyNine",
  "Forty","FortyOne","FortyTwo","FortyThree","FortyFour","FortyFive","FortySix","FortySeven","FortyEight","FortyNine",
  "Fifty","FiftyOne","FiftyTwo","FiftyThree","FiftyFour","FiftyFive","FiftySix","FiftySeven","FiftyEight","FiftyNine",
  "Sixty","SixtyOne","SixtyTwo","SixtyThree","SixtyFour","SixtyFive","SixtySix","SixtySeven","SixtyEight","SixtyNine",
  "Seventy","SeventyOne","SeventyTwo","SeventyThree","SeventyFour","SeventyFive","SeventySix","SeventySeven","SeventyEight","SeventyNine",
  "Eighty","EightyOne","EightyTwo","EightyThree","EightyFour","EightyFive","EightySix","EightySeven","EightyEight","EightyNine",
  "Ninety","NinetyOne","NinetyTwo","NinetyThree","NinetyFour","NinetyFive","NinetySix","NinetySeven","NinetyEight","NinetyNine",
  "Hundred"
];

// Map "TwentyOne" -> 21, etc.
const wordToNum = new Map(words.map((w, i) => [w.toLowerCase(), i + 1]));

// Normalize the part after "file" and before ".js"
// - handles "fileTwentyOne.js"  -> "twentyone"
// - handles "file-twenty-one.js" -> "twentyone"
function normalizeToken(token) {
  return token.replace(/^-/, "").toLowerCase().replace(/-/g, "");
}

// Convert token to number if possible (supports numeric too)
function tokenToNumber(token) {
  if (/^\d+$/.test(token)) return parseInt(token, 10);
  // try word forms
  const camelLike = normalizeToken(token);
  return wordToNum.get(camelLike) ?? NaN;
}

const files = fs.readdirSync(".").filter(f => /^file.*\.js$/i.test(f));

let count = 0;
files.forEach(file => {
  const token = file.replace(/^file/i, "").replace(/\.js$/i, "");
  const n = tokenToNumber(token);
  if (!Number.isNaN(n) && n <= 35) {
    fs.appendFileSync(file, "// Modified: added kebab-case note\n");
    console.log(`Updated ${file}`);
    count++;
  }
});

console.log(`Done. Updated ${count} file(s) up to Fifty.`);
