interface IterableRenderingProps<T> {
  iterable: T[];
  Component: (item: T, idx: number) => JSX.Element;
  idx: keyof T;
}

const ArrayRendering = <T,>({
  iterable,
  Component,
  idx,
}: IterableRenderingProps<T>) => {
  if (iterable.length === 0) {
    return null;
  }
  return (
    <>
      {iterable.map((item) => (
        <Component {...item} key={item[idx] as string} />
      ))}
    </>
  );
};
