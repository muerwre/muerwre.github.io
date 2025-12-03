To test if browser supports some #CSS rules, do following:

```css
@supports (backdrop-filter: blur(5px)) {
	backdrop-filter: blur(5px);
}
```

This `@mixin` will only apply rule if browser support backdrop filtering:

```scss
@mixin can_backdrop {
  @supports (
    (-webkit-backdrop-filter: blur(5px)) or 
    (backdrop-filter: blur(5px))
  ) {
    @content;
  }
}
```
