![alt text](https://github.com/SoloJSX/SoloJSX/blob/main/.github/solojsx_logo.png?raw=true)

[![npm](https://img.shields.io/npm/v/solojsx)](https://www.npmjs.com/package/solojsx)
[![npm](https://img.shields.io/npm/dm/solojsx)](https://www.npmjs.com/package/solojsx)
[![GitHub](https://img.shields.io/github/license/SoloJSX/solojsx)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)


- :heavy_check_mark: JSX that returns nodes
- :gem: Supports attributes & events
- :tada: No VDOM, No reactivity
- :zap: Small size, Native performance

## Getting started

#### Using npx
```bash
# in current folder
npx create-solojsx-app
# in new folder
npx create-solojsx-app app
```

#### Using bun
```bash
# in current folder
bunx create-solojsx-app-bun
# in new folder
bunx create-solojsx-app-bun app
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

