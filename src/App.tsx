import { useEffect } from "react";
import "./App.css";
import AdventOfCode from "./content_blocks/AdventOfCode";
import RustAPIDocumentation from "./content_blocks/RustAPIDocumentation";
import RustBook from "./content_blocks/RustBook";
import RustByExample from "./content_blocks/RustByExample";
import RustForRustaceans from "./content_blocks/RustForRustaceans";
import RustSubreddit from "./content_blocks/RustSubreddit";
import Rustacean from "./Rustacean";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.getElementById("sidebar");
      const header = document.querySelector("header");

      if (!sidebar || !header) {
        console.error("Sidebar or header element is not found!");
        return;
      }

      if (window.pageYOffset > header.offsetHeight) {
        sidebar.style.position = "fixed";
        sidebar.style.top = "0";
        sidebar.style.bottom = "0";
      } else {
        sidebar.style.position = "absolute";
        sidebar.style.top = "80vh";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Rustacean />
        <h1>Learning the Rust Programming Language</h1>
        <h3 className="Disclaimer">not affiliated with the Rust Foundation</h3>
        <h2 className="Sub-title">by Quinn Caverly</h2>
      </header>
      <div className="App-body">
        <nav id="sidebar" className="TableOfContents">
        <h1 className="Toc-Header">Contents</h1>
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
              C and C++.
            </p>
            <h2>Who This Guide is For</h2>
            <p>
              This guide is for coders who already already comfortable writing
              code in at least one programming language. Readers should have a
              strong understanding of the fundamentals of programming.
            </p>
            <h2>How to Use This Guide</h2>
            <p></p>
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
