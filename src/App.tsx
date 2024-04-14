import "./App.css";
import Rustacean from "./Rustacean";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rustacean />
        <h1>Learning the Rust Programming Language</h1>
        <h3 className="Disclaimer">not affiliated with the Rust Foundation</h3>
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
            <h2>The Rust Book</h2>
            <p>Description of "The Rust Book". (Original content)</p>
            <div className="Subsection">
              <h3>Content and Scope</h3>
              <p>
                Details the content scope covered in "The Rust Book" section.
              </p>
              <h3>Relevance and Utility</h3>
              <p>Discusses the relevance and utility of "The Rust Book".</p>
              <h3>Effective Use Tips</h3>
              <p>Provides usage tips for "The Rust Book".</p>
            </div>
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
      </div>
    </div>
  );
}

export default App;
