import { Box, Image, Stack } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const resume = "./resume.pdf";

type PDFFile = string | File | null;

const Resume = () => {
  const [file, setFile] = useState<PDFFile>(resume);

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { files } = event.target;

    if (files && files[0]) {
      setFile(files[0] || null);
    }
  }
  console.log("🚀 ~ file: Resume.tsx:6 ~ resume:", resume, onFileChange);

  return (
    <Box as='main' w='full'>
      <PageInfoHeader />
      <Stack>
        <Image src='./avatar.jpeg' alt='ing' />
        <Document onLoadError={console.error} options={options} file={file}>
          <Page pageNumber={1} />
        </Document>
      </Stack>
    </Box>
  );
};

export default Resume;
