import StaticCell from './StaticCell';
import { useAppSelector } from '../../hooks/redux';

function GenerateFirstRow() {
  const { colState } = useAppSelector((state) => state.cellReducer);

  return (
    <div className="flex flex-row">
      <StaticCell width={50} height={25} content="" type={''} />
      {Array(26)
        .fill({})
        .map((_, i) => (
          <StaticCell
            width={
              colState[i as keyof typeof colState]
                ? Number(colState[i as keyof typeof colState])
                : 100
            }
            height={25}
            content={String.fromCharCode(65 + i)}
            type="col"
            data_col={i}
            key={String.fromCharCode(65 + i)}
          />
        ))}
    </div>
  );
}

export default GenerateFirstRow;
