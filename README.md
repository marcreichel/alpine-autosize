# Alpine Autosize

![version](https://img.shields.io/github/v/tag/marcreichel/alpine-autosize?label=version)

Automatically resize a `textarea` to fit its content.

## Installation

### CDN

Include the following `<script>` tag in the `<head>` of your document, just before Alpine.

```html
<script src="https://cdn.jsdelivr.net/npm/@marcreichel/alpine-autosize@latest/dist/alpine-autosize.js" defer></script>
```

### NPM

```shell
npm install @marcreichel/alpine-autosize
```

Add the `x-autosize` directive to your project by importing the package **before** Alpine.js.

```js
import Alpine from 'alpinejs';
import Autosize from '@marcreichel/alpine-autosize';

Alpine.plugin(Autosize);

window.Alpine = Alpine;
window.Alpine.start();
```

## Usage

To let the `textarea` automatically resize, add the `x-data` and `x-autosize` directives to the `<textarea>`.

```html
<textarea x-data x-autosize></textarea>
```

That's it!

## License

Copyright (c) 2022 Marc Reichel and contributors.

Licensed under the MIT license, see [LICENSE.md](LICENSE) for details.
