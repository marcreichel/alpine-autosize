<h1 align="center">↕️ Alpine Autosize ↕️</h1>

<p align="center">
  A little <a href="https://alpinejs.dev">Alpine.js</a> plugin to automatically resize a <code>textarea</code> to fit its content.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@marcreichel/alpine-autosize">
    <img src="https://img.shields.io/github/v/tag/marcreichel/alpine-autosize?label=version" alt="version">
  </a>
  <a href="https://www.npmjs.com/package/@marcreichel/alpine-autosize">
    <img src="https://img.badgesize.io/marcreichel/alpine-autosize/main/dist/alpine-autosize.js.svg?compression=gzip&color=green" alt="Build size">
  </a>
  <a href="https://www.npmjs.com/package/@marcreichel/alpine-autosize">
    <img src="https://img.shields.io/npm/dt/@marcreichel/alpine-autosize" alt="downloads">
  </a>
  <a href="https://www.jsdelivr.com/package/npm/@marcreichel/alpine-autosize">
    <img src="https://data.jsdelivr.com/v1/package/npm/@marcreichel/alpine-autosize/badge?style=rounded" alt="JSDelivr">
  </a>
  <a href="https://www.npmjs.com/package/@marcreichel/alpine-autosize">
    <img alt="GitHub" src="https://img.shields.io/github/license/marcreichel/alpine-autosize">
  </a>
  <a href="https://gitmoji.dev/">
    <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg">
  </a>
</p>

## 🚀 Installation

### CDN

Include the following `<script>` tag in the `<head>` of your document, just before Alpine.

```html
<script src="https://cdn.jsdelivr.net/npm/@marcreichel/alpine-autosize@latest/dist/alpine-autosize.min.js" defer></script>
```

### NPM

```shell
npm install @marcreichel/alpine-autosize
```

Add the `x-autosize` directive to your project by importing the package **before** starting Alpine.

```js
import Alpine from 'alpinejs';
import Autosize from '@marcreichel/alpine-autosize';

Alpine.plugin(Autosize);

Alpine.start();
```

## 🪄 Usage

### Directive

To let the `textarea` automatically resize, add the `x-autosize` directive to the `<textarea>`.

```html
<textarea x-autosize></textarea>
```

### Magic

If you want to "manually" update the size of the textarea – for example after updating its content programatically – you may use the `$autosize` Alpine magic:

```html
<div x-data="{ text: '' }" x-init="$watch('text', () => { $nextTick(() => { $autosize($refs.input); }); })">
    <textarea x-ref="input" x-model="text"></textarea>
</div>
```

Just make sure, you call `$autosize($refs.input)` inside of a `$nextTick` for Alpine to update the DOM correctly.

## 📄 License

Copyright (c) 2022 - 2023 Marc Reichel and contributors.

Licensed under the MIT license, see [LICENSE](LICENSE) for details.
