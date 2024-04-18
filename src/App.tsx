import { useEffect } from "react";
import "./App.css";
import "./Content.css";
import "./TableOfContents.css";
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
          <h1 className="Toc-Header">Table of Contents</h1>
          <ul>
            <li>
              <a href="#abstract">Why Rust?</a>
            </li>
            <li>
              <a href="#usage">Guide Usage</a>
            </li>
            <li>
              <a href="#rust-book">Introductory Resources</a>
            </li>
            <li className="indented">
              <a href="#rust-book">The Rust Book</a>
            </li>
            <li className="indented">
              <a href="#rust-by-example">Rust By Example</a>
            </li>
            <li>
              <a href="#advent-of-code">Practice Resources</a>
            </li>
            <li className="indented">
              <a href="#advent-of-code">General Practice Problems</a>
            </li>
            <li className="indented">
              <a href="#rust-subreddit">Rust's Subreddit</a>
            </li>
            <li>
              <a href="#rust-api-documentation">Intermediate Resources</a>
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
              Rust is a programming language highly regarded for its focus on
              safety and performance. Its unique ownership model guarantees
              memory safety without the need for a garbage collector, making it
              an excellent choice for systems programming where efficiency is
              crucial. Rust also features powerful concurrency capabilities,
              enabling developers to write software that makes full use of
              modern multi-core processors without the common pitfalls of data
              races and other concurrency errors. Due to its unique features,
              learning Rust can provide a coder with an intuition of the
              underlying mechanisms in other programming languages, thereby
              increasing their general proficiency in coding.
            </p>
          </section>
          <section id="usage">
            <h2>Guide Usage</h2>
            <p>
              This guide is intended for readers who have moderate experience in
              at least one programming language and who have little to no
              exposure to the Rust programming language. The guide is organized
              chronologically with respect to the sequence in which resources
              should be tackled. It begins by presenting a couple of
              beginner-friendly resources created by the Rust development team.
              Subsequently, it introduces practice problems and a few resources
              that are helpful for addressing real-world problems using Rust.
              Finally, the guide concludes by presenting the technical Rust API
              Documentation and a book tailored for intermediate users of Rust
              who wish to hone their skills.
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
