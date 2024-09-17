export default function jsx(type, props, ...children) {
    let e = 'path' == type || 'svg' == type ? document.createElementNS('http://www.w3.org/2000/svg', type) : document.createElement(type)
    for (let [k, v] of Object.entries((props || {}))) {
        if (k.startsWith('on') && typeof v === 'function')
            e.addEventListener(k.toLowerCase().substring(2), v)
        else if (k == 'style' && typeof v === 'object')
            Object.assign(e.style, v)
        else
            e.setAttribute(k, v)
    }
    e.append(...children.flat(Infinity).map(c => c ?? []))
    return e
}