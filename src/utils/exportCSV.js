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
