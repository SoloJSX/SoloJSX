declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elemName: string]: any;
        }
    }
}
export default function solojsx(type: string, props: { [key: string]: any }, ...children: any[]): HTMLElement {
    const e = document.createElement(type);
    Object.keys(props || {}).forEach((k) => {
        if (k.startsWith('on') && typeof props[k] === 'function')
            e.addEventListener(k.toLowerCase().substring(2), props[k]);
        else
            e.setAttribute(k, props[k]);
    });
    const ac = (c: any) => {
        if (Array.isArray(c))
            c.forEach(d => ac(d));
        else if (typeof c == 'object')
            e.appendChild(c);
        else
            e.appendChild(document.createTextNode(c));
    };
    (children || []).forEach(c => ac(c));
    return e;
}