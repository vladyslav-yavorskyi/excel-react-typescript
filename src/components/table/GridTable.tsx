import CreateRow from './CreateRow';

function GridTable({ rowsCount }: { rowsCount: number }) {
  return (
    <div>
      {Array(rowsCount)
        .fill({})
        .map((_, i) => (
          <CreateRow index={i} key={i} />
        ))}
    </div>
  );
}

export default GridTable;
