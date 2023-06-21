function GenerateFirstRow() {
  return (
    <div className="flex absolute overflow-x-auto">
      <div className=" text-center w-[70px]  border-2 bg-gray-200 border-gray-300"></div>
      {Array(26)
        .fill({})
        .map((d, i) => (
          <div className=" text-center w-[100px] border-solid border-l-0 border-2 border-gray-300">
            {String.fromCharCode(65 + i)}
          </div>
        ))}
    </div>
  );
}

export default GenerateFirstRow;
