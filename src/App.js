import "./App.css";
import CaesarCipher from "./components/caesarCipher";

function App() {
  return (
    <div className="App text-center">
      <main class="form-signin">
        <h1>Caesar Cipher Encrypter</h1>
        <CaesarCipher />
      </main>
    </div>
  );
}

export default App;
