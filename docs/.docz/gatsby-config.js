const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz Example Basic',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: { searchPath: 'types' },
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz Example Basic',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\totor\\opensource\\alpaca-ui\\docs',
          templates:
            'C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\.docz',
          cache: 'C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\.docz\\.cache',
          app: 'C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\.docz\\app',
          appPackageJson:
            'C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\package.json',
          appTsConfig:
            'C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\tsconfig.json',
          gatsbyConfig:
            'C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\gatsby-browser.js',
          gatsbyNode:
            'C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\gatsby-node.js',
          gatsbySSR:
            'C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\.docz\\app\\index.html',
          db:
            'C:\\Users\\totor\\opensource\\alpaca-ui\\docs\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
