import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import Loading from '../../../Loading';
import './bg-info.css';

const Box = React.lazy(() => import('@material-ui/core/Box'));
const Grid = React.lazy(() => import('@material-ui/core/Grid'));
const DogInfo = React.lazy(() => import('../Backgrounds/Dogs/DogInfo'));
const CesInfo = React.lazy(() => import('../Backgrounds/Ces/CesInfo'));
const MusicInfo = React.lazy(() => import('../Backgrounds/Tape/MusicInfo'));
const BigSnowInfo = React.lazy(() =>
  import('../Backgrounds/Big_Snow/BigSnowInfo')
);
const SheaInfo = React.lazy(() => import('../Backgrounds/Shea/SheaInfo'));

const BGInfo = ({ info, setInfo }) => {
  return (
    <motion.div
      className='bg-feature'
      initial={{ opacity: 0, x: 1000 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: 'anticipate' },
      }}
      exit={{
        x: 1500,
        transition: { duration: 1, delay: 1.2 },
      }}
    >
      <Suspense fallback={<Loading />}>
        <Box xs={{ flexGrow: 1 }} style={{ height: '100%' }}>
          <Grid
            container
            spacing={6}
            style={{ margin: '1.5rem 0', width: '100%' }}
          >
            <AiOutlineClose
              className='close'
              onClick={() => {
                setInfo(false);
                window.scrollTo({ top: 0, left: 0 });
              }}
            />
            {info === 'dogs' && <DogInfo />}
            {info === 'ces' && <CesInfo />}
            {info === 'tape' && <MusicInfo />}
            {info === 'big_snow' && <BigSnowInfo />}
            {info === 'shea' && <SheaInfo />}
          </Grid>
        </Box>
      </Suspense>
    </motion.div>
  );
};

export default BGInfo;
