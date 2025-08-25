const fs = require("fs");

// find all files starting with "file" and ending with ".js"
const files = fs.readdirSync(".").filter(f => /^file.*\.js$/.test(f));

files.forEach(file => {
  fs.appendFileSync(file, "// Modified: added kebab-case note\n");
  console.log(`Updated ${file}`);
});
