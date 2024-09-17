const svgs = new Set(['svg', 'circle', 'ellipse', 'line', 'path', 'polygon', 'polyline', 'rect', 'g', 'defs', 'linearGradient', 'radialGradient', 'stop', 'use', 'symbol', 'text', 'tspan', 'tref', 'textPath', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'glyph', 'glyphRef', 'marker', 'metadata', 'missing-glyph', 'pattern', 'switch', 'foreignObject', 'desc', 'title'])
export default function jsx(type, props, ...children) {
    let e = svgs.has(type) ? document.createElementNS('http://www.w3.org/2000/svg', type) : document.createElement(type)
    for (let [k, v] of Object.entries((props ?? {})))
        k.startsWith('on') && typeof v === 'function' ? e.addEventListener(k.toLowerCase().substring(2), v)
            : k == 'style' && typeof v === 'object' ? Object.assign(e.style, v)
                : e.setAttribute(k, v)
    e.append(...children.flat(Infinity).map(c => c ?? []))
    return e
}