import { ChangeEventHandler } from 'react';

type Props = { onChange: ChangeEventHandler<HTMLTextAreaElement> };

const TextArea = ({ onChange }: Props) => {
  return <textarea onChange={onChange} rows={5} />;
};

export default TextArea;
