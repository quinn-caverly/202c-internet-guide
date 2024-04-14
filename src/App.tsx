import "./App.css";
import Rustacean from "./Rustacean";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rustacean />
        <h1>Learning the Rust Programming Language</h1>
        <h2 className="Sub-title">by Quinn Caverly</h2>
      </header>
      <div className="App-body">
        <nav className="TableOfContents">
          <ul>
            <li>
              <a href="#section1">Why Rust?</a>
            </li>
            <li className="indented">
              <a href="#section1">Section 1</a>
            </li>
            <li className="indented">
              <a href="#section2">Section 2</a>
            </li>
            <li className="indented">
              <a href="#section3">Section 3</a>
            </li>
            <li className="indented">
              <a href="#section4">Section 4</a>
            </li>
          </ul>
        </nav>
        <main className="Content">
          <section id="abstract">
            <h2>Why Rust?</h2>
            <p>
              Rust is a programming language which is increasing in popularity
              due to its safety advantages over industry standard languages like
              C and C++. In fact, via a White House report regarding software
              safety and security, the US Government recommends using Rust as an
              alternative to C and C++ in situations where software security is
              imperative. An increase in usage of the Rust language suggests a
              potentially financially lucrative situation for those who can
              effectively write code in Rust. This guide will put forward and
              describe several resources which can help a coder become
              comfortable in the Rust programming language. Resources which are
              helpful for gaining an introduction to Rust will be marked in
              green and resources for intermediate users will be marked in
              purple on the table of contents.
            </p>
          </section>
          <section id="section1">
            <h2>Section 1</h2>
            <p>Content for Section 1...</p>
          </section>
          <section id="section2">
            <h2>Section 2</h2>
            <p>Content for Section 2...</p>
          </section>
          <section id="section3">
            <h2>Section 3</h2>
            <p>Content for Section 3...</p>
          </section>
          <section id="section4">
            <h2>Section 4</h2>
            <p>Content for Section 4...</p>
          </section>
        </main>
      </div>{" "}
    </div>
  );
}

export default App;
