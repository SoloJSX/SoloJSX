![alt text](https://github.com/SoloJSX/SoloJSX/blob/main/.github/solojsx_logo.png?raw=true)

[![npm](https://img.shields.io/npm/v/solojsx)](https://www.npmjs.com/package/solojsx)
[![npm](https://img.shields.io/npm/dm/solojsx)](https://www.npmjs.com/package/solojsx)
[![npm package minimized gzipped size](https://img.shields.io/bundlejs/size/solojsx)](https://www.npmjs.com/package/solojsx)
[![GitHub](https://img.shields.io/github/license/SoloJSX/solojsx)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)


- :sun_with_face: JSX that returns nodes
- :gem: Supports Attributes & Events
- :tada: No Virtual DOM
- :zap: Small size (285 B)

## Getting started

#### Using npx
##### In current folder
```bash
npx create-solojsx-app
```
#####  In new folder
```bash
npx create-solojsx-app project-name
```

#### Using bun
##### In current folder
```bash
bunx create-solojsx-app-bun
```
#####  In new folder
```bash
bunx create-solojsx-app-bun project-name
```

## Usage
```jsx  
import solojsx from 'solojsx';

const element = (
  <div>
    <h1>SoloJSX</h1>
    <p>SoloJSX is a library that returns nodes from JSX</p>
  </div>
);
document.body.appendChild(element);
```

#### Attributes and events
```jsx  
const onClick = (text: string) => alert(text);
const e = <div style="color: red" onclick={() => onClick("Hi")}>Click Me</div>;
```

#### Array
```jsx  
const e = <div>
    {[1, 2, 3].map(i => <div>{i}</div>)}
</div>;
```

#### Ternary
```jsx  
const e = <div>
   {true ? <div>Hello</div> : []}
</div>;
```

#### Nested elements
```jsx  
const inner = <div>Hello</div>;
const e = <div>{inner}</div>;
```

## License
MIT
