import { ReactElement } from 'react';
import { Title } from '../../common';
import './GridLayout.css';

type Props = {
  children: ReactElement[];
  firstColumnTitle: string;
  secondColumnTitle: string;
};

const GridLayout = ({ children, firstColumnTitle, secondColumnTitle }: Props) => {
  return (
    <div className="grid-layout">
      <Title additionalClassName="grid-layout__title" variant="h3">
        {firstColumnTitle}
      </Title>
      <Title additionalClassName="grid-layout__title" variant="h3">
        {secondColumnTitle}
      </Title>
      {children}
    </div>
  );
};

export default GridLayout;
