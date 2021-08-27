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
import employee_tracker from '../../../Assets/dev/employee_tracker/employee-tracker.svg';

export const data = [
  {
    id: '01',
    app: 'Alison Lamb',
    tag: 'Visual Design',
    deployed: 'https://alisonlamb.com/',
    repo: 'https://github.com/yondav/ali-portfolio',
    thumbnail:
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1629918649/yondav/dev/lamb/al-logo_zjan8k.jpg',
    gif: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1629918649/yondav/dev/lamb/lamb_fomn2o.gif',
    logo: () => (
      <svg
        viewBox='0 0 1545 1249'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1542.66 942.036C1541.44 978.996 1540.22 1014.1 1539.02 1047.36C1537.8 1080.69 1536.58 1110.04 1535.38 1135.46C1534.16 1160.89 1533.57 1177.22 1533.57 1184.5C1531.13 1208.74 1524.77 1225.37 1514.5 1234.46C1504.19 1243.51 1486.95 1248.1 1462.73 1248.1H1112.17C1163.02 1234.8 1212.36 1213.58 1260.2 1184.5C1308.04 1155.42 1351.31 1121.86 1390.08 1083.69C1428.83 1045.55 1461.52 1005.31 1488.18 962.876C1514.79 920.526 1533.53 895.666 1544.43 856.936C1544.42 887.206 1543.85 905.086 1542.66 942.036Z'
          fill='var(--pr-black)'
        />
        <path
          d='M0.580078 1248.11C42.9501 1209.36 84.41 1161.23 124.99 1103.7C165.55 1046.2 200.97 984.716 231.26 919.326C230.04 943.566 232.17 972.636 237.62 1006.53C243.07 1040.44 251.53 1073.73 263.06 1106.42C274.55 1139.13 289.39 1168.51 307.56 1194.52C325.72 1220.57 346.9 1238.42 371.14 1248.11H0.580078ZM506.45 749.496C464.67 751.306 428.34 755.246 397.47 761.306C366.6 767.366 340.24 776.146 318.46 787.636C296.66 799.166 277.27 812.786 260.33 828.506L380.22 492.466C385.04 525.156 392.62 555.126 402.93 582.376C413.2 609.616 428.65 633.546 449.25 654.126C469.82 674.726 496.76 693.166 530.07 709.526C563.37 725.876 605.46 739.496 656.31 750.396C598.2 747.976 548.23 747.666 506.45 749.496Z'
          fill='var(--pr-black)'
        />
        <path
          d='M601.69 1248.11C613.77 1226.31 623.77 1200.88 631.66 1171.8C639.51 1142.75 645.87 1106.42 650.73 1062.82C655.55 1019.25 659.17 965.956 661.63 902.976C664.03 840.006 665.25 762.506 665.25 670.446C665.25 576.006 664.03 488.806 661.63 408.886C659.17 328.946 655.55 261.156 650.73 205.446C645.87 150.936 638.02 107.066 627.12 73.736C616.22 40.456 604.1 15.936 590.79 0.176025H961.35C957.71 19.556 954.37 42.5861 951.35 69.2061C948.32 95.8561 945.58 129.466 943.18 170.026C940.74 210.606 938.91 259.646 937.73 317.146C936.51 374.686 935.9 444.016 935.9 525.136C935.9 634.116 936.82 725.256 938.63 798.536C940.44 871.816 943.18 934.456 946.8 986.536C950.44 1038.61 955.89 1084.33 963.15 1123.68C970.41 1163.04 980.09 1204.5 992.22 1248.11H601.69Z'
          fill='var(--pr-black)'
        />
      </svg>
    ),
    mockup:
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1630034293/yondav/dev/lamb/mockup_bza9mr.png',
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
    id: '02',
    app: 'Fieldist',
    tag: 'Full Service Field Marketing Platform',
    deployed: 'https://secret-wave-01417.herokuapp.com/login',
    repo: 'https://github.com/tomekregulski/fieldist',
    thumbnail:
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1629917928/yondav/dev/fieldist/fieldist_logo_mfk13z.jpg',
    gif: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1629917929/yondav/dev/fieldist/fieldist_cvcrbw.gif',
    logo: () => (
      <img
        src='https://res.cloudinary.com/yup-schlepp/image/upload/v1629917928/yondav/dev/fieldist/fieldist_logo_mfk13z.jpg'
        alt='Fieldist'
        style={{ borderRadius: '50%' }}
      />
    ),
    mockup:
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1630034276/yondav/dev/fieldist/mockup_uvh9bj.png',
    tech: [ReactLogo, Node, Javascript, HTML, CSS, MySQL],
    desc: () => (
      <div className='desc'>
        <p>
          Fieldist is a prototype platform designed for field marketing agencies
          offering multi-role authentication to conditionally render the app
          based on the user's role.
        </p>
        <p>
          Field reps can view their schedule, check in and out of events, and
          submit reports.
        </p>
        <p>
          Brand contacts can view schedules and data associated with their brand
          and completed reports once they've been approved by an admin.
        </p>
        <p>
          Admins can approve or deny reports, add feedback via comments and
          ratings. They can view the full schedule of events and all report
          data. Admins have full CRUD capabilities for all models in the
          database.
        </p>
      </div>
    ),
  },
  {
    id: '03',
    app: 'Yup!',
    tag: 'Beginnings of a Full Service Leasing CRM',
    deployed: 'https://guarded-atoll-77888.herokuapp.com/',
    repo: 'https://github.com/yondav/yup-schlepp',
    thumbnail:
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1629919429/yondav/dev/yup/yup_f1xxtm.jpg',
    gif: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1629922165/yondav/dev/yup/yup_nbcdqp.gif',
    logo: () => (
      <img
        src='https://res.cloudinary.com/yup-schlepp/image/upload/v1629919429/yondav/dev/yup/yup_f1xxtm.jpg'
        alt='Yup!'
        style={{ borderRadius: '50%' }}
      />
    ),
    mockup:
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1630034320/yondav/dev/yup/mockup_sqmg05.png',
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
    logo: () => (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1060 1060'>
        <g>
          <path
            d='M640,274c1.17.87,2.4,1.68,3.51,2.63a10.06,10.06,0,0,1,3.18,11.31,9.68,9.68,0,0,1-9.22,7.19c-1.66.1-3.33,0-5,0h-216c-18.22,0-33.86,6.24-46.62,19.36-6.52,6.7-10.5,14.65-10.61,24.09-.1,8.31.17,16.65.69,24.95a22.11,22.11,0,0,0,2.51,8.54c8.23,16,22.38,23.85,39,28.74,3.63-40.78,47.25-63.31,77.71-63.05,73,.62,146,.2,219,.2,8.24,0,12.92,3.83,13,10.53a10.11,10.11,0,0,1-9.71,10.6c-1.49.11-3,0-4.5,0H480.49c-18.41,0-34.19,6.36-46.95,19.74-5.92,6.21-9.82,13.51-10.11,22.24-.26,7.65-.47,15.33,0,23,.92,14.92,10.21,24.51,22,32.08a61.45,61.45,0,0,0,34,9.86q114-.15,228-.05c11.32,0,14.61,3.28,14.61,14.54q0,145.74.09,291.48c0,6.57-2,11.3-8.09,14H458a11.28,11.28,0,0,0-2.23-.92c-19.7-3.45-34.66-13.81-45-30.91-5.89-9.75-8.39-20.5-9-32-1-.12-1.85-.24-2.65-.3C363.32,719.33,338,692.25,338,656.27q0-158,.08-315.95a56.6,56.6,0,0,1,2.14-16.25c5.63-18.64,18.49-31.5,35.41-40,8.9-4.46,18.87-6.79,28.36-10.09ZM700.6,487.17h-7.1q-107.73,0-215.45,0c-17.08,0-32.36-5.2-46.39-14.61-2.65-1.77-5.22-3.68-8.48-6V471q0,124.2.06,248.41a54.11,54.11,0,0,0,1.37,12.37c4.9,20.53,21.84,33,44.75,33q113,.06,225.95,0c1.75,0,3.51-.16,5.29-.25ZM359.18,402.28V407q0,124.25.08,248.48a56.06,56.06,0,0,0,1.86,14.3c4.9,18.28,23.79,32.19,40.63,30.26V422.52C386,419.72,372.25,413.12,359.18,402.28Z'
            fill='var(--pr-black)'
          />
          <path
            d='M583.19,423.17q-58,0-116,0c-7.3,0-12.29-4.8-11.78-11.16a10.61,10.61,0,0,1,9.1-9.84A30.5,30.5,0,0,1,469,402H698c8.09,0,12.78,3.52,13.19,9.82s-3.74,11.08-10,11.3c-5.49.19-11,.05-16.5.05Z'
            fill='var(--pr-black)'
          />
        </g>
      </svg>
    ),
    mockup:
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1630034242/yondav/dev/books/mockup_txzmef.png',
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
    logo: () => (
      <img
        src='https://res.cloudinary.com/yup-schlepp/image/upload/v1629926538/yondav/dev/other_side/other-side_nf9wez.png'
        alt='The Other Side'
        style={{ borderRadius: '50%' }}
      />
    ),
    mockup:
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1630034307/yondav/dev/other_side/mockup_vpbqku.png',
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
    logo: () => (
      <img
        src={employee_tracker}
        alt='Employee Tracker'
        style={{ borderRadius: '50%' }}
      />
    ),
    mockup:
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1630034261/yondav/dev/employee_tracker/mockup_stlmfk.png',
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
