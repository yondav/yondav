import {
  CSS,
  HandleBars,
  HTML,
  Javascript,
  Mongo,
  MySQL,
  Node,
  ReactLogo,
} from '../../Logos';
export const data = [
  {
    id: '01',
    app: 'Fieldist',
    tag: 'Full Service Field Marketing Platform',
    deployed: 'https://secret-wave-01417.herokuapp.com/login',
    repo: 'https://github.com/tomekregulski/fieldist',
    thumbnail:
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1629917928/yondav/dev/fieldist/fieldist_logo_mfk13z.jpg',
    gif: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1629917929/yondav/dev/fieldist/fieldist_cvcrbw.gif',
    tech: [ReactLogo, Node, Javascript, HTML, CSS, MySQL],
    desc: () => (
      <div className='desc'>
        <p>
          Fieldist is a prototype platform designed for agencies to manage their
          field marketing business. At the core of the app is a multi-role
          authentication program that conditionally renders the app based on the
          role of the user (admin, brand contact, and field rep).
        </p>
        <p>
          A field rep can view their specific work schedule, check in and out at
          a location, and submit a report. They can edit that report until it is
          approved by an admin.
        </p>
        <p>
          A brand contact is able to view the schedules and data (raw data table
          and metric charts) for events assigned to their brand, as well as
          completed reports once they have been approved by an admin.
        </p>
        <p>
          Admins have the most access in the app. In regard to event reports –
          they can approve or deny a report, add comments to support their
          decision, and ultimately give a rating to the report, which can be
          used for internal revue purposes. Additionally, they can view the full
          schedule of events (past, present, and future) and full spread of
          report data (raw data tables and metric charts). Finally, admins have
          full CRUD capabilities for all models in the database.
        </p>
      </div>
    ),
  },
  {
    id: '02',
    app: 'Alison Lamb',
    tag: 'Visual Design',
    deployed: 'https://alisonlamb.com/',
    repo: 'https://github.com/yondav/ali-portfolio',
    thumbnail:
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1629918649/yondav/dev/lamb/al-logo_zjan8k.jpg',
    gif: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1629918649/yondav/dev/lamb/lamb_fomn2o.gif',
    tech: [ReactLogo, Javascript, HTML, CSS],
    desc: () => (
      <div className='desc'>
        <p>
          <em>
            'The role of a visual designer is not an entirely creative one. I
            view my work as problem resolution through visual communication. I
            sift through concepts, ideas, sketches, and research with you to
            help identify the true focus of the project. From there, we can
            cleanly, efficiently, and effectively build the story. My strengths
            are branding and presentation design and assertion, UI/UX and web
            design, product design, and marketing design.'
          </em>
        </p>
      </div>
    ),
  },
  {
    id: '03',
    app: 'Yup',
    tag: 'Beginnings of a Full Service Real Estate CRM',
    deployed: 'https://guarded-atoll-77888.herokuapp.com/',
    repo: 'https://github.com/yondav/yup-schlepp',
    thumbnail:
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1629919429/yondav/dev/yup/yup_f1xxtm.jpg',
    gif: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1629922165/yondav/dev/yup/yup_nbcdqp.gif',
    tech: [Javascript, Node, HandleBars, HTML, CSS, MySQL],
    desc: () => (
      <div className='desc'>
        <p>
          Yup Schlepp is the beginning of an intensive project revolving around
          the needs of your average New York City leasing agent. The goal is to
          build a full service CRM over time, specific to the needs of Yup
          Realty, LLC.
        </p>
        <p>
          In our first version we present the ability to add and edit listings
          through their numerous data points spanning from data that corresponds
          to the landlord, building, unit, amenities, location, etc.
        </p>
      </div>
    ),
  },
  {
    id: '04',
    app: 'My Favorite Books',
    tag: 'Powered By Google Books',
    deployed: 'https://yondav-21-google-books-search.herokuapp.com/',
    repo: 'https://github.com/yondav/21-google-books-search',
    thumbnail:
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1629924470/yondav/dev/books/books_vsevky.jpg',
    gif: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1629924472/yondav/dev/books/books_j41spi.gif',
    tech: [ReactLogo, Javascript, Node, HTML, CSS, Mongo],
    desc: () => (
      <div className='desc'>
        <p>
          My Favorite Books is an interactive web application built using the
          MERN stack and powered by Google Books. The user has access to all
          books in the Google Books API via a query field with the ability to
          save books to an internal database and remove saved books.
        </p>
      </div>
    ),
  },
  {
    id: '05',
    app: 'The Other Side',
    tag: 'A Look at the Opposite Side of Earth',
    deployed: 'https://yondav-21-google-books-search.herokuapp.com/',
    repo: 'https://github.com/yondav/21-google-books-search',
    thumbnail:
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1629924528/yondav/dev/other_side/other-side_jhir94.jpg',
    gif: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1629924528/yondav/dev/other_side/other_side_p2cxkz.gif',
    tech: [Javascript, HTML, CSS],
    desc: () => (
      <div className='desc'>
        <p>
          The Other Side is a simple app that navigates users to the antipodal
          coordinates of either their current location or a selected location.
          Powered by Google Maps.
        </p>
      </div>
    ),
  },
  {
    id: '06',
    app: 'Employee Tracker',
    tag: 'Command Line CMS',
    repo: 'https://github.com/yondav/12-employee-tracker',
    thumbnail:
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1629924626/yondav/dev/employee_tracker/employee_tracker_n6qm2i.jpg',
    gif: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1629924626/yondav/dev/employee_tracker/employee_tracker_rz9zjl.gif',
    tech: [Node, MySQL],
    desc: () => (
      <div className='desc'>
        <p>
          Employee Tracker is an easy to use CMS to keep track of a company's
          employees, roles and departments. The user has the ability to view
          employees with the following filters: all, by department, by role, by
          manager. The user also has the ability to add, edit and remove
          employees, departments and roles.
        </p>
      </div>
    ),
  },
];
