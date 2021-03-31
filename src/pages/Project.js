import React from 'react';

import Layout from '../components/Layout';

const ProjectPage = ({ title, text, pageArray }) => {

    const [name] = React.useState(title);
    const [description] = React.useState(text);
    const [pages] = React.useState(pageArray);

    return (
        <Layout fullMenu>
            <section id="wrapper">
            <header>
                <div className="inner">
                <h2>{name}</h2>
                <p>Project Details</p>
                </div>
            </header>

            <div className="wrapper alt">
                <div className="inner">
                <p>{description}</p>

                <section className="features">

                    {pages.map(page => {
                        const { pageName, image } = page;
                        const style = {
                            backgroundImage: `url( ${image} )`
                        }
                        return (
                            <article>
                                <a className="image"> 
                                    <div className="scroll-image" style={style}></div>
                                </a>
                                <h3 className="major">{pageName}</h3>
                                {/* <p> {description} </p> */}
                            </article>
                        );
                    })}
                   
                </section>
                </div>
            </div>
            </section>
        </Layout>
    )
}

export default ProjectPage;