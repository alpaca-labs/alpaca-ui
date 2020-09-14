export default {
    typescript: true,
    docgenConfig: {
        propFilter: (prop) => prop.parent.fileName.includes('types'),
        resolver: (exp, source) => {
            var name = path.basename(source.fileName, path.extname(source.fileName))
            return path.basename(name, path.extname(name))
        },
        searchPath: 'types'
    },
    filterComponents: (files) => files.filter((filepath) => /\/[A-Z]\w*.d.ts$/.test(filepath))
}