import "./styles.css";
import Article from "./Article";

console.log("aaa");
console.log("aaa");
console.log("aaa");

export default function App() {
  return (
    <div className="App">
      <Article
        title={"タイトルをpropsで渡してみる"}
        content={"propsのデータ受け渡しについて"}
      />
      <Article title={"再利用してみる"} content={"違うデータを入力できる"} />
    </div>
  );
}
