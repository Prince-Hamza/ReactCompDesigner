import axios from 'axios'

export class codeGen {

    constructor() {
        this.names = ['Layout', 'Button', 'TextInput']
        this.elements = ['<Layout style={Styles.Layout}> \n', '<Button style={Styles.Button}></Button> \n', '<TextInput style={Styles.TextInput} /> \n']
        this.Jsx = ``
        this.Rss = {}
    }

    generateCode = (info) => {
        this.compStart(info)
        info.forEach(item => { if (!item.inLayout) this.elementize(item) })
        this.compEnd()
        this.stylesheet()
        this.releaseFiles()
    }

    compStart = (info) => {
        this.Jsx += info.map((item) => { return this.Jsx.includes(`import ${item.name}`) ? undefined : `import ${item.name} from '../components' \n ` }).filter(Boolean).join('')
        this.Jsx += `export default function Result () { \n return ( \n <div> \n `
    }

    compEnd = () => {
        this.Jsx += `\n </div> \n ) \n } \n `
    }

    elementize = (item) => {
        var index = this.names.indexOf(item.name)
        this.Jsx += this.elements[index]
        if (item.name === 'Layout' && item.children) this.elementizeChildren(item)
    }

    elementizeChildren = (layout) => {
        layout.children.forEach((item) => {
            var index = this.names.indexOf(item.name)
            this.Jsx += this.elements[index]
        })
        this.Jsx += '</Layout>'
    }

    stylesheet = () => {
        this.Jsx += `\n const Styles = ({ \n })`
    }

    releaseFiles = async () => {
        var result = await axios.post('http://localhost:5000/api/release', { codeString: this.Jsx })
        if (result.status === 200) alert(`Files released successfully to output folder`)
        if (result.status !== 200) alert(`server response status ${result.status} 400  bad request`)
    }

}

