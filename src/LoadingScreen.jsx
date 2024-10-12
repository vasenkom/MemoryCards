import Spin from "./assets/spin.svg";
import "./css/App.css";
import "./css/index.css";

export function LoadingScreen() {
  return (
    <div className="loadingScreen">
      <img src={Spin} alt="spin" />
      <p>Wait a sec!</p>
    </div>
  );
}
