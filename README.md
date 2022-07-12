# literally.css

![](https://img.badgesize.io/phparkle/literally.css/master/dist/css/literally.css.svg?compression=gzip)


A CSS utility library that _literally_ translates classes into styles.

## Features

### Literal, one-to-one mapping from classes to styles

All classes in literally.css map exactly to the CSS property and value.

For example, the class `display-none` applies `display: none`, `margin-0` applies `margin: 0;` and so on. See [docs/classes.md](docs/classes.md) for the full list of classes.

### !important styles

Adding `!` to the end of any class name adds `!important` to the style. For example, the class `display-none!` applies `display: none !important;`.


### Trivial values only

By only including trivial values such as 0 and none. literally.css avoids making any assumptions about your design system.

You can extend literally.css by adding more specific utility classes in your project's stylesheet and following the same "literal" naming convention.

## Usage

Install literally.css with npm:

```bash
npm install literally.css
```

Add `dist/css/literally.css` to the head tag or your page:

```html
<link rel="stylesheet" href="node_modules/literally.css/dist/css/literally.css" />
```

## FAQ

### Why not just use inline styles?

literally.css can be used together with inline styles. However, inline styles have higher specificity than styles defined in an external stylesheet. literally.css provides a way to apply styles with low specificity (a single class selector). On the other hand, the !important variants have higher specificity than inline styles and allow you to override them.

### Why not abbreviate class names?

Abbreviated classes like `my-3` or `d-inline` are commonly seen in popular utility libraries such as Boostrap, Tachyons, Tailwind, etc. In comparison, the "literal" approach taken by literally.css is arguably more readble and easier to learn, even if it is not as compact.
