import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { pdfjs, Document, Page } from 'react-pdf'
import { PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';
import CV from ".//pdf/CV.pdf";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './/style.css';

const Pdf = ({theme}) => {
	pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	}

	return (
		<Box id="PDF">
			<Box sx={{
				borderRadius: '20px',
				boxShadow: '2',
			}}>
				<Document file={CV} onLoadError={console.error} loading="Loading resume!..." >
					<Page pageNumber={pageNumber} size="A4"/>
				</Document>
			</Box>
			<Box textAlign="center">
				<Button variant="text" sx={{
					color:"rgba(253,74,45,1)"
				}}>
					<PDFDownloadLink  document={<CV/>} fileName="Rishabh_Guha_CV.pdf" style={{ color: "inherit", textDecoration: "none", fontFamily: "inherit"}}>
					  {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download')}
					</PDFDownloadLink>
				</Button>
			</Box>
		</Box>
	)
}


export default Pdf