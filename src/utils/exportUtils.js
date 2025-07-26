// 📦 utils/exportUtils.js
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; // ✅ Important plugin import

// ✅ CSV Export
export function exportToCSV(data, filename = 'dsa_questions.csv') {
  const headers = ['Title', 'Topic', 'Difficulty', 'Status', 'Date'];
  const rows = data.map(q => [
    `"${q.title}"`,
    `"${q.topic}"`,
    `"${q.difficulty}"`,
    `"${q.status}"`,
    `"${q.date}"`
  ]);

  const csvContent = [headers, ...rows]
    .map(e => e.join(','))
    .join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

// ✅ PDF Export
export function exportToPDF(data, filename = 'DSA_Questions.pdf') {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(18);
  doc.text('DSA Questions Report', 14, 22);

  // Prepare rows
  const rows = data.map(q => [
    q.title,
    q.topic,
    q.difficulty,
    q.status,
    q.date,
  ]);

  // Generate styled table
  autoTable(doc, {
    startY: 30,
    head: [['Title', 'Topic', 'Difficulty', 'Status', 'Date']],
    body: rows,
    styles: {
      fontSize: 10,
      cellPadding: 3,
      overflow: 'linebreak',
    },
    headStyles: {
      fillColor: [52, 152, 219], // Blue header
      textColor: 255, // White text
    },
    columnStyles: {
      0: { cellWidth: 50 }, // Title
      1: { cellWidth: 35 }, // Topic
      2: { cellWidth: 25 }, // Difficulty
      3: { cellWidth: 25 }, // Status
      4: { cellWidth: 30 }, // Date
    },
  });

  // Save PDF
  doc.save(filename);
}
