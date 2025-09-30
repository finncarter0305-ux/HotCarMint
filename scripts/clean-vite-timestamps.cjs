const fs = require("fs");
const path = require("path");

for (const file of fs.readdirSync(".")) {
  if (!/^vite\.config\..*\.timestamp-/.test(file)) {
    continue;
  }

  try {
    fs.rmSync(path.join(".", file), { force: true });
  } catch {
    // Ignore cleanup errors so dev server can still start.
  }
}
