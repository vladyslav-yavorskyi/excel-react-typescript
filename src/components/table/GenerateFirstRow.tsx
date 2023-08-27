import StaticCell from './StaticCell';

function GenerateFirstRow() {
  return (
    <div className="flex flex-row">
      <StaticCell width={50} content="" type={''} />
      {Array(26)
        .fill({})
        .map((_, i) => (
          <StaticCell
            width={100}
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
