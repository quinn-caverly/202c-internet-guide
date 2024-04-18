import RustByExampleImg from "./images/Rust-By-Example.png";

export default function RustByExample() {
  return (
    <section id="rust-by-example">
      <div className="Head-Section">
        <div className="Text-Content">
          <div className="Title-And-Link">
            <h2>Rust By Example</h2>
            <a href="https://doc.rust-lang.org/rust-by-example/">
              https://doc.rust-lang.org/rust-by-example
            </a>
          </div>
          <p>
            Rust by Example (RBE) is part of the official Rust documentation and
            offers a collection of runnable examples that illustrate various
            Rust concepts and standard libraries. RBE serves as a practical
            complement to the text-heavy Rust Book and is ideal for readers who
            prefer learning through practical examples rather than theoretical
            explanations.
          </p>
        </div>
        <div className="Image-Content">
          <img src={RustByExampleImg} alt="Rust By Example" />
        </div>
      </div>
      <div className="Subsection">
        <h3>Content and Scope</h3>
        <p>
          RBE encompasses a broad range of Rust programming techniques and
          concepts. It starts with the classic implementation of the "Hello
          World" program in Rust and covers basic concepts such as types,
          bindings, expressions, and primitives. It then progresses to
          intermediate topics like unsafe code, testing, and traits.
        </p>
        <h3>Relevance and Utility</h3>
        <p>
          RBE covers much of the same content as the Rust Book, but its runnable
          examples provide a welcome contrast to the Rust Book's detailed
          explanations. RBE can be used either in conjunction with or as an
          alternative to the Rust Book, depending on the learner's preference
          for practical versus theoretical learning.
        </p>
        <h3>Effective Use Tips</h3>
        <ul>
          <li>
            <strong> Experiment with Code: </strong>
            Modify the examples provided in RBE to gain a feel for how changes
            affect program behavior or compilation.
          </li>
          <li>
            <strong>Combine with the Rust Book: </strong>
            Use RBE alongside the Rust Book to maximize learning. If the Rust
            Book’s explanation of a topic feels insufficient, refer to the
            corresponding section in RBE.
          </li>
          <li>
            <strong>Utilize the Code Playgrounds: </strong>
            Embedded code sections can be run directly on the webpage,
            eliminating the need to set up a local Rust environment.
          </li>
        </ul>
      </div>
    </section>
  );
}
