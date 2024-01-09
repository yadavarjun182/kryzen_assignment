import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const Preview = ({ userData }) => {
    const pdfRef = useRef()

    const { name, age, address, photo } = userData;
    const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF('p','mm','a4',true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('userdetails.pdf');
        })
    }

    return (
        <div className="preview-container">
            <h2>Preview</h2>
            <div className="preview-content" ref={pdfRef}>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Address:</strong> {address}</p>
                {photo && (
                    <div>
                        <strong>Photo:</strong>
                        <img src={URL.createObjectURL(photo)} alt="User" style={{ maxWidth: '200px' }} />
                    </div>
                )}
            </div>
            <div>
                <button onClick={downloadPDF}>Download pdf</button>
            </div>
        </div>
    );
};

export default Preview;
