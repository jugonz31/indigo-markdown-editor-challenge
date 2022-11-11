import { useState } from 'react';
import { TextArea, DocumentPreview, Title } from '../../components/common';
import { GridLayout } from '../../components/layouts';
import './MainPage.css';

export default function MainPage() {
  const [textInput, setTextInput] = useState<string>('');

  return (
    <main className="main-page">
      <Title additionalClassName="main-page__title">Indigo Markdown Editor Challenge</Title>
      <Title additionalClassName="main-page__subtitle" variant="h2">
        By: Juan Gonzalez
      </Title>
      <GridLayout firstColumnTitle="Input" secondColumnTitle="Preview">
        <TextArea onChange={(e) => setTextInput(e.target.value)} />
        <DocumentPreview htmlString={textInput} />
      </GridLayout>
    </main>
  );
}
