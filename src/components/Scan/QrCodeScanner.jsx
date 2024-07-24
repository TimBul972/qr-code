//import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import { QrReader } from "react-qr-reader";
import s from "./QrCodeScanner.module.css"; // потому что s -> это объект из модуля!

import { SCAN_DATA } from "../../constans";

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result?.text);
    // достаем предыдущее значение, сразу преобразуем в массив
    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
    // console.log("Предыдущее значение: ", prevData);

    // храним  массив отсканированных строк - Преобразуем правильно в строку
    // local storage работает только со строкой!
    // создаем новый массив, положили значение из старого и добавили новое (спред-оператор)
    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result?.text])
    );
  };

  return (
    <div className={s.container}>
      <QrReader
        onResult={scanHandler}
        containerStyle={{ width: "300px" }}
        scanDelay={1000}
      />
      <p className={s.result}>{scanned}</p>
    </div>
  );
};
