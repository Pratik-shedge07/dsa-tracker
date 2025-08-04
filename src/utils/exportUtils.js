// 📦 utils/exportUtils.js
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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

export function exportToPDF(data, filename = 'DSA_Questions.pdf') {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text('DSA Questions Report', 14, 22);

  const headers = [['Title', 'Topic', 'Difficulty', 'Status', 'Date']];
  const rows = data.map(q => [
    q.title,
    q.topic,
    q.difficulty,
    q.status,
    q.date,
  ]);
  doc.autoTable({
    startY: 30,
    head: headers,
    body: rows,
    styles: {
      fontSize: 10,
      cellPadding: 3,
    },
    headStyles: {
      fillColor: [52, 152, 219],
    },
  });

  doc.save(filename);
}
