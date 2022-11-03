Sometimes you need to keep scroll position of `FlatList` in React Native after some user interactions.

```typescript
// interact() is doing some stuff, that changes FlatList scroll size
type Props = { interact: () => void; }

const SomeList: FC<Props> = ({ interact }) => {
  const scrollPosition = useRef(0);
  const scrollHeight = useRef(0);
  
  // set it to `true` before interaction and back to `false` right after
  const shouldKeepScrollPosition = useRef(false);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      scrollPosition.current = event.nativeEvent.contentOffset.y;
    },
    [],
  );

  const onContentSizeChange = useCallback((_: number, h: number) => {
    if (!shouldKeepScrollPosition.current) {
      scrollHeight.current = h;
      return;
    }

    ref.current?.scrollToOffset({
      offset: scrollPosition.current + (h - scrollHeight.current),
      animated: false,
    });

    scrollHeight.current = h;
  }, []);

  // onInteraction wraps interaction to preserve scroll position
  const onInteraction = useCallback(
    () => {
      shouldKeepScrollPosition.current = true;

      setTimeout(() => {
        interact();
      }, 0);

      setTimeout(() => {
        shouldKeepScrollPosition.current = false;
      }, 500);
    },
    [setSelectedSubThemes],
  );
  
  return (
    <FlatList
      // ...required FlatList options
      ref={ref}
      onContentSizeChange={onContentSizeChange}
      onRefresh={onRefresh}
      onScroll={onScroll}
    />
  )
}