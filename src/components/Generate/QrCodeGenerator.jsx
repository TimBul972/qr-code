import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

import { GENERATE_DATA } from "../../constans";

import s from "./qrCodeGen.module.css"; // s это объект!

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("");

  const [result, setResult] = useState("");

  // обработчик кнопки "сгенерировать QR-code"
  // сразу обращаемся к локал_сторедж
  const onClickHandler = () => {
    // получили старое значение из local storage
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
    // записываем новое значение
    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

    setResult(value);
    setValue("");
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };

  // console.log(result);

  return (
    <div className={s.container}>
      <input
        type="text"
        value={value}
        placeholder="Введите текст..."
        onChange={onChangeHandler}
        className={s.input}
      />
      <button type="button" className={s.button} onClick={onClickHandler}>
        Генерация QR-code
      </button>

      {result !== "" && (
        <div className={s.qrWrapper}>
          <QRCodeSVG value={result} size={200} />
        </div>
      )}
    </div>
  );
};

// либо так
// export {QrCodeGenerator}
