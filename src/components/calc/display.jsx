const Display = ({
  result,
  operator,
  calculation,
  primary_operand,
  secondary_operand,
}) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="text-gray-500 font-medium text-xl md:text-2xl mx-5 my-4 overflow-scroll overflow-x-hidden h-7">
        {calculation}
      </div>

      {result ? (
        <div className="text-black font-medium text-5xl md:text-6xl text-right m-3">
          = {result}
        </div>
      ) : (
        <div className="text-black font-medium text-5xl md:text-6xl text-right m-3">
          {operator
            ? secondary_operand.length === 0
              ? "0"
              : secondary_operand
            : primary_operand.length === 0
            ? "0"
            : primary_operand}
        </div>
      )}
    </div>
  );
};

export default Display;
