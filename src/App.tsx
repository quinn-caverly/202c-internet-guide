import "./App.css";
import AdventOfCode from "./content_blocks/AdventOfCode";
import RustAPIDocumentation from "./content_blocks/RustAPIDocumentation";
import RustBook from "./content_blocks/RustBook";
import RustByExample from "./content_blocks/RustByExample";
import RustForRustaceans from "./content_blocks/RustForRustaceans";
import RustSubreddit from "./content_blocks/RustSubreddit";
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
              <a href="#abstract">Why Rust?</a>
            </li>
            <li className="indented">
              <a href="#rust-book">The Rust Book</a>
            </li>
            <li className="indented">
              <a href="#rust-by-example">Rust By Example</a>
            </li>
            <li className="indented">
              <a href="#advent-of-code">General Practice Problems</a>
            </li>
            <li className="indented">
              <a href="#rust-subreddit">Rust's Subreddit</a>
            </li>
            <li className="indented">
              <a href="#rust-api-documentation">Rust API Documentation</a>
            </li>
            <li className="indented">
              <a href="#rust-for-rustaceans">Rust For Rustaceans</a>
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
              comfortable in the Rust programming language.
            </p>
          </section>
          <RustBook />
          <RustByExample />
          <AdventOfCode />
          <RustSubreddit />
          <RustAPIDocumentation />
          <RustForRustaceans />
        </main>
      </div>
    </div>
  );
}

export default App;
