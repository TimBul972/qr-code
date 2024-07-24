import { QRCodeSVG } from "qrcode.react";
import { SCAN_DATA } from "../constans";

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
  console.log(data);

  return (
    <div>
      {data.map((text) => {
        return (
          <p key={text}>
            {text}
            <QRCodeSVG value={text} size={100} />
          </p>
        );
      })}
    </div>
  );
};
