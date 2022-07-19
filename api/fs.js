const fs = require('fs')
const path = require('path')

class CodeFiles {
    constructor(platform) {
        this.root = path.join(__dirname , '../output/screens')
        this.platform = platform
    }

    releaseComponent = (req, res) => {
        if (!req.body.codeString) return res.status(400).send('Bad request')
        fs.writeFileSync(`${this.root}/Result.jsx`, req.body.codeString)
        return res.status(200).send('ok')
    }
}

module.exports = new CodeFiles()