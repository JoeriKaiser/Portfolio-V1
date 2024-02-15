import React, {useState} from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import pdf1 from '../assets/cv_EN.pdf';
import pdf2 from '../assets/cv_FR.pdf';

const Cv = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [currentPDF, setCurrentPDF] = useState(pdf1);
  const [numPages, setNumPages] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const onError = (error) => alert('Error while loading page! ' + error.message)

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
      <div style={{width: '100%', height: '100px', display: 'flex', justifyContent: 'center', gap: '100px', flexDirection: 'row'}}>
        <div style={{width: 100, height: 'auto', fontSize: '4rem'}} onClick={() => setCurrentPDF(pdf1)}>
          🇫🇷
        </div>
        <div style={{width: 100, height: 'auto', fontSize: '4rem'}} onClick={() => setCurrentPDF(pdf2)}>
          🇬🇧
        </div>
      </div>
      {currentPDF === pdf1 && (
        <Document style={currentPDF === pdf1 && {display: 'hidden'}} onDocumentLoadSuccess={onDocumentLoadSuccess} onError={onError} file={currentPDF}>
        <Page renderTextLayer={false} renderAnnotationLayer={false} canvasBackground='transparent' height={800} pageNumber={numPages} />
      </Document> 
        )}
      {currentPDF === pdf2 && (
        <Document style={currentPDF === pdf2 && {display: 'hidden'}} onDocumentLoadSuccess={onDocumentLoadSuccess} onError={onError} file={currentPDF}>
        <Page renderTextLayer={false} renderAnnotationLayer={false} canvasBackground='transparent' height={800} pageNumber={numPages} />
      </Document> 
        )}
    </div>
  );
}

export default Cv
