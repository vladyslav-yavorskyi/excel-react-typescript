import Cell from './Cell';
import StaticCell from './StaticCell';

function CreateRow({ index }: { index: number }) {
  return (
    <div className="flex flex-row">
      <StaticCell
        width={50}
        content={String(index)}
        type="row"
        data_row={index}
        key={index}
      />
      {Array(26)
        .fill({})
        .map((_, i) => (
          <Cell
            id={`${index}:${i}`}
            width={100}
            content={' '}
            data_col={i}
            data_row={index}
            key={`${index}:${i}`}
          />
        ))}
    </div>
  );
}

export default CreateRow;
