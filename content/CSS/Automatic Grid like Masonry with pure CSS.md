Grid, that places items by density. Pure #css solution. Can be used with items, that take different amount of rows/columns.

```scss
$cell: 250px;
$gap: 20px;

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($cell, 1fr));
  grid-auto-rows: 256px;
  grid-auto-flow: row dense;
  grid-column-gap: $gap;
  grid-row-gap: $gap;
}
```

### Basic elements with double height or width

```scss
.h-2 { // takes 2 columns
	grid-column-end: span 2;
}

.v-2 { // takes 2 rows
	grid-row-end: span 2;
}
```

### Header, that fills all columns

```scss
.full-width {
  grid-row: 1 / 2; // height: 1 row
  grid-column: 1 / -1;
}
```

### Stamp element, that takes 3 rows in the top right corner

```scss
.top-right {
  grid-row: 1 / 3; // height here
  grid-column: -2 / -1; // width here
}
```
