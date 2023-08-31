import React, { useRef } from 'react';
import transactionData from '../data/transactionData'
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Landing = () => {
  const pdRef = useRef();

  const downloadPDF = () => {
    const input = pdRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 20;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('invoice.pdf');
    });
  };

  return (
    <div className='w-full text-white'>
      <img
        className='w-full h-screen object-cover'
        src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jaWFsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
        alt='/'
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='absolute top-[20%] p-4 md:p-8 my-10'>
        <h1 className='text-2xl md:text-4xl font-bold'>Specialized support to leading retail, investment, and microfinance banks, insurance companies, investment managers</h1>

        <p className='my-4'>Experience the Ultimate finance guide</p>

        <div className='bg-white text-black p-8 rounded-lg shadow-md' ref={pdRef}>
          <h2 className='text-2xl font-semibold mb-4'>Dashboard</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Customer Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-medium">Name:</p>
          <p>John Doe</p>
        </div>
        <div>
          <p className="font-medium">Date of Birth:</p>
          <p>1985-03-15</p>
        </div>
        <div>
          <p className="font-medium">Telephone Number:</p>
          <p>(123) 456-7890</p>
        </div>
        <div>
          <p className="font-medium">Product:</p>
          <p>Savings Account</p>
        </div>
        <div>
          <p className="font-medium">Amount Paid:</p>
          <p>$1000.00</p>
        </div>
        <div>
          <p className="font-medium">Date of Payment:</p>
          <p>2023-08-31</p>
        </div>

        <div className="bg-white p-8 mt-4 rounded-lg w-full">
  <h2 className="text-2xl font-semibold py-8">Transaction Details</h2>
  <table className="w-full border-collapse">
    <thead>
      <tr className="border-b">
        <th className="px-6 py-3 text-left font-medium">Transaction ID</th>
        <th className="px-6 py-3 text-left font-medium">Date</th>
        <th className="px-6 py-3 text-left font-medium">Product</th>
        <th className="px-6 py-3 text-left font-medium">Amount</th>
      </tr>
    </thead>
    <tbody>
      {transactionData.map((transaction) => (
        <tr key={transaction.id} className="border-b">
          <td className="px-6 py-4">{transaction.id}</td>
          <td className="px-6 py-4">{transaction.date}</td>
          <td className="px-6 py-4">{transaction.product}</td>
          <td className="px-6 py-4">{transaction.amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      </div>
    </div>
        </div>

      
             <button
          onClick={downloadPDF}
          className='bg-blue-700 text-white rounded-md p-2 hover:bg-blue-600 cursor-pointer mt-8'> Download PDF
           </button>

      </div>
    </div>
  );
};

export default Landing;
