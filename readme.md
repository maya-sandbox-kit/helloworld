# HelloWorld MFE - Maya

## Overview
The `HelloWorld` MFE is a simple micro front-end (MFE) built using the Maya framework. It displays a greeting message and demonstrates basic state management.

## Features
- Loads dynamically as a web component.
- Uses `Maya.Store` for state management.
- Displays a message based on query parameters.

## How It Works
### Store
```js
Maya.Store.helloworld = {
    name: 'helloworld',
    data: {},
    events: {
        OnLoad: async ev => Maya.Store.SetData({store : 'helloworld', key : ev.key})({msg : `Hello ${ev.query || 'world'}!`})
    }
}
```
The `OnLoad` event sets a message in the store, using the query parameter if provided.

### Component
```js
class HelloWorld extends MayaMFE {
    constructor() {
        super()
        this.setView('main')
        this.setStore(Maya.Store.helloworld)
    }
    onLoad = async ev => Maya.Store.helloworld.events.OnLoad(ev)
    onQuery = async ev => {}
}
window.customElements.define('albert-helloworld', HelloWorld);
```
- `onLoad(ev)`: Loads the message when the component initializes.
- `onQuery(ev)`: Placeholder for handling query changes dynamically.

## Usage

```html
http://localhost:3000/#helloworld
```
<a href="http://localhost:3000/#helloworld" target="_blank" rel="noopener noreferrer">Helloworld - click here</a>

```html
http://localhost:3000/#helloworld?query=neelesh
```
<a href="http://localhost:3000/#helloworld?query=neelesh" target="_blank" rel="noopener noreferrer">Helloworld with query- click here</a>

This loads `Hello, <query>!` if a query is provided, otherwise defaults to `Hello, world!`.

## Summary
A lightweight MFE that displays a dynamic greeting using Maya’s store and lifecycle methods.

