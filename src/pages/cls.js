import React from 'react';

import ProjectPage from './Project';
import image1 from '../assets/images/sites/cls/clogic1.png';
import image2 from '../assets/images/sites/cls/clogic2.png';
import image3 from '../assets/images/sites/cls/clogic3.png';

const cls = () => {

    const name = 'CLS, Inc.';
    const description = 'Creative & Logical Solutions, Inc. is a web development company based in Los Angeles, California. They develop websites for a variety of schools and businesses.';
    const pages =  [
            {
              pageName: "Home Page",
              image: image1
            },
            {
              pageName: "About Us",
              image: image2
            },
            {
              pageName: "Services",
              image: image3
            }
          ];
    return (
        <ProjectPage title={name} text={description} pageArray={pages} />
    )
}

export default cls;