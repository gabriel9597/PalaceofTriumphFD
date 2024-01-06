import React from 'react';
import { Link } from "react-router-dom";
import "./services.css";
import Logo from "../../Assets/PalaceOfTriumphlogotransparente.png";
import { FaBars, FaArrowUpShortWide } from "react-icons/fa6";
import ImageBg from "../../Assets/bannerservpot2.jpg";
import ImageConsul from "../../Assets/imageconsultpot1.jpg";
import ImageAnaCorp from "../../Assets/imageanalisecorppot1.jpg";
import ImageMagControl from "../../Assets/imagemagcontrolpot1.jpg";
import PalaceImage from "../../Assets/palace1.PNG";
import { motion } from "framer-motion";

import {
  BsPcDisplayHorizontal,
  BsGraphUpArrow,
  BsFillBuildingsFill
} from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TbReport } from "react-icons/tb";
import { MdPeople } from "react-icons/md";
import { FiTarget } from "react-icons/fi";



function Services() {
  return (
    <div id="universal2">
      <header className="mb-auto" id="header2">
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-light bg-transparent"
            aria-label="Offcanvas navbar large"
          >
            <Link to="/" id="img-logo2">
              <motion.img
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 2 }}
                src={Logo}
                width="142"
                id="Logo2"
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
              id="B-Menu2"
            >
              <span className="spanS" role="button">
                <FaBars className="menu-icon2" aria-hidden="true" />
              </span>
            </button>

            <div
              className="offcanvas offcanvas-end backg-menu2"
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
                  id="menu2"
                >
                  <li className="nav-item bg-transparent" id="link-1">
                    <Link
                      to="/"
                      id="Botoes-Menu-2"
                      className="nav-link active bg-transparent"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item" id="link-2">
                    <Link
                      to="/Services"
                      id="Botoes-Menu-2"
                      className="nav-link"
                    >
                      Services
                    </Link>
                  </li>

                  <li className="nav-item" id="link-3">
                    <Link to="/Contact" id="Botoes-Menu-2" className="nav-link">
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
        <img src={ImageBg} id="image-BG" alt="ImageBg" loading="lazy" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 250 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 3 }}
        class="px-4 py-5 my-5 text-center"
      >
        <h1 id="Services-Title" className="display-5 fw-bold ">
          What services do we provide to take your company to the next level?
        </h1>
        <div className="col-lg-6 mx-auto">
          <p id="Service-Paragraph" className="lead mb-4">
            With the Palace of Triumph, your venture will achieve the recognition
            and status of the most prestigious companies in the world and still
            have their financial success, But how can we help you with this, you
            must be asking yourself, right? We will now explain how our services
            will serve as solutions to your business problems, Check it out!
          </p>

          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button id="E-button" type="button" class="btn btn-lg px-4 gap-3">
              <Link className="Exp-Link" to="/Contact">
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </motion.div>

      <div class="d-md-flex flex-md-equal w-100 my-md-3">
        <motion.div
          initial={{ opacity: 0, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3, duration: 2 }}
          id="div-consult"
          class="bg-body-tertiary pt-3 px-1 pt-md-5 px-md-5 text-center overflow-hidden"
        >
          <div class="my-3 py-3">
            <h2 class="display-5 overflow-hidden">Consultancy</h2>
            <p class="lead">
              With our consultancy you will have all the support you need to
              solve your problem and clarify your doubts with our financial and
              performance experts.
            </p>
          </div>
          <div id="consultory" class="bg-body-tertiary shadow-sm mx-auto">
            <img
              id="services-images1"
              src={ImageConsul}
              alt="image-consulting"
              className="img-fluid"
            />

            <h4 className="overflow-hidden">What we will be make?</h4>
            <ul>
              <li>
                {" "}
                <span>-</span> We Will Understand the Problems Presented
              </li>
              <li className="li2">
                {" "}
                <span>-</span> We Will Consult Our Experts
              </li>
              <li className="li3">
                <span>-</span> We Will Produce a Report Setting out the Main
                Points Consulted
              </li>
              <li className="li4">
                {" "}
                <span>-</span> We will Clarify Your Doubts
              </li>
              <li className="li5">
                {" "}
                <span>-</span> And We Will Provide Guidance to Solve the
                problems
              </li>
            </ul>
            <button id="service-buttonF" className="btn">
              <Link className="service-link" to="/Contact">
                Contact Us
              </Link>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5, duration: 3 }}
          id="div-corpanaly"
          class="bg-body-tertiary pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
        >
          <div class="my-3 p-3">
            <h2 class="display-5 overflow-hidden">Corporate Analysis</h2>
            <p class="lead">
              In our Corporate Analysis, we will hold a meeting with your
              company's management to find out what objectives and goals have
              already been achieved and what your future goals and objectives
              are. Once this is done, we will understand much better how we can
              help you improve to conquer them!
            </p>
          </div>
          <div></div>
          <div id="CorporateAnalysis" class="bg-dark shadow-sm mx-auto">
            <img
              id="services-images2"
              src={ImageAnaCorp}
              alt="image-corporateanalysis"
              className="img-fluid"
            />

            <h4 className="overflow-hidden">What we will be make?</h4>
            <ul>
              <li>
                <span>-</span> A Report will be Requested Containing the Name
                and Positions of all Company Employees
              </li>
              <li>
                <span>-</span> Analysis of Current Problems,Analysis of the
                performance of all employees and directors and analysis of the
                company's financial statement
              </li>
              <li>
                <span>-</span> Setting performance goals for each member of the
                company
              </li>
              <li>
                <span>-</span> Continuous monitoring of the progress of actions
                taken
              </li>
              <li>
                <span>-</span> Meeting with directors to demonstrate and analyze
                results
              </li>
              <li>
                <span>-</span> Guidelines to take from now on
              </li>
              <li>
                <span>-</span> Final report presenting all the measures that
                must be taken to improve the company
              </li>
            </ul>
            <button id="service-button" className="btn btn-md">
              <Link className="service-link" to="/Contact">
                Contact Us
              </Link>
            </button>
          </div>
        </motion.div>
      </div>

      <div id="mag-cont" class="d-md-flex flex-md-equal w-100 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 3 }}
          id="div-Management-Control"
          class=" pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
        >
          <div class="my-3 p-3">
            <h2 class="display-5 overflow-hidden">Management Control</h2>
            <p class="lead">
              With our management control, we will be able to understand your
              company's problems and help you find solutions for them. in
              addition to set performance and financial goals, also carrying out
              a thorough analysis of your staff to establish which ones will be
              useful for the growth of your business and also creating
              strategies to strengthen your brand in your areas of activity!
            </p>
          </div>
          <div id="Management-Control" class="bg-dark shadow-sm mx-auto">
            <img
              id="services-images3"
              src={ImageMagControl}
              alt="image-corporateanalysis"
            />
            <h4 className="overflow-hidden">What we will be make?</h4>
            <ul>
              <li>
                <span>-</span> We will send an expert to analyze some of the
                company's issues
              </li>
              <li>
                <span>-</span> A meeting will be held with the presence of the
                specialist to establish what direction the company should take
                from now on
              </li>
              <li>
                <span>-</span> Analysis of the performance of all employees and
                directors and analysis of the company's financial statement
              </li>
              <li>
                <span>-</span> Setting performance goals for each member of the
                company
              </li>
              <li>
                <span>-</span> New Meeting with directors to demonstrate and
                analyze results
              </li>
              <li>
                <span>-</span> New Guidelines to take from now on
              </li>
              <li>
                <span>-</span> Final report presenting all the measures that
                must be taken to improve the company
              </li>
            </ul>
            <button id="service-button" className="btn">
              <Link className="service-link" to="/Contact">
                Contact Us
              </Link>
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 6, duration: 2 }}
        id="Benefits"
      >
        <h2>When you join Palace of Triumph the benefits you will have are:</h2>
        <div className="Row-b">
          <div className="B-benefits">
            <BsPcDisplayHorizontal className="icon-services" />
            <h4>
              Being alongside a Company with a Strong Global Presence and Vast
              Experience
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              bibendum elit nulla. Suspendisse et consequat enim, sed ultricies
              orci. In lacus mauris, suscipit id quam at, vestibulum pulvinar
              nisi.
            </p>
          </div>

          <div className="B-benefits">
            <FaMagnifyingGlass className="icon-services" />
            <h4>Your problem Understood and Analyzed by Experts</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              bibendum elit nulla. Suspendisse et consequat enim, sed ultricies
              orci. In lacus mauris, suscipit id quam at, vestibulum pulvinar
              nisi.
            </p>
          </div>

          <div className="B-benefits">
            <TbReport className="icon-services" />
            <h4>
              Detailed Practical Solutions and Guidance to Solve your problem
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              bibendum elit nulla. Suspendisse et consequat enim, sed ultricies
              orci. In lacus mauris, suscipit id quam at, vestibulum pulvinar
              nisi.
            </p>
          </div>

          <div className="B-benefits">
            <FaRegLightbulb className="icon-services" />
            <h4>Questions Fully Clarified and Answered</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              bibendum elit nulla. Suspendisse et consequat enim, sed ultricies
              orci. In lacus mauris, suscipit id quam at, vestibulum pulvinar
              nisi.
            </p>
          </div>

          <div className="B-benefits">
            <MdPeople className="icon-services" />
            <h4>Qualified Staff</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              bibendum elit nulla. Suspendisse et consequat enim, sed ultricies
              orci. In lacus mauris, suscipit id quam at, vestibulum pulvinar
              nisi.
            </p>
          </div>

          <div className="B-benefits">
            <BsGraphUpArrow className="icon-services" />
            <h4>Increase your Company's Performance</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              bibendum elit nulla. Suspendisse et consequat enim, sed ultricies
              orci. In lacus mauris, suscipit id quam at, vestibulum pulvinar
              nisi.
            </p>
          </div>

          <div className="B-benefits">
            <BsFillBuildingsFill className="icon-services" />
            <h4>
              Raising the Level of your Company and Strengthening your Brand
              Worldwide
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              bibendum elit nulla. Suspendisse et consequat enim, sed ultricies
              orci. In lacus mauris, suscipit id quam at, vestibulum pulvinar
              nisi.
            </p>
          </div>

          <div className="B-benefits">
            <FiTarget className="icon-services" />
            <h4>Objectives Achieved</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              bibendum elit nulla. Suspendisse et consequat enim, sed ultricies
              orci. In lacus mauris, suscipit id quam at, vestibulum pulvinar
              nisi.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 250 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 8, duration: 3 }}
        id="cta2-section"
        class="pt-5 my-5 text-center border-bottom"
      >
        <div class="overflow-hidden">
          <div className="container4">
            <img
              src={PalaceImage}
              id="cta-image"
              class="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Palace-Image"
              loading="lazy"
            />
          </div>
        </div>

        <h2 class=" fw-bold overflow-hidden px-4">
          Make your Company Reach the Category of Large Global Companies
        </h2>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4 px-4">
            We Are Always Open to Starting a new Successful Journey!
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button
              id="button-cta"
              type="button"
              class="btn btn-lg px-4 me-sm-3"
            >
              <Link className="call-to-action-link" to="/Contact">
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 9.5, duration: 2 }}
        className="footerSP"
      >
        <div className="footer-textSP">
          <p>
            Copyright &copy; 2023 by Palace of Triumph | All Rights Reserved
          </p>
        </div>
      </motion.footer>
    </div>
  )
}

export default Services;