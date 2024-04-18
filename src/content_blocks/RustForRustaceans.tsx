import RustForRustaceansIMG from "./images/RustForRustaceans.png";

export default function RustForRustaceans() {
  return (
    <section id="rust-for-rustaceans">
      <div className="Head-Section">
        <div className="Text-Content">
          <div className="Title-And-Link">
            <h2>Rust For Rustaceans Book</h2>
            <a href="https://rust-for-rustaceans.com/">
              https://rust-for-rustaceans.com
            </a>
          </div>
          <p>
            Rust for Rustaceans is a specialized book written by Jon Gjengset,
            an expert in the Rust community. It provides readers who are already
            experienced with Rust with a deeper dive into the practical
            applications and optimizations that Rust enables.
          </p>
        </div>
        <div className="Image-Content">
          <img src={RustForRustaceansIMG} alt="Rust For Rustaceans Cover" />
        </div>
      </div>
     <div className="Subsection">
        <h3>Content and Scope</h3>
        <p>
          Rust for Rustaceans is comprehensive and detailed, covering everything
          from effective API design to mastering generics and lifetimes. Each
          chapter is filled with practical examples and in-depth discussions on
          the theoretical underpinnings of these concepts, illustrating how Rust
          can be used to solve complex problems in software development.
        </p>
        <h3>Relevance and Utility</h3>
        <p>
          The book is particularly suitable for intermediate to advanced Rust
          developers who want to leverage Rust’s features to write high-quality,
          performant, and maintainable code. This book is a good next step after
          the concepts of the official Rust Book and RBE have been mastered.
        </p>
        <h3>Effective Use Tips</h3>
        <ul>
          <li>
            <strong>Reference the Rust Book: </strong> When reading Rust for
            Rustaceans, be sure to refresh on concepts covered in the Rust Book
            in order to fully grasp the chapters of Rust for Rustaceans.
          </li>
          <li>
            <strong>Review Chapters: </strong> Due to the advanced nature of the
            topics, reviewing each chapter after a first read can be very
            beneficial.
          </li>
        </ul>
      </div>
    </section>
  );
}
