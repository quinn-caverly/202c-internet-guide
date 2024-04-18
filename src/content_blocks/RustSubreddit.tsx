import RustSubredditImg from "./images/Rust-Subreddit.png";

export default function RustSubreddit() {
  return (
    <section id="rust-subreddit">
      <div className="Head-Section">
        <div className="Text-Content">
          <div className="Title-And-Link">
            <h2>The Rust Subreddit</h2>
            <a href="https://www.reddit.com/r/rust/">
              https://www.reddit.com/r/rust
            </a>
          </div>
          <p>
            The Rust subreddit is a vibrant online community where both
            newcomers and seasoned developers converge to discuss all things
            related to the Rust programming language. The platform offers a
            diverse mixture of content including announcements of new Rust
            versions, discussions about Rust libraries, and tutorials, making it
            an ideal place to learn about all things Rust.
          </p>
        </div>
        <div className="Image-Content">
          <img src={RustSubredditImg} alt="Rust Subreddit Homepage" />
        </div>
      </div>
      <div className="Subsection">
        <h3>Content and Scope</h3>
        <p>
          The subreddit hosts a broad range of discussions, from basic questions
          about the language to advanced topics regarding experimental features.
          The site often features ideas about best practices and design
          patterns.
        </p>
        <h3>Relevance and Utility</h3>
        <p>
          The Rust subreddit is a valuable resource for those who want to stay
          informed about the latest developments in Rust and for users seeking
          answers to specific questions that are too niche for standard search
          engines or generative AI tools. It is particularly useful for
          obtaining help with complex problems or gaining detailed explanations
          of intricate concepts.
        </p>
        <h3>Effective Use Tips</h3>
        <ul>
          <li>
            <strong> Check the Credibility of Users </strong> If a user on the
            site is providing an answer to a question, check if there are
            replies to their post pointing out an error or if their post has
            several downvotes. Also, check the previous posts from the
            individual’s account in order to ensure that they can be trusted.
          </li>
          <li>
            <strong>Search for Existing Threads: </strong> If a thread already
            exists about the topic, then it is easier to read the answers to
            that thread instead of waiting for answers to a new thread. Users on
            the site may also be rude if duplicate or redundant questions are
            asked.
          </li>
        </ul>
      </div>
    </section>
  );
}
