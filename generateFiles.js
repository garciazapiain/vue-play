const fs = require("fs");

// mapping numbers to words for 2..100
const words = [
  "Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten",
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

words.forEach(word => {
  const fileName = `file${word}.js`;
  const content = `// This is ${fileName}\n`;
  fs.writeFileSync(fileName, content);
  console.log(`Created ${fileName}`);
});
