![SoloJSX](https://github.com/SoloJSX/SoloJSX/blob/main/.github/solojsx_logo.png?raw=true)

[![npm](https://img.shields.io/npm/v/solojsx)](https://www.npmjs.com/package/solojsx)
[![npm](https://img.shields.io/npm/dm/solojsx)](https://www.npmjs.com/package/solojsx)
[![npm package minimized gzipped size](https://img.shields.io/bundlejs/size/solojsx)](https://www.npmjs.com/package/solojsx)
[![GitHub](https://img.shields.io/github/license/SoloJSX/solojsx)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

- :sun_with_face: JSX, nothing else
- :gem: Supports attributes & events
- :x: No reactivity, vdom or components
- :zap: Small bundle size (463 B)

## Getting started
```bash
npx create-solojsx-app project
```
#### Options
```bash
npx create-solojsx-app # in current folder
npx create-solojsx-app -m # minimal template
npx create-solojsx-app -js # javascript
bunx create-solojsx-app-bun project # using bun
```

## Usage
```jsx  
const e = <div> Hello from SoloJSX </div>
document.body.append(e)
```

#### Attributes
```jsx  
<div style="color: red"> Hello </div>
```

#### Events
```jsx  
const f = (text) => alert(text)
<div onclick={() => f("Hi")}> Click Me </div>
```

#### Arrays
```jsx  
<div> {[1, 2, 3].map(i => <div> {i} </div>)} </div>
```

#### Ternaries
```jsx  
<div> {true ? <div> Hello </div> : null} </div>
```

#### Nested elements
```jsx  
const inner = <div> Hello </div>
<div> {inner} </div>
```

#### Style object
```jsx 
const style = { color: "red" }
<div style={style}> Hello </div>
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

### Advanced todo list
- https://github.com/eekelof/localboards

### Templates
- https://github.com/SoloJSX/SoloJSX-template-ts
- https://github.com/SoloJSX/SoloJSX-template-ts-minimal
- https://github.com/SoloJSX/SoloJSX-template-js
- https://github.com/SoloJSX/SoloJSX-template-ts-todo
- https://github.com/SoloJSX/SoloJSX-template-ts-three

## License
MIT