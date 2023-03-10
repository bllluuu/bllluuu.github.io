import React from "react";
import "./styles/footer.css";

function Footer() {
  return (
    <footer>
      {/* <hr /> */}
      Contact
      <div>
        <a href="https://www.linkedin.com/in/oliver-bluff-4ba183196/" target="_blank">
          <code>LinkedIn</code>
        </a>
        <br/>
        <a href="https://github.com/bllluuu" target="_blank">
          <code>GitHub</code>
        </a>
        <p>© 2023 Oliver Bluff</p>
      </div>
    </footer>
  );
}

export default Footer;
