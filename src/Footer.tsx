import "./Footer.css";

export default function Footer() {
  return (
    <footer className="App-footer">
      <div className="Footer-Section">
        <p>
          Created by Quinn Caverly for the English 202C course
          at the Pennsylvania State University College of Engineering:
          "Instruction Set Guide", April 2024.
        </p>
        <p>Made with React, TypeScript, and CSS. Hosted on Github Pages.</p>
        <p>
          Source Code:{" "}
          <a href="https://github.com/quinn-caverly/202c-internet-guide/tree/master">
            https://github.com/quinn-caverly/202c-internet-guide/tree/master
          </a>
        </p>
      </div>
    </footer>
  );
}
