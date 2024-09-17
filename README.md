![alt text](https://github.com/SoloJSX/SoloJSX/blob/main/.github/solojsx_logo.png?raw=true)

[![npm](https://img.shields.io/npm/v/solojsx)](https://www.npmjs.com/package/solojsx)
[![npm](https://img.shields.io/npm/dm/solojsx)](https://www.npmjs.com/package/solojsx)
[![npm package minimized gzipped size](https://img.shields.io/bundlejs/size/solojsx)](https://www.npmjs.com/package/solojsx)
[![GitHub](https://img.shields.io/github/license/SoloJSX/solojsx)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

- :sun_with_face: JSX, nothing else
- :gem: Supports attributes & events
- :x: No reactivity, vdom or components
- :zap: Small bundle size (312 B)

## Getting started
```bash
npx create-solojsx-app project-name
```
#### Options
```bash
npx create-solojsx-app # in current folder
npx create-solojsx-app -m # minimal template
npx create-solojsx-app -js # javascript

bunx create-solojsx-app-bun project-name # using bun
```

## Usage
```jsx  
const e = <div> Hello from SoloJSX </div>
document.body.appendChild(e)
```

#### Attributes and events
```jsx  
const f = (text) => alert(text)
const e = <div style="color: red" onclick={() => f("Hi")}> Click Me </div>
```

#### Arrays
```jsx  
const e = <div> {[1, 2, 3].map(i => <div> {i} </div>)} </div>
```

#### Ternaries
```jsx  
const e = <div> {true ? <div> Hello </div> : null} </div>
```

#### Nested elements
```jsx  
const inner = <div> Hello </div>
const e = <div> {inner} </div>
```

#### Style object
```jsx 
const style = { color: "red" }
const e = <div style={style}> Hello </div>
```

## Examples
### Simple todo list
```jsx
const input = <input />
const list = <ul></ul>
const add = () => list.prepend(<li> {input.value} </li>)
const btn = <button onClick={add}> Add </button>
document.body.append(input, btn, list)
```

### Templates
- https://github.com/SoloJSX/SoloJSX-template-ts
- https://github.com/SoloJSX/SoloJSX-template-ts-minimal
- https://github.com/SoloJSX/SoloJSX-template-js
- https://github.com/SoloJSX/SoloJSX-template-ts-todo


## License
MIT