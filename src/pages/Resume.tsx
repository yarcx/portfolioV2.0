import { Box, Button, HStack, Stack, Text, Tooltip, VStack } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { FC, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import useDisplayHooks from "../hooks/useDisplayHooks";
import ReactLoading from "react-loading";
import { resume } from "../utils/constants";

type PDFFile = string | File | null;

// Set the worker URL for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [file] = useState<PDFFile>(resume);
  const { borderColor } = useDisplayHooks();

  return (
    <Box as='main' w='full'>
      <PageInfoHeader />
      <Stack
        justifyContent='center'
        width='full'
        overflowX='scroll'
        borderTop='.6px solid'
        borderColor={borderColor}
        alignItems='center'
        as='section'
        pb={["5rem", "", "", "0"]}
      >
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
    <Box w='100%'>
      <Document
        file={file} // Replace with your PDF file URL or import
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <VStack justify='center'>
            <ReactLoading type='bars' color='#fff' />
            <Text textAlign='center'>Loading Resume...</Text>
          </VStack>
        }
      >
        <Page pageNumber={pageNumber} />
      </Document>
      {/* Pagination Button */}
      {numPages && (
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
          <Tooltip label='Active Page / Total Page'>
            <Button rounded='none' p='0' display='flex' alignItems='center' justifyContent='center'>
              {pageNumber} / {numPages}
            </Button>
          </Tooltip>
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
      )}
    </Box>
  );
};
