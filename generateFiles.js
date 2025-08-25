const fs = require("fs");

for (let i = 1; i <= 50; i++) {
  const fileName = `file-${i === 1 ? "one"
    : i === 2 ? "two"
    : i === 3 ? "three"
    : i === 4 ? "four"
    : i === 5 ? "five"
    : i === 6 ? "six"
    : i === 7 ? "seven"
    : i === 8 ? "eight"
    : i === 9 ? "nine"
    : i === 10 ? "ten"
    : i === 11 ? "eleven"
    : i === 12 ? "twelve"
    : i === 13 ? "thirteen"
    : i === 14 ? "fourteen"
    : i === 15 ? "fifteen"
    : i === 16 ? "sixteen"
    : i === 17 ? "seventeen"
    : i === 18 ? "eighteen"
    : i === 19 ? "nineteen"
    : i === 20 ? "twenty"
    : i === 21 ? "twenty-one"
    : i === 22 ? "twenty-two"
    : i === 23 ? "twenty-three"
    : i === 24 ? "twenty-four"
    : i === 25 ? "twenty-five"
    : i === 26 ? "twenty-six"
    : i === 27 ? "twenty-seven"
    : i === 28 ? "twenty-eight"
    : i === 29 ? "twenty-nine"
    : i === 30 ? "thirty"
    : i === 31 ? "thirty-one"
    : i === 32 ? "thirty-two"
    : i === 33 ? "thirty-three"
    : i === 34 ? "thirty-four"
    : i === 35 ? "thirty-five"
    : i === 36 ? "thirty-six"
    : i === 37 ? "thirty-seven"
    : i === 38 ? "thirty-eight"
    : i === 39 ? "thirty-nine"
    : i === 40 ? "forty"
    : i === 41 ? "forty-one"
    : i === 42 ? "forty-two"
    : i === 43 ? "forty-three"
    : i === 44 ? "forty-four"
    : i === 45 ? "forty-five"
    : i === 46 ? "forty-six"
    : i === 47 ? "forty-seven"
    : i === 48 ? "forty-eight"
    : i === 49 ? "forty-nine"
    : "fifty"}.js`;

  if (fs.existsSync(fileName)) {
    fs.appendFileSync(fileName, "// Modified: kebab-case batch update\n");
    console.log(`Updated ${fileName}`);
  } else {
    console.log(`Skipped missing file: ${fileName}`);
  }
}
