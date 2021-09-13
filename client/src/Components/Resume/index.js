import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import resume from '../../Assets/yondav-dev-resume-2021.pdf';

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          scale={window.innerWidth < 550 ? 0.5 : 1}
        />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </motion.div>
  );
};

export default Resume;
