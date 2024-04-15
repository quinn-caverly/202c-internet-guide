import React from "react";

export default function RustBook() {
  return (
    <section id="rust-book">
      <h2>The Rust Book</h2>
      <p>
        The Rust book is part of the official documentation for the Rust
        programming language and is designed to be friendly and approachable. It
        provides numerous walkthroughs and examples and is widely considered the
        best resource for gaining an introduction to Rust.
      </p>
      <h3>
        <a href="https://doc.rust-lang.org/stable/book/">
          Link to the Rust Book
        </a>
      </h3>
      <div className="Subsection">
        <h3>Content and Scope</h3>
        <p>
          The book begins with reviewing some common programming concepts like
          variables and mutability in order to relate these concepts to the
          specifics of Rust. Then, it goes into the Rust-specific concept of
          ownership and then touches on the common concepts of structs and
          enums. Next, the book provides quick overviews of various topics such
          as generics, error handling, testing, and deploying applications. In
          addition, the book discusses more in-depth concepts such as smart
          pointers, concurrency, object orientedness in Rust, patern matching.
          To wrap up, the book covers advanced topics such as unsafe code,
          macros, and advanced closures and finishes with a sample project of a
          multi-threaded web server. Finally, the book includes an Appendix with
          various reference pages including things such as reserved key words
          and lists of operators and types.
        </p>
        <h3>Relevance and Utility</h3>
        <p>Discusses the relevance and utility of "The Rust Book".</p>
        <h3>Effective Use Tips</h3>
        <p>Provides usage tips for "The Rust Book".</p>
      </div>
    </section>
  );
}
