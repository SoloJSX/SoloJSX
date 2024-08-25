declare module 'solojsx/jsx-runtime' {
    namespace JSX {
        interface IntrinsicElements {
            [elemName: string]: any;
        }
    }
    export default function jsx(type: string, props: {
        [key: string]: any;
    }, ...children: any[]): HTMLElement;
}