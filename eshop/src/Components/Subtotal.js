// import React from "react";
// import "../Styles/Subtotal.css";
// import CurrencyFormat from "react-currency-format";

// function Subtotal() {
//   return (
//     <div className="subtotal">
//       <CurrencyFormat
//         renderText={(value) => {
//           <>
//             <p>
//               Subtotal (0 items) : <strong>20Aed</strong>
//             </p>
//             <small className="subtotal_gift">
//               <input type="checkbox" />
//               This order contains a Gift
//             </small>
//           </>;
//         }}
//         decimal
//         scale={2}
//         value={0}
//         display={"text"}
//         thousandSeparator={true}
//       />
//     </div>
//   );
// }

// export default Subtotal;
import React from "react";
import "../Styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal (0 items): <strong>0</strong>
              </p>
              <small className="subtotal_gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
