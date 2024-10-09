export function FAQ_MemoRise({ setContent }) {
  return (
    <div>
      <p>
        MemoRise is a mini project made by{" "}
        <span className="green">vasenkom</span>.
      </p>
      <br />
      <p>
        On this web page you can play a{" "}
        <span className="purple">memorisation game</span> or read a{" "}
        <span className="orange">random cat fact</span>.
      </p>
      <br />
      <ul className="listOfOptions">
        <li>How to play a memo game</li>
        <li>
          Check{" "}
          <a className="green" href="https://www.example.com">
            vasenkom
          </a>{" "}
          github
        </li>
        <button onClick={() => setContent(null)}>
          Get back to main screen
        </button>
      </ul>
    </div>
  );
}
