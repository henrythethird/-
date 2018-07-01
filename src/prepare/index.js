const fs = require('fs')
const path = require('path')

const blogPath = path.join(__dirname, '..', '..', 'public', 'blog', 'published')
const assetPath = path.join(__dirname, '..', 'assets', 'articles.json')

const rd = fs.readdirSync(blogPath).filter((file) => {
        return file.endsWith('.html')
    }).map((file) => {
        const name = file.substr(11, file.length - 5)

        return {
            name,
            content: fs.readFileSync(path.join(blogPath, file), "utf8")
        }
    }).reverse()

fs.writeFileSync(assetPath, JSON.stringify(rd))