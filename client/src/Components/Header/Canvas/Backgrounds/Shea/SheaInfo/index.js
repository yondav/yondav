import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Loading from '../../../../../Loading';

const Grid = React.lazy(() => import('@material-ui/core/Grid'));

const SheaInfo = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Grid item xs={12}>
          <motion.div
            className='title'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
            exit={{ opacity: 0.5, y: 100, transition: { duration: 1 } }}
            style={{ justifyContent: 'flex-end' }}
          >
            {[
              's',
              'h',
              'e',
              'a',
              '\xa0',
              's',
              't',
              'a',
              'd',
              'i',
              'u',
              'm',
            ].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ scale: 4.4 }}
                animate={{ scale: [2.2, 1], transition: { duration: 2 } }}
                exit={{ scale: [1, 2.2], transition: { duration: 1 } }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6} className='pt-0'>
          <motion.div
            className='media-wrap'
            initial={{ filter: 'grayscale(100%)', opacity: 0, x: -400 }}
            animate={{
              filter: ['grayscale(100%)', 'grayscale(50%)', 'grayscale(0%)'],
              opacity: 1,
              x: 0,
              transition: { duration: 2.5 },
            }}
            exit={{
              filter: 'grayscale(100%)',
              opacity: 0,
              x: -600,
              transition: { duration: 1.2 },
            }}
          >
            <img
              src='https://res.cloudinary.com/yup-schlepp/image/upload/v1631294037/yondav/shea/mets_d7kynp.jpg'
              alt='stage'
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6} className='pt-0'>
          <div className='text-content' style={{ justifyContent: 'center' }}>
            <motion.p
              className='big-snow-desc'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              In the summer of 2009, I put together a short Northeastern tour
              and had heard about a new venue in Greenpoint through some friends
              that knew the people behind it. It seemed like they were on to
              something special. The guy at the head of the operation, an audio
              engineer named Adam Reich was multitracking shows and releasing
              quality recordings of local bands' sets. Equally as exciting, it
              was named for the recently closed home of the Mets. So I checked
              in but they had closed and would soon relocate. With its fate in
              question, Adam agreed to host us for one of the earlier shows at
              the new space.
            </motion.p>
            <motion.p
              className='big-snow-desc'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 1.5 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              So we drove down to an industrial pocket of East Williamsburg one
              August afternoon, blasting Raphael Sadiiq's The Way I See It. It
              seemed like a place you'd never think of going to, littered with
              loading docks, stocking trucks for the day’s final deliveries. We
              didn't know if we had the right place but I started backing into a
              tight spot when I hit a parked car and there was Adam, sitting in
              the driver’s seat.
            </motion.p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className='pt-0'>
          <div className='text-content' style={{ justifyContent: 'center' }}>
            <motion.p
              className='big-snow-desc'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 2 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              That would be our first introduction. Everything was fine and we
              helped each other bring our stuff up the stairs. Adam plugged in
              his iPod and pressed play. It was Raphael Sadiiq's The Way I See
              It. It all seemed too serendipitous but the show was a bust. Adam
              and everyone involved were welcoming and supportive nonetheless
              and we skipped town for the next show.
            </motion.p>
            <motion.p
              className='big-snow-desc'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 1.5 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              I met Luke Chiaruttini a few months later. We became friendly and
              did a couple of school projects together that year. As it turned
              out, Luke was volunteering at Shea for college credits and that
              summer when I moved to Brooklyn, Luke reached out, asking if I
              wanted to take over the position as they would be taking on a new
              role.
            </motion.p>
            <motion.p
              className='big-snow-desc'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 1.5 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              Shea had changed since I was last there. It was more established
              and clearly finding its footing. Nora, a previous volunteer, had
              taken on a major role. The So So Glos were living in newly built
              bedrooms. It was a warm, familial atmosphere. For the next year, I
              volunteered, working at least three or four shows a week before
              departing to start Big Snow Buffalo Lodge, a similar space nearby.
            </motion.p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className='pt-0'>
          <motion.div
            className='media-wrap'
            initial={{ filter: 'grayscale(100%)', opacity: 0, x: -400 }}
            animate={{
              filter: ['grayscale(100%)', 'grayscale(50%)', 'grayscale(0%)'],
              opacity: 1,
              x: 0,
              transition: { duration: 2.5, delay: 1 },
            }}
            exit={{
              filter: 'grayscale(100%)',
              opacity: 0,
              x: -600,
              transition: { duration: 1.2 },
            }}
          >
            <img
              src='https://res.cloudinary.com/yup-schlepp/image/upload/v1631294037/yondav/shea/crowd_x0nwx2.jpg'
              alt='crowd'
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6} className='pt-0'>
          <motion.div
            className='media-wrap'
            initial={{ filter: 'grayscale(100%)', opacity: 0, x: -400 }}
            animate={{
              filter: ['grayscale(100%)', 'grayscale(50%)', 'grayscale(0%)'],
              opacity: 1,
              x: 0,
              transition: { duration: 2.5, delay: 1.5 },
            }}
            exit={{
              filter: 'grayscale(100%)',
              opacity: 0,
              x: -600,
              transition: { duration: 1.2 },
            }}
          >
            <img
              src='https://res.cloudinary.com/yup-schlepp/image/upload/v1631294037/yondav/shea/fish_okzhsc.jpg'
              alt='fish'
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6} className='pt-0'>
          <div className='text-content' style={{ justifyContent: 'center' }}>
            <motion.p
              className='big-snow-desc'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 2 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              After about two years at Big Snow, I’d suffered a major injury and
              the folks at Shea took me in so I went back to working shows
              there. I even moved in for a bit and later started touring with
              The So So Glos as their tour manager.
            </motion.p>
            <motion.p
              className='big-snow-desc'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 2.3 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              Shea kept on until June of 2017. In those years, Shea’s presence
              opened a lot of doors for me and Adam, Nora, Luke, The So So Glos
              have become some of my closest friends, collaborators and even
              business partners. On the last night before Shea Stadium closed,
              Greg Fox, Shea's first resident and ordained minister performed my
              marriage on the roof with the only witness being Adam Reich.
              <br />
              <br />
              <a
                href='http://liveatsheastadium.com/guest_list/yoni-david/'
                target='_blank'
                rel='noopener noreferrer'
                className='nav-link'
                style={{ textDecoration: 'underline' }}
              >
                Shea Forever
              </a>
            </motion.p>
          </div>
        </Grid>
      </Suspense>
    </>
  );
};

export default SheaInfo;
