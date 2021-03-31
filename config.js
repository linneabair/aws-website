// import bdi from './src/assets/images/sites/bdi/bdi1.png';
// import cls from './src/assets/images/sites/cls/clogic1.png';
// import ford from './src/assets/images/sites/ford/ford1.png';
// import calwest from './src/assets/images/sites/calwest/calwest1.png';
// import css from './src/assets/images/sites/css/css1.png';
// import slottedweb from './src/assets/images/sites/slottedweb/slottedweb1.png';
// import boosters from './src/assets/images/sites/boosters/boosters1.png';
// import valley from './src/assets/images/sites/valley/valley1.png';

module.exports = {
  siteTitle: 'Linnea Bair', // <title>
  manifestName: 'SolidState',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#333',
  manifestThemeColor: '#333',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/laptop-code-solid.svg',
  pathPrefix: `/gatsby-starter-solidstate/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'Linnea Bair',
  subHeading: 'Software Developer & Web Designer',

  socialLinks: [
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'lbair82@gmail.com',
    },
    {
      icon: 'fa-linkedin',
      name: 'Linked In',
      url: 'https://linkedin.com/linnea-bair',
    },
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/linneabair',
    }
  ],
  phone: '(360) 609-3356',
  address: 'Vancouver, Washington, USA',

  //  sites: [
  //   {
  //     name: "Bad Drug Interactions",
  //     link: "baddruginteractions",
  //     description: "Bad Drug Interactions is an Android application that I created for my Senior Capstone Project at University of Portland. It was designed to help non-tech-savvy users check their medications for dangerous interactions.",
  //     image: bdi
  //    },
  //   {
  //     name: "CLS, Inc.",
  //     link: "cls",
  //     description: "Creative & Logical Solutions, Inc. is a web development company based in Los Angeles, California. They develop websites for a variety of schools and businesses.",
  //     image: cls,
  //     pages: [
  //       {
  //         name: "Home Page",
  //         image: require('./src/assets/images/sites/cls/clogic1.png')
  //       },
  //       {
  //         name: "About Us",
  //         image: require('./src/assets/images/sites/cls/clogic2.png')
  //       },
  //       {
  //         name: "Services",
  //         image: require('./src/assets/images/sites/cls/clogic3.png')
  //       }
  //     ]
  //   },
  //   {
  //     name: "Ford Roof Supply",
  //     link: "fordroofsupply",
  //     description: "Ford Wholesale Co., Inc. is California's oldest roofing supply company. They have multiple locations serving Southern Califonia.",
  //     image: ford,
  //     pages: [
  //       {
  //         name: "Home Page",
  //         image: require('./src/assets/images/sites/ford/ford1.png')
  //       },
  //       {
  //         name: "Locations",
  //         image: require('./src/assets/images/sites/ford/ford2.png')
  //       },
  //       {
  //         name: "Products",
  //         image: require('./src/assets/images/sites/ford/ford3.png')
  //       }
  //     ]
  //   },
  //   {
  //     name: "CalWest Educators Placement",
  //     link: "calwest",
  //     description: "CalWest Educators Placement connects schools with top-tier teachers, administrators, and heads-of-school. They help schools all over the Western US hire quality educators.",
  //     image: calwest,
  //     pages: [
  //       {
  //         name: "Home Page",
  //         image: require('./src/assets/images/sites/calwest/calwest1.png')
  //       },
  //       {
  //         name: "Team",
  //         image: require('./src/assets/images/sites/calwest/calwest2.png')
  //       },
  //       {
  //         name: "Blog",
  //         image: require('./src/assets/images/sites/calwest/calwest3.png')
  //       },
  //       {
  //         name: "FAQ",
  //         image: require('./src/assets/images/sites/calwest/calwest3.png')
  //       }
  //     ]
  //   },
  //   {
  //     name: "CSS Consulting Group",
  //     link: "css",
  //     description: "CSS Consulting Group in Glendale, California helps healthcare facilities budget and manage staff for maximum efficiency and cost reduction.",
  //     image: css,
  //     pages: [
  //       {
  //         name: "Home Page",
  //         image: require('./src/assets/images/sites/css/css1.png')
  //       },
  //       {
  //         name: "Labor Management",
  //         image: require('./src/assets/images/sites/css/css2.png')
  //       },
  //       {
  //         name: "Operations & Systems Improvement",
  //         image: require('./src/assets/images/sites/css/css3.png')
  //       }
  //     ]
  //   },
  //   {
  //     name: "Slotted Web",
  //     link: "slottedweb",
  //     description: "Slotted Web is a connection joint used in the construction of high-rise buildings to safeguard them against earthquakes.",
  //     image: slottedweb,
  //     pages: [
  //       {
  //         name: "Home Page",
  //         image: require('./src/assets/images/sites/slottedweb/slottedweb1.png')
  //       },
  //       {
  //         name: "Typical Details",
  //         image: require('./src/assets/images/sites/slottedweb/slottedweb2.png')
  //       },
  //       {
  //         name: "Technical Documents",
  //         image: require('./src/assets/images/sites/slottedweb/slottedweb3.png')
  //       },
  //       {
  //         name: "Contact Us",
  //         image: require('./src/assets/images/sites/slottedweb/slottedweb4.png')
  //       }
  //     ]
  //   },
  //   {
  //     name: "Spartan Booster Club",
  //     link: "boosters",
  //     description: "Spartan Booster Club supports the sports, clubs, and other extra curricular activities at La Cañada High School in La Cañada, California.",
  //     image: boosters,
  //     pages: [
  //       {
  //         name: "Mission",
  //         image: require('./src/assets/images/sites/boosters/boosters1.png')
  //       },
  //       {
  //         name: "Boosters Scholarship",
  //         image: require('./src/assets/images/sites/boosters/boosters2.png')
  //       },
  //       {
  //         name: "Contact Us",
  //         image: require('./src/assets/images/sites/boosters/boosters3.png')
  //       }
  //     ]
  //   },
  //   {
  //     name: "Valley Vista Preschool",
  //     link: "valleyvista",
  //     description: "Valley Vista Preschool in Montrose, CA offers preschool classes and enrichment programs for children aged 3-5.",
  //     image: valley,
  //     pages: [
  //       {
  //         name: "Home Page",
  //         image: require('./src/assets/images/sites/valley/valley1.png')
  //       },
  //       {
  //         name: "Faculty",
  //         image: require('./src/assets/images/sites/valley/valley2.png')
  //       }
  //     ]
  //   }
  //  ]
};
