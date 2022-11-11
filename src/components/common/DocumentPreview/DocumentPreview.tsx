import { markdownParser } from '../../../utils';
import './DocumentPreview.css';

type Props = { htmlString: string };

const DocumentPreview = ({ htmlString }: Props) => {
  return (
    <div
      className="document-preview"
      dangerouslySetInnerHTML={{ __html: markdownParser(htmlString) }}
      data-testid="document-preview"
    />
  );
};

export default DocumentPreview;
