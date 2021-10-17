import React from 'react';
import { Title } from './styles';

interface TitleParagraphProps {
  children: React.ReactNode;
}

const TitleParagraph: React.FC<TitleParagraphProps> = ({
  children,
}: TitleParagraphProps) => {
  return <Title>{children}</Title>;
};

export { TitleParagraph };
