import React from 'react';
import { motion } from 'framer-motion';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const ExportOptions = ({ data, selectedTemplate }) => {
  const handleExportPDF = async () => {
    try {
      // Find the preview element by its ref
      const element = document.querySelector('[data-preview="true"]');
      if (!element) {
        throw new Error('Could not find preview element');
      }

      // Create a copy of the element to modify it for PDF
      const clone = element.cloneNode(true);
      
      // Remove any elements that shouldn't be in the PDF
      const ignoreElements = clone.querySelectorAll('.ignore-pdf');
      ignoreElements.forEach(el => el.remove());

      // Create a temporary container for the cloned element
      const tempContainer = document.createElement('div');
      document.body.appendChild(tempContainer);
      tempContainer.appendChild(clone);

      // Generate the PDF
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');

      // Clean up
      tempContainer.remove();
    } catch (error) {
      console.error('Error exporting to PDF:', error);
      alert('Failed to export PDF. Please try again.');
    }
  };

  const handleExportWord = () => {
    // TODO: Implement Word export functionality
    alert('Word export coming soon!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 right-8 flex flex-col gap-4"
    >
      <button
        onClick={handleExportPDF}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Export as PDF
      </button>
      <button
        onClick={handleExportWord}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Export as Word
      </button>
    </motion.div>
  );
};

export default ExportOptions;