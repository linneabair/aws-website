import React from 'react';

import Layout from '../components/Layout';

import config from '../../config';
const IndexPage = () => {

  const [showProjects, setShowProjects] = React.useState(false);
  const onShowProjects = () => setShowProjects(!showProjects);
  const [sites] = React.useState(config.sites);

  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          {/* <div className="logo">
            <span className="icon fa-laptop"></span>
          </div> */}
          <h2>{config.heading}</h2>
          <p>{config.subHeading}</p>
        </div>
      </section>

      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <a href="/#" id="about-me-image" className="image">
              {/* <img id="me" src={pic1} alt="" /> */}
              <div id="me"> </div>
            </a>
            <div id="about-me" className="content">
              <h2 className="major" id="about-me-heading">About Me</h2>
              <p>
                I am a full-time software developer and web designer based in Vancouver, Washington. 
                I have experience developing in a variety of technologies and frameworks, but I specialize in front-end design and User Experience (UX). 
                I received my Bachelor's of Computer Science from University of Portland in 2018 and since have worked as a web developer renovating outdated websites.
                Currently, I am working at Catalyte, Inc. as a Developer 1 consultant.
                Check out my resume and projects below!
              </p>
              <a href="https://i.kym-cdn.com/entries/icons/facebook/000/028/021/work.jpg" target="_blank" id="resume-button" className="special">
                My resume
              </a>
            </div>
          </div>
        </section>

        {/* <section id="two" className="wrapper alt spotlight style2">
          <div className="inner">
            <a href="/#" className="image">
              <img src={pic2} alt="" />
            </a>
            <div className="content">
              <h2 className="major">Tempus adipiscing</h2>
              <p>
                Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                turpis ante, nullam sit amet turpis non, sollicitudin posuere
                urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                cursus.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </div>
          </div>
        </section>

        <section id="three" className="wrapper spotlight style3">
          <div className="inner">
            <a href="/#" className="image">
              <img src={pic3} alt="" />
            </a>
            <div className="content">
              <h2 className="major">Nullam dignissim</h2>
              <p>
                Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                turpis ante, nullam sit amet turpis non, sollicitudin posuere
                urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                cursus.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </div>
          </div>
        </section> */}

        <section id="four" className="wrapper alt style1">
          <div className="inner">
            <h2 className="major">My Projects</h2>
            <p>
              In addition to school projects, I have developed websites for a variety of companies, schools, and small businesses. 
              I use a multitude of web technologies including WordPress and React along with HTML, CSS, SCSS, and PHP.
            </p>
            <section className="features">
              {sites.slice(0, 4).map(site => {
                const { name, description, image } = site;
                const style = {
                  backgroundImage: `url( ${image} )`
                };
                return (
                  <article>
                    <a href="/#" className="image">
                      <div className="scroll-image" style={style}></div>
                    </a>
                    <h3 className="major">{name}</h3>
                    <p>{description}</p>
                    <a href="/#" className="special">
                      Learn more
                    </a>
                  </article>
                );
              })}

              {showProjects && 
                
                  sites.slice(4, sites.length).map(site => {
                    const { name, description, image } = site;
                    const style = {
                    backgroundImage: `url( ${image} )`
                    };
                    return (
                      <article>
                        <a href="/#" className="image">
                          <div className="scroll-image" style={style}></div>
                        </a>
                        <h3 className="major">{name}</h3>
                        <p>{description}</p>
                        <a href="/#" className="special">
                          Learn more
                        </a>
                      </article>
                    );
                  })
                
              }
              
              
              {/* <article>
                <a href="/#" className="image">
                  <div id="site-1" className="scroll-image"></div>
                </a>
                <h3 className="major">Bad Drug Interactions</h3>
                <p>
                  Bad Drug Interactions is an Android application that I created for my Senior Capstone Project at University of Portland. It was designed to help non-tech-savvy users check their medications for dangerous interactions.
                </p>
                <a href="/#" className="special">
                  Learn more
                </a>
              </article>
              <article>
                <a href="/#" className="image">
                  <div id="site-2" className="scroll-image"></div>
                </a>
                <h3 className="major">CLS, Inc.</h3>
                <p>
                  Creative & Logical Solutions, Inc. is a web development company based in Los Angeles, California. They develop websites for a variety of schools and businesses.
                </p>
                <a href="/#" className="special">
                  Learn more
                </a>
              </article>
              <article>
                <a href="/#" className="image">
                  <div id="site-3" className="scroll-image"></div>
                </a>
                <h3 className="major">Ford Roof Supply</h3>
                <p>
                  Ford Wholesale Co., Inc. is California's oldest roofing supply company. They have multiple locations serving Southern Califonia.
                </p>
                <a href="/#" className="special">
                  Learn more
                </a>
              </article>
              <article>
                <a href="/#" className="image">
                  <div id="site-4" className="scroll-image"></div>
                </a>
                <h3 className="major">CalWest Educators Placement</h3>
                <p>
                  CalWest Educators Placement connects schools with top-tier teachers, administrators, and heads-of-school. They help schools all over the Western US hire quality educators.
                </p>
                <a href="/#" className="special">
                  Learn more
                </a>
              </article> */}
            
              {/* {showProjects && 
                <>
                  <article>
                    <a href="/#" className="image">
                      <div id="site-5" className="scroll-image"></div>
                    </a>
                    <h3 className="major">CSS Consulting Group</h3>
                    <p>
                      CSS Consulting Group in Glendale, California helps healthcare facilities budget and manage staff for maximum efficiency and cost reduction.
                    </p>
                    <a href="/#" className="special">
                      Learn more
                    </a>
                  </article>
                  <article>
                    <a href="/#" className="image">
                      <div id="site-6" className="scroll-image"></div>
                    </a>
                    <h3 className="major">Slotted Web</h3>
                    <p>
                      Slotted Web is a connection joint used in the construction of high-rise buildings to safeguard them against earthquakes.
                    </p>
                    <a href="/#" className="special">
                      Learn more
                    </a>
                  </article>
                  <article>
                    <a href="/#" className="image">
                      <div id="site-7" className="scroll-image"></div>
                    </a>
                    <h3 className="major">Spartan Booster Club</h3>
                    <p>
                      Spartan Booster Club supports the sports, clubs, and other extra curricular activities at La Cañada High School in La Cañada, California.
                    </p>
                    <a href="/#" className="special">
                      Learn more
                    </a>
                  </article>
                  <article>
                    <a href="/#" className="image">
                      <div id="site-8" className="scroll-image"></div>
                    </a>
                    <h3 className="major">Valley Vista Preschool</h3>
                    <p>
                      Valley Vista Preschool in Montrose, CA offers preschool classes and enrichment programs for children aged 3-5.
                    </p>
                    <a href="/#" className="special">
                      Learn more
                    </a>
                  </article>
                </>
              } */}
            </section>
            <ul className="actions">
              <li>
              {!showProjects && 
                <a  className="button" onClick={onShowProjects}>
                  Browse All
                </a>
              }
              {showProjects && 
                <a  className="button" onClick={onShowProjects}>
                  Hide
                </a>
              }
              </li>
            </ul>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default IndexPage;
