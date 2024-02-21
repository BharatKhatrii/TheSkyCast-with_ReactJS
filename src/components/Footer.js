import React from "react";

export default function Footer() {
  return (
    <footer>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <div>
        <span>Connect With Us :</span>
      </div>

      <span id="contact">
        <a
          href="https://www.linkedin.com/in/bharat-771-khatri/"
          target="_blank"
          rel="noreferrer"
          title="Linkedin"
        >
          <i className="fa fa-linkedin"> </i>
        </a>

        <a
          href="https://github.com/BharatKhatrii"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <i className="fa fa-github"> </i>{" "}
        </a>

        <a
          href="https://www.instagram.com/_btw_itsbharat_/"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          {" "}
          <i className="fa fa-instagram"> </i>{" "}
        </a>
      </span>

      <div>
        <span id="copyright">Copyright &copy; 2024; Designed by</span>
        <span id="copyright_name"> BHARAT</span>
      </div>
    </footer>
  );
}
