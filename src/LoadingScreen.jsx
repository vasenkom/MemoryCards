import Spin from "./assets/spin.svg";

export function LoadingScreen() {
  return (
    <div className="loadingScreen">
      <img src={Spin} alt="spin" />
      <p>wait a sec!</p>
    </div>
  );
}
