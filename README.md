![alt text](https://github.com/SoloJSX/SoloJSX/blob/main/.github/solojsx_logo.png?raw=true)

[![npm](https://img.shields.io/npm/v/solojsx)](https://www.npmjs.com/package/solojsx)
[![npm](https://img.shields.io/npm/dm/solojsx)](https://www.npmjs.com/package/solojsx)
[![npm package minimized gzipped size](https://img.shields.io/bundlejs/size/solojsx)](https://www.npmjs.com/package/solojsx)
[![GitHub](https://img.shields.io/github/license/SoloJSX/solojsx)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)


- :sun_with_face: JSX that returns nodes
- :gem: Supports Attributes & Events
- :tada: No Virtual DOM
- :zap: Small bundle size (285 B)

## Getting started
```bash
npx create-solojsx-app project-name
```
#### Options
```bash
bunx create-solojsx-app-bun project-name # using bun
npx create-solojsx-app # in current folder
npx create-solojsx-app -m # minimal template
```

## Usage
```jsx  
const element = (
  <div>
    <h1>SoloJSX</h1>
    <p>SoloJSX is a library that returns nodes from JSX</p>
  </div>
)
document.body.appendChild(element)
```

#### Attributes and events
```jsx  
const fun = (text: string) => alert(text)
const e = <div style="color: red" onclick={() => fun("Hi")}>Click Me</div>
```

#### Arrays
```jsx  
const e = <div>
    {[1, 2, 3].map(i => <div>{i}</div>)}
</div>
```

#### Ternaries
```jsx  
const e = <div>
   {true ? <div>Hello</div> : []}
</div>
```

#### Nested elements
```jsx  
const inner = <div>Hello</div>
const e = <div>{inner}</div>
```

## License
MIT
