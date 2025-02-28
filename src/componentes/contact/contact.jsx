import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import "./contact.css";
import Logo from "../../Assets/PalaceOfTriumphlogotransparente.png";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";
import ContactBG from "../../Assets/contact-bg.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_er4cf5v",
        "template_5v2jg4p",
        form.current,
        "PbnYJdk1g9qBq1Mz2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const variants = {
    initial: {
      y: 500,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1
      }
    }
  };

  const Mov = useRef();

  return (
    <div>
      <div id="universal3">
        <header className="mb-auto" id="header3">
          <div>
            <nav
              className="navbar navbar-expand-lg navbar-light bg-transparent"
              aria-label="Offcanvas navbar large"
            >
              <Link to="/" id="img-logo3">
                <motion.img
                  initial={{ opacity: 0, x: -250 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 2 }}
                  src={Logo}
                  width="142"
                  id="Logo3"
                  alt="logo"
                  className=""
                />
            </Link>

              <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#nav-principal"
                aria-controls="nav-principal"
                aria-label="Toggle navigation"
                id="B-Menu3"
              >
                <span className="spanS3" role="button">
                  <FaBars className="menu-icon3" aria-hidden="true" />
                </span>
              </button>

              <div
                className="offcanvas offcanvas-end backg-menu3"
                tabindex="-1"
                id="nav-principal"
                aria-labelledby="nav-principalLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="nav-principalLabel">
                    Palace of Triumph
                  </h5>
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="offcanvas-body">
                  <motion.ul
                    initial={{ opacity: 0, x: 250 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 2 }}
                    className="navbar-nav ms-auto bg-transparent"
                    id="menu3"
                  >
                    <li className="nav-item bg-transparent" id="link-1">
                      <Link
                        to="/"
                        id="Botoes-Menu"
                        className="nav-link active bg-transparent"
                      >
                        Início
                      </Link>
                    </li>

                    <li className="nav-item" id="link-2">
                      <Link
                        to="/Services"
                        id="Botoes-Menu"
                        className="nav-link"
                      >
                        Services
                      </Link>
                    </li>

                    <li className="nav-item" id="link-3">
                      <Link to="/Contact" id="Botoes-Menu" className="nav-link">
                        Contacts
                      </Link>
                    </li>
                  </motion.ul>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <div>
          <img src={ContactBG} id="Contact-BG" alt="ImageBg" />
        </div>

        <motion.div
          ref={Mov}
          id="contact"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>
              Join the Palace of Triumph!
            </motion.h1>
            <motion.div className="item1" variants={variants}>
              <h2>Mail</h2>
              <span>Contact@PalaceofTriumph.com</span>
            </motion.div>
            <motion.div className="item2" variants={variants}>
              <h2>Adress</h2>
              <span>Washington D.C</span>
            </motion.div>
            <motion.div className="item3" variants={variants}>
              <h2>Phone</h2>
              <span>+1 959 357 7532</span>
            </motion.div>
          </motion.div>

          <div className="formContact">
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              variants={variants}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <div className="input-group">
                <input type="text" name="user_name" required />
                <label for="">What is Your Name?</label>
              </div>

              <div className="input-group">
                <input type="tel" name="user_number" required />
                <label for="">What's Your Number?</label>
              </div>

              <div className="input-group">
                <input type="text" name="company_name" required />
                <label for="">What is the Company Name?</label>
              </div>

              <div className="input-group">
                <textarea name="message" required />
                <label for="">
                  What Areas does your Company Need assistance?
                </label>
              </div>

              <div id="" className="input-group txt-long2">
                <input type="text" name="best_hour" required />
                <label for="">
                  What is the Best Time to help you with your problem?
                </label>
              </div>

              <button type="submit">Send</button>
            </motion.form>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 9.5, duration: 2 }}
          className="footerThp"
        >
          <div className="footer-textThp">
            <p>
              Copyright &copy; 2025 by Palace of Triumph | All Rights Reserved
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}

export default Contact;
