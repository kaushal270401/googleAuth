import {signIn} from "./firebase"

function App() {
  return (
    <div className="App">
      <button onClick={signIn}>sign in with google</button>
      <h1>{localStorage.getItem("name")}</h1>
      <p>{localStorage.getItem("email")}</p>
      <img src={localStorage.getItem("image")} alt="" />
    </div>
  );

  }
export default App;
