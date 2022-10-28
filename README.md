# really.css

![](https://img.badgesize.io/xenyo/really/main/dist/css/really.css.svg?compression=gzip)


A really simple CSS utility library.

## Features

### Literal, one-to-one mapping from classes to styles

All classes in really.css map exactly to a CSS property and value, with `!important`.

For example, `display-none` applies `display: none !important`, `margin-0` applies `margin: 0 !important` and so on.

See [Class Reference](class-reference.md) for the full list of classes.

### Trivial values only

By only including trivial values such as 0 and none. really.css avoids making any assumptions about your design system.
