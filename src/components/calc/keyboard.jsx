// App's External Imports
import { FiDelete } from "react-icons/fi";

const Keyboard = ({
  delete_digit,
  calculate_result,
  handle_number_key,
  clear_calculation,
  handle_function_key,
}) => {
  return (
    <div className="border-t-2 border-black border-dashed px-3 flex flex-col gap-5 py-5 font-medium text-xl">
      <div className="row text-black flex items-center justify-between">
        <div
          className="cell bg-[#d2e6f9]"
          onClick={() => {
            clear_calculation();
          }}
        >
          AC
        </div>
        <div
          className="cell bg-[#fdcfcb]"
          onClick={() => {
            delete_digit();
          }}
        >
          <FiDelete size={23} />
        </div>
        <div
          className="cell bg-[#d2e6f9]"
          onClick={() => {
            handle_function_key("%");
          }}
        >
          %
        </div>
        <div
          className="cell bg-[#d2e6f9]"
          onClick={() => {
            handle_function_key("/");
          }}
        >
          /
        </div>
      </div>

      <div className="row text-black flex items-center justify-between">
        <div
          className="cell bg-white"
          onClick={() => {
            handle_number_key("7");
          }}
        >
          7
        </div>
        <div
          className="cell bg-white"
          onClick={() => {
            handle_number_key("8");
          }}
        >
          8
        </div>
        <div
          className="cell bg-white"
          onClick={() => {
            handle_number_key("9");
          }}
        >
          9
        </div>
        <div
          className="cell bg-[#d2e6f9]"
          onClick={() => {
            handle_function_key("*");
          }}
        >
          X
        </div>
      </div>

      <div className="row text-black flex items-center justify-between">
        <div
          className="cell bg-white"
          onClick={() => {
            handle_number_key("4");
          }}
        >
          4
        </div>
        <div
          className="cell bg-white"
          onClick={() => {
            handle_number_key("5");
          }}
        >
          5
        </div>
        <div
          className="cell bg-white"
          onClick={() => {
            handle_number_key("6");
          }}
        >
          6
        </div>
        <div
          className="cell bg-[#d2e6f9]"
          onClick={() => {
            handle_function_key("-");
          }}
        >
          —
        </div>
      </div>

      <div className="row text-black flex items-center justify-between">
        <div
          className="cell bg-white"
          onClick={() => {
            handle_number_key("1");
          }}
        >
          1
        </div>
        <div
          className="cell bg-white"
          onClick={() => {
            handle_number_key("2");
          }}
        >
          2
        </div>
        <div
          className="cell bg-white"
          onClick={() => {
            handle_number_key("3");
          }}
        >
          3
        </div>
        <div
          className="cell bg-[#d2e6f9]"
          onClick={() => {
            handle_function_key("+");
          }}
        >
          ＋
        </div>
      </div>

      <div className="row text-black flex items-center justify-between">
        <div
          className="cell bg-white"
          onClick={() => {
            handle_number_key("0");
          }}
        >
          0
        </div>
        <div
          className="cell bg-white"
          onClick={() => {
            handle_number_key(".");
          }}
        >
          .
        </div>
        <div
          className="cell bg-white"
          onClick={() => {
            handle_number_key("00");
          }}
        >
          00
        </div>
        <div
          className="cell bg-[#aed4fd]"
          onClick={() => {
            calculate_result("explicit");
          }}
        >
          =
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
