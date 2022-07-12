const fs = require("fs");
const properties = require("./properties.yml");
const globalValues = require("./global-values.yml");

const css = Object.entries(properties).map(([property, values]) => {
  return values
    .map(value => {
      const classValue = value.toString()
        .replace(" ", "-")
        .replace(/([^0-9a-zA-Z_-])/, "\\$1");
      return [
        `.${property}-${classValue} { ${property}: ${value}; }`,
        `.${property}-${classValue}\\! { ${property}: ${value} !important; }`,
      ].join("\n");
    }).join("\n");
  }).join("\n");

fs.writeFileSync("dist/generator/literally.css", css);

const markdown = Object.entries(properties).map(([property, values]) => {
  return values
    .map(value => {
      const classValue = value.toString().replace(" ", "-");
      return [
        `| ${property}-${classValue} | ${property}: ${value}; |`,
        `| ${property}-${classValue}! | ${property}: ${value} !important; |`,
      ].join("\n");
    }).join("\n");
  }).join("\n");

fs.writeFileSync("docs/classes.md", [
  "# literally.css Class Reference",
  "",
  "| Class | Style |",
  "| --- | --- |",
  markdown,
].join("\n"));
