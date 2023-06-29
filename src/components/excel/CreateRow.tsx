import Cell from './Cell';

function CreateRow({ index }: { index: number }) {
  return (
    <div className="flex flex-row">
      <Cell id={index} width={50} content={String(index)} />
      {Array(26)
        .fill({})
        .map((_, i) => (
          <Cell
            id={`${index}:${i}`}
            width={100}
            content={' '}
            key={`${index}:${i}`}
          />
        ))}
    </div>
  );
}

export default CreateRow;
