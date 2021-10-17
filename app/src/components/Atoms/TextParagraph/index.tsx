import React from 'react';
import { Text } from './styles';

interface TextParagraphProps {
  children: React.ReactNode;
}

const TextParagraph: React.FC<TextParagraphProps> = ({
  children,
}: TextParagraphProps) => {
  return <Text>{children}</Text>;
};

export { TextParagraph };
