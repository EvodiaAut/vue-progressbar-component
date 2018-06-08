# vue-progressbar-component

> [[CSS GPU Animation](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/)] Simple progressbar for vuejs

[![npm](https://img.shields.io/npm/v/vue-progressbar-component.svg?style=for-the-badge)](https://www.npmjs.com/package/vue-progressbar-component)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](https://github.com/EvodiaAut/vue-progressbar-component/blob/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/vue-progressbar-component.svg?style=for-the-badge)](https://www.npmjs.com/package/vue-progressbar-component)

## Demo

[Demo here](https://evodiaaut.github.io/vue-progressbar-component/)

## Install

`npm install vue-progressbar-component` or `yarn add vue-progressbar-component`

## Usage

The most common use case is to register the component globally.

```js
// in your main.js or similar file
import Vue from 'vue'
import ProgressBar from 'vue-progressbar-component'

Vue.component('progress-bar', ProgressBar)
```

Alternatively you can do this to register the components:

```js
// HelloWorld.vue
import ProgressBar from 'vue-progressbar-component'

export default {
  name: 'HelloWorld',
  components: {
    ProgressBar
  }
}
```

On your page you can now use html like this:

```html
<!-- simple progress bar -->
<progress-bar
  :value="77"
/>

<!-- add class (color) -->
<progress-bar
  :value="88"
  bar-class="bg-success"
/>

<!-- change start origin from right -->
<progress-bar
  :value="95"
  origin="right"
/>

<!-- change scaleX to scaleY and origin bottom -->
<progress-bar
  :value="88"
  scale="Y"
  origin="bottom"
/>
```

## CSS

```scss
// example or use it
@import "./node_modules/vue-progressbar-component/src/scss/progressbar";
```

Do you like my theme but not the colors or paddings, ...?

```scss
// overwrite variables
$progressbar-height: 2rem;
$progressbar-background: gray;
// find more variables in /src/scss/_progressbar-variables.scss

@import "./node_modules/vue-progressbar-component/src/scss/progressbar";
```

## Props

|Prop|Type|Required|Default|Description
|-|-|-|-|-|
|value|Number|false|0|Progress bar width
|barClass|String|false|''|Bar class
|origin|String|false|left|Set origin
|scale|String|false|X|Set scaleX or scaleY

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
