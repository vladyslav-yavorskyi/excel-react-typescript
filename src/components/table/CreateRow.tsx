import { useAppSelector } from '../../hooks/redux';
import Cell from './Cell';
import StaticCell from './StaticCell';

function CreateRow({ index }: { index: number }) {
  const { colState, rowState } = useAppSelector((state) => state.cellReducer);

  return (
    <div className="flex flex-row">
      <StaticCell
        width={50}
        height={
          rowState[index as keyof typeof rowState]
            ? Number(rowState[index as keyof typeof rowState])
            : 25
        }
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
            width={
              colState[i as keyof typeof colState]
                ? Number(colState[i as keyof typeof colState])
                : 100
            }
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
