import Cell from './Cell';

function GenerateFirstRow() {
  return (
    <div className="flex flex-row">
      <Cell id={''} width={50} content="" />
      {Array(26)
        .fill({})
        .map((_, i) => (
          <Cell
            id={String.fromCharCode(65 + i)}
            width={100}
            content={String.fromCharCode(65 + i)}
            type="col"
            data_col={String.fromCharCode(65 + i)}
            key={String.fromCharCode(65 + i)}
          />
        ))}
    </div>
  );
}

export default GenerateFirstRow;
