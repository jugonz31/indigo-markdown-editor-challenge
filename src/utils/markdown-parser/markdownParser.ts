export const markdownParser = (text: string) => {
  return text
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^---$/gm, '<hr />')
    .replace(/\n\n(.*$)/gm, '<p>$1</p>')
    .trim();
};
