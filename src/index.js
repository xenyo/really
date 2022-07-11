const fs = require("fs");
const properties = require("./properties.yml");
const globalValues = require("./global-values.yml");

const escape = str => str.replace(/([^0-9a-zA-Z_-])/, "\\$1");

const css = Object.entries(properties).map(([property, values]) => {
  return values.concat(globalValues).map(value => {
    return [
      `.${property}-${escape(value)} { ${property}: ${value}; }`,
      `.${property}-${escape(value)}\\! { ${property}: ${value} !important; }`,
    ].join("\n");
  }).join("\n");
}).join("\n");

fs.writeFileSync("generator/literally.css", css);
