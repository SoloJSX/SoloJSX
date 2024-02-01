# SoloJSX
SoloJSX

## Features
- JSX that returns nodes
- Supports attributes & events
- No virtual DOM, no reactivity

## Installation

#### Using npm
```bash
npm i -D solojsx
```

#### Using bun
```bash
bun i -D solojsx
```

## Usage
#### TypeScript example
[SoloJSX-template-ts](https://github.com/eekelof/SoloJSX-template-ts)

#### JavaScript example
[SoloJSX-template-js](https://github.com/eekelof/SoloJSX-template-js)

### Code Example
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

