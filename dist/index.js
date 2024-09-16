const svgs = new Set(['svg', 'circle', 'ellipse', 'line', 'path', 'polygon', 'polyline', 'rect', 'g', 'defs', 'linearGradient', 'radialGradient', 'stop', 'use', 'symbol', 'text', 'tspan', 'tref', 'textPath', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'glyph', 'glyphRef', 'marker', 'metadata', 'missing-glyph', 'pattern', 'switch', 'foreignObject', 'desc', 'title'])
export default function jsx(type, props, ...children) {
    const e = svgs.has(type) ? document.createElementNS('http://www.w3.org/2000/svg', type) : document.createElement(type)
    for (const [k, v] of Object.entries((props || {}))) {
        if (k.startsWith('on') && typeof v === 'function')
            e.addEventListener(k.toLowerCase().substring(2), v)
        else if (k == 'style' && typeof v === 'object')
            Object.assign(e.style, v)
        else
            e.setAttribute(k, v)
    }
    const ac = c => {
        if (Array.isArray(c))
            c.forEach(d => ac(d))
        else if (c != null)
            e.appendChild(c instanceof Element ? c : document.createTextNode(c))
    }
    (children || []).forEach(c => ac(c))
    return e
}