import RustDocs from "./images/Rust-Docs.png";

export default function RustAPIDocumentation() {
  return (
    <section id="rust-api-documentation">
      <div className="Head-Section">
        <div className="Text-Content">
          <div className="Title-And-Link">
            <h2>Rust API Documentation</h2>
            <a href="https://doc.rust-lang.org/beta/std/index.html">
              https://doc.rust-lang.org/beta/std/index.html
            </a>
          </div>
          <p>
            The Rust API Documentation is an indispensable resource for
            developers working with Rust, providing detailed information about
            the Rust standard library. It essentially contains all information
            which could be needed about the specifics of the Rust language.
          </p>
        </div>
        <div className="Image-Content">
          <img src={RustDocs} alt="Rust Docs" />
        </div>
      </div>
      <div className="Subsection">
        <h3>Content and Scope</h3>
        <p>
          The docs provide detailed descriptions of all functionalities provided
          by the Rust standard library. Each entry contains signatures,
          attributes, and examples which show the real world implementation. The
          docs also provide information about the stability and deprecation of
          features.
        </p>
        <h3>Relevance and Utility</h3>
        <p>
          The docs are relevant for coders who are actively developing programs
          in Rust. For beginners, it serves as a gateway to understanding the
          intricate details of Rust's various components. For seasoned
          developers, it is a daily reference tool that ensures adherence to
          best practices and optimal usage of the language’s features.
        </p>
        <h3>Effective Use Tips</h3>
        <ul>
          <li>
            <strong>Use the Search Feature: </strong> Given the extensive
            information available, use the search function to quickly find
            specific concepts instead of navigating through links.
          </li>
          <li>
            <strong>Check Version Notes: </strong> Always check if a feature is
            stable or still experimental before implementing it in your project.
            This ensures compatibility and reliability.
          </li>
          <li>
            <strong> Make Regular Visits: </strong> Regularly visit the docs to
            learn about previously shunned parts of the language and refresh on
            difficult concepts.
          </li>
        </ul>
      </div>
    </section>
  );
}
