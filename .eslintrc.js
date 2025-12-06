/* eslint-env node */
module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
  rules: {
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "react/jsx-key": "off"
  },
  ignorePatterns: ["node_modules/", ".next/", "out/"]
};
