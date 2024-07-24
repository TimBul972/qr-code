// export const GenerateHistory = () => {
//   return <div>Generate History</div>;
// };

import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "../constans";

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
  console.log(data);

  return (
    <div>
      {data.map((text) => {
        return (
          <p key={text}>
            {text}
            <QRCodeSVG value={text} size={80} />
          </p>
        );
      })}
    </div>
  );
};
