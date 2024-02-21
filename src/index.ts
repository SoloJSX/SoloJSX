declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elemName: string]: any;
        }
    }
}
export default function solojsx(type: string, props: { [key: string]: any }, ...children: (string | HTMLElement)[]): HTMLElement {
    const e = document.createElement(type);
    if (props) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function')
                e.addEventListener(key.toLowerCase().substring(2), props[key]);
            else
                e.setAttribute(key, props[key]);
        });
    }
    children.forEach((child) => {
        if (typeof child === 'string')
            e.appendChild(document.createTextNode(child));
        else if (child instanceof HTMLElement)
            e.appendChild(child);
    });
    return e;
}