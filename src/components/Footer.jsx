export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <h2 className="footer-logo">BEA.</h2>

        <p className="footer-text">
          Building solutions through engineering,
          AI, and modern web development.
        </p>

        <div className="footer-links">
          <a
            href="YOUR_GITHUB_LINK"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="YOUR_LINKEDIN_LINK"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Bakr Achkar.
          All rights reserved.
        </p>

       

      </div>
    </footer>
  );
}
