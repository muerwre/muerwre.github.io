Say, we need to color `n` items by specific colors, which depend on its position. #SCSS supports [iteration over lists](https://sass-lang.com/documentation/at-rules/control/each) for that purposes:

```scss
@mixin color-per-child($colors) {
  @each $color in $colors {
    &:nth-child(#{index(($colors), ($color))}) {
      color: $color;
    }
  }
}
```

Usage is simple:

```scss
.item {
  @include color_per_child((#ded187, #dbde87, #bade87, #9cde87, #87deaa));
}
```