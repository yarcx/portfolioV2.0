import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { FC, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type PDFFile = string | File | null;
const resume = "./resume.pdf";

// Set the worker URL for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [file] = useState<PDFFile>(resume);

  return (
    <Box as='main' w='full'>
      <PageInfoHeader />
      <Stack justifyContent='center' overflowX='scroll' pb={["5rem", "", "", "0"]}>
        <PDFViewer file={file as string} />
      </Stack>
    </Box>
  );
};

export default Resume;

export const PDFViewer: FC<{ file: string }> = ({ file }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const gotoNext = () => {
    setPageNumber((prev) => (prev === numPages ? prev : prev + 1));
  };
  const gotoPrev = () => {
    setPageNumber((prev) => (prev !== 1 ? prev - 1 : 1));
  };

  return (
    <>
      <Document
        file={file} // Replace with your PDF file URL or import
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <HStack gap='0' justify='center'>
        <Button
          p='0'
          roundedRight='none'
          display='flex'
          alignItems='center'
          justifyContent='center'
          onClick={gotoPrev}
        >
          <AiOutlineLeft />
        </Button>
        <Button rounded='none' p='0' display='flex' alignItems='center' justifyContent='center'>
          {pageNumber} / {numPages}
        </Button>
        <Button
          onClick={gotoNext}
          roundedLeft='none'
          p='0'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <AiOutlineRight />
        </Button>
      </HStack>
    </>
  );
};
