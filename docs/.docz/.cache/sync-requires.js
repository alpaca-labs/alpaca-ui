const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\.docz\\.cache\\dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\README.md"))),
  "component---src-components-button-mdx": hot(preferDefault(require("C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\src\\components\\Button.mdx"))),
  "component---src-index-mdx": hot(preferDefault(require("C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\src\\index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\.docz\\src\\pages\\404.js")))
}

