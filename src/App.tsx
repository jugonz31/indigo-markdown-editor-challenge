import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [textInput, setTextInput] = useState('');

  const transformText = (text: string) => {
    return text
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^---$/gm, '<hr />')
      .replace(/\n\n(.*$)/gim, '<p>$1</p>')
      .trim();
  };

  return (
    <main>
      <h1 className={styles.title}>Indigo Markdown Editor Challenge</h1>
      <h2 className={styles.subtitle}>By: Juan Gonzalez</h2>
      <hr />
      <div className={styles.container}>
        <h3 className={styles.gridTitle}>Input</h3>
        <h3 className={styles.gridTitle}>Output</h3>
        <textarea onChange={(e) => setTextInput(e.target.value)} rows={5} />
        <div
          className={styles.result}
          dangerouslySetInnerHTML={{ __html: transformText(textInput) }}
        />
      </div>
    </main>
  );
}

export default App;
