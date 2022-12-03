import { ChangeEvent } from "react";

function App() {
  const readFiles = (event: ChangeEvent<HTMLInputElement>) => {
    // eventから選択した画像を取得する
    const fileList: FileList = event.target.files!;

    // FileList型のオブジェクト配列を配列に整形する
    const arrFiles = Array.from(fileList);

    arrFiles.map((file) => {
      // FileReader作成
      const reader = new FileReader();

      // バイナリ文字列に変換;
      reader.readAsBinaryString(file);

      // base64のデータURLに変換
      // reader.readAsDataURL(file);

      // ArrayBufferとしてデータを読む
      // reader.readAsArrayBuffer(file)

      // 文字列(utf-8)としてデータを読む
      // reader.readAsText(file)

      // fileの読み込みが完了したらonloadが発火する
      reader.onload = () => {
        const success = reader.result;

        // バイナリ文字列が出力される
        console.log({ success });
      };

      reader.onerror = () => {
        const error = reader.error;

        // 読み込みに失敗した時に出力される
        console.log({ error });
      };
    });
  };

  return <input multiple type="file" onChange={readFiles} />;
}

export default App;
