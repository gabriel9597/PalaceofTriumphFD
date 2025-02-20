import React from 'react';
import { Link } from 'react-router-dom';
import "./inicio.css";
import Videobg from "../../Assets/BackgroundVideo1.mp4";
import Logo from "../../Assets/PalaceOfTriumphlogotransparente.png";
import imagem1 from "../../Assets/image1.jpeg";
import imagem2 from "../../Assets/image2.jpeg";
import imagem3 from "../../Assets/image3.jpeg";
import VersalhesPalace from "../../Assets/palacio_de_versalhes.jpg";
import testimonial1 from "../../Assets/Testimonialimage1.jpg";
import testimonial2 from "../../Assets/Testimonialimage2.PNG";
import testimonial3 from "../../Assets/Testimonialimage3.jpg";
import { FaQuoteLeft, FaQuoteRight, FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";

function Inicio() {
  return (
    <div id="universal">
      <div
        className="cover-container d-flex w-100 h-100 mx-auto flex-column"
        id="hero"
      >
        <header className="mb-auto" id="header">
          <div>
            <nav
              className="navbar navbar-expand-lg navbar-light bg-transparent"
              aria-label="Offcanvas navbar large"
            >
              <Link to="/" id="img-logo1">
                <motion.img
                  initial={{ opacity: 0, x: -250 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 2 }}
                  src={Logo}
                  width="142"
                  id="Logo"
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
                id="B-Menu"
              >
                <span className="spanF" role="button">
                  <FaBars className="menu-icon" aria-hidden="true" />
                </span>
              </button>

              <div
                className="offcanvas offcanvas-end backg-menu"
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
                    id="menu"
                  >
                    <li className="nav-item bg-transparent" id="link-1">
                      <Link
                        to="/"
                        id="Botoes-Menu"
                        className="nav-link active bg-transparent"
                      >
                        Home
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

        <main>
          <video src={Videobg} id="video-bg" autoPlay loop muted />
        </main>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 250 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 3 }}
        className="d-flex flex-column"
        id="results-1"
      >
        <div className="d-flex justify-center" id="results-2">
          <span id="emp" className="col-10 col-sm-4 col-md-4 col-lg-4">
            +10,000 Supported Companies
          </span>
          <span id="paiat" className="col-10 col-sm-4 col-md-4 col-lg-4">
            +14 Countries Served
          </span>
          <span id="money" className="col-10 col-sm-4 col-md-4 col-lg-4">
            +250 Million Managed
          </span>
        </div>
      </motion.div>

      <hr className="featurette-divider" id="divider" />

      <div>
        <motion.div
          initial={{ opacity: 0, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5, duration: 2 }}
          className="container col-xxl-12 col-xl-12 pt-5"
          id="solucoes"
        >
          <div className="row flex-lg-row-reverse align-items-center g-5 pt-3">
            <div className="col-12 col-sm-12 col-md-10 col-lg-6 ">
              <div className="container3">
                <div className="border-image2"></div>
                <div className="img-2">
                  <img
                    src={imagem1}
                    id="imagem"
                    className="d-block mx-lg-auto img-fluid"
                    alt="imagem1"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <h1 className="display-5 fw-bold py-1">
                Análise Técnica
              </h1>
              <p className="lead" id="p1">
                Em Conjunto com os Dados Existentes, Nossos Profissionais irão Realizar uma Análise Profunda Visando Compreender os Erros que estão sendo Cometidos, os Gastos Desnecessários e as Estratégias Erradas, Que estejam Atrapalhando o Crescimento e o Sucesso da Empresa, Além de Formular as Soluções a serem Tomadas
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-lg px-4 me-md-2"
                  id="botaoS-1"
                >
                  <Link id="image-link" to="Services">
                    Explore!
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <hr className="featurette-divider" id="divider1" />

        <motion.div
          initial={{ opacity: 0, x: 250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 4, duration: 3 }}
          className="container col-xxl-12 col-xl-12 pt-5"
          id="solucoesM"
        >
          <div className="row flex-lg-row-reverse align-items-center g-5 pt-3">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold py-1">
                Performance
              </h1>
              <p className="lead" id="p2">
               O Ponto-Chave que sua Empresa terá Atuando Junto Conosco será a Melhora da Performance de seu Negócio como um todo, Desde a Melhora nos Quadros de Funcionários, Metas Atingidas e Lucros Obtidos, Além de Outros Resultados Obtidos que ela Terá
              </p>
              <div className="d-grid gap-2 d-none d-sm-block d-xs-none d-sm-none d-md-none d-lg-block d-md-flex justify-content-md-end">
                <button
                  type="button"
                  className="btn btn-lg px-4 me-md-2"
                  id="botaoS-2"
                >
                  <Link id="image-link" to="/Services">
                    Explore!
                  </Link>
                </button>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-10 col-lg-6" id="i2">
              <div className="container2">
                <div className="border-image"></div>
                <div className="img-1">
                  <img
                    src={imagem2}
                    id="imagem"
                    className="d-block mx-lg-auto img-fluid"
                    alt="imagem2"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 d-lg-none">
              <button type="button" className="btn btn-lg px-4" id="botaoS-4">
                <Link id="image-link" to="/Services">
                  Explore!
                </Link>
              </button>
            </div>
          </div>
        </motion.div>

        <hr className="featurette-divider" id="divider2" />

        <motion.div
          initial={{ opacity: 0, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 6, duration: 2 }}
          className="container col-xxl-12 col-xl-12 pt-5"
          id="solucoes3"
        >
          <div className="row flex-lg-row-reverse align-items-center g-5 pt-3">
            <div className="col-12 col-sm-12 col-md-10 col-lg-6">
              <div className="container3">
                <div className="border-image2"></div>
                <div className="img-2">
                  <img
                    src={imagem3}
                    id="imagem"
                    className="d-block mx-lg-auto img-fluid"
                    alt="imagem3"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <h1 className="display-5 fw-bold py-1">
                Resultados
              </h1>
              <p className="lead" id="p3">
                O Principal Benefício que se é Constatado por Todas as Empresas que Contaram com os Nossos Serviços Foram a Melhora nos Resultados em Todos os Setores do Negócio, Devido as Mudanças que Foram Feitas por Causa do Trabalho de Nossa Equipe na Apuração do que Se Devia Aprimorar e Corrigir nos Procedimentos e Estratégias da Empresa para a Melhora Não Só dos Lucros, Mas Também da Eficiência e Bem-Estar dos Funcionários, no Corte de Custos Desnecessários E Na Melhoria da Marca como um Todo
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-lg px-4" id="botaoS-3">
                  <Link id="image-link" to="/Services">
                    Explore!
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 250 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 7.5, duration: 3 }}
        className="container mt-n5 pb-5"
        id="H-Testimonials"
      >
        <div id="Lines">
          <div id="T-Testimonials">Satisfações Geradas</div>
        </div>

        {/*slider que funciona */}
        <div id="carouselExampleCaptions" className="carousel slide ">
          <div id="test">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div id="wrapper">
                  <div className="thumbnail">
                    <img src={testimonial1} />
                  </div>

                  <div id="aside">
                    <p>
                      <FaQuoteLeft className="testimonial-icon" />
                      Só Tenho a Agradeçer aos Profissionais do Palácio Do Triunfo Por Me Ajudar a Melhorar as Partes que não Rendiam na Empresa e que Atrapalhavam o Crescimento Dela, Agora Devido a Ajuda Deles Consegui Encontrar a Solução para Esses Problemas, Melhorar Meus Lucros e Aumentar o Espaço de Minha Empresa no Ramo da Construção Civil
                      <FaQuoteRight className="testimonial-icon2" />
                    </p>

                    <div id="name">
                      <h4>Henry Santos</h4>
                      <p>Dono da High7 Construtora</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div id="wrapper">
                  <div className="thumbnail">
                    <img src={testimonial2} />
                  </div>

                  <div id="aside">
                    <p>
                      <FaQuoteLeft className="testimonial-icon" />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum ducimus numquam tempora odit quisquam nostrum cum
                      consequatur itaque facere neque laborum quam voluptatum
                      mollitia quas repellat placeat voluptatem, fugiat sunt.
                      <FaQuoteRight className="testimonial-icon2" />
                    </p>

                    <div id="name2">
                      <h4>Larry James</h4>
                      <p>Executive director of high-end enterprise</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div id="wrapper">
                  <div className="thumbnail">
                    <img src={testimonial3} />
                  </div>

                  <div id="aside">
                    <p>
                      <FaQuoteLeft className="testimonial-icon" />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum ducimus numquam tempora odit quisquam nostrum cum
                      consequatur itaque facere neque laborum quam voluptatum
                      mollitia quas repellat placeat voluptatem, fugiat sunt.
                      <FaQuoteRight className="testimonial-icon2" />
                    </p>

                    <div id="name3">
                      <h4>Michael Philipps</h4>
                      <p>Owner of Startup RATH7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* fim do slider que funciona */}

      <hr className="featurette-divider" id="divider3" />

      <motion.div
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 9, duration: 2 }}
        id="cta4-section"
        className=" pt-5 my-5 text-center border-bottom"
      >
        <div className="overflow-hidden">
          <div className="container5">
            <img
              src={VersalhesPalace}
              id="cta-image2"
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Versalhes-Palace"
              loading="lazy"
            />
          </div>
        </div>

        <h2 className="fw-bold h2-cta1 overflow-hidden px-4">
          See the Benefits of Joining Us
        </h2>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 p-cta1">
            Find out How We Can Elevate your Company!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button
              id="discover-button"
              type="button"
              className="btn btn-lg px-4 me-sm-3"
            >
              <Link id="discover-link" to="/Services">
                Discover!
              </Link>
            </button>
          </div>
        </div>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0, x: 250 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 10.5, duration: 3 }}
        className="footer"
      >
        <div className="footer-text">
          <p>
            Copyright &copy; 2023 by Palace of Triumph | All Rights Reserved
          </p>
        </div>
      </motion.footer>
    </div>
  )
}

export default Inicio;
