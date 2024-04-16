export default function RustBook() {
  return (
    <section id="rust-book">
      <h2>The Rust Book</h2>
      <p>
        The Rust Book is the definitive guide to Rust, authored by the Rust
        development team. Available for free online, it is continuously updated
        to reflect the latest capabilities of Rust, making it an indispensable
        resource for learning and mastering the language.
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
          specifics of Rust. It then delves into Rust-specific concepts like
          ownership, followed by discussions on more familiar topics such as
          structs and enums. Subsequently, the book provides quick overviews of
          various topics including generics, error handling, testing, and
          deploying applications. Moreover, it discusses in-depth concepts such
          as smart pointers, concurrency, object-oriented programming in Rust,
          and pattern matching. The book concludes with advanced topics like
          unsafe code, macros, and advanced closures, and finishes with a sample
          project involving a multi-threaded web server. Additionally, the book
          includes an appendix with various reference materials, including
          reserved keywords and lists of operators and types.
        </p>
        <h3>Relevance and Utility</h3>
        <p>
          The book offers a practical introduction to the language and can be
          read sequentially by newcomers to Rust. It is also relevant for
          experienced users seeking to refresh their knowledge on specific
          topics or reference materials that they will not have memorized, such
          as the list of reserved keywords.
        </p>
        <h3>Effective Use Tips</h3>
        <ul>
          <li>
            <strong>View on Your Favorite Device: </strong>
            The book is available
            as a web page, in print, or on an e-reader.
          </li>
          <li>
            <strong>Use a Rust Environment: </strong>
            To gain a deeper understanding of the concepts, walk through the
            examples in a Rust environment.
          </li>
        </ul>
      </div>
    </section>
  );
}
