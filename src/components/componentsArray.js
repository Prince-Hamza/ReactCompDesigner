
const compNames = ['Layout', 'Button', 'TextInput']
export const componentsJson = compNames.map((comp) => { return { name: comp, top: 0, left: 0, width: '100px', height: '50px', included: false, children: [], FlexRole: comp === 'Layout' ? 'Parent' : 'none' } })