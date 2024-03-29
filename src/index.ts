declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elemName: string]: any;
        }
    }
}
export default function solojsx(type: string, props: { [key: string]: any }, ...children: any[]): HTMLElement {
    const e = document.createElement(type);
    for (const [k, v] of Object.entries((props || {}))) {
        if (k.startsWith('on') && typeof v === 'function')
            e.addEventListener(k.toLowerCase().substring(2), v);
        else
            e.setAttribute(k, v);
    }
    const ac = (c: any) => {
        if (Array.isArray(c))
            c.forEach(d => ac(d));
        else
            e.appendChild((typeof c == 'object') ? c : document.createTextNode(c));
    };
    (children || []).forEach(c => ac(c));
    return e;
}