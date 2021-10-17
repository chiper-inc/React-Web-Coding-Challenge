import { globalStyles } from '@/styles/globalStyles';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Nav, List, Item, Previous, Next } from './styles';

export interface ItemProps {
  disabled?: boolean;
  active?: boolean;
  onClick?: (event: any) => void;
}

interface PaginationProps {
  color?: string;
  current: number;
  total: number;
  handleClick: (num: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  current,
  total,
  color = globalStyles.colors.primary,
  handleClick,
}: PaginationProps) => {
  const [currentArray, setCurrentArray] = React.useState<Array<number>>([]);

  const handleClickPage = (page: number): void => {
    page >= 1 && page <= total
      ? handleClick(page)
      : page < 1
      ? handleClick(1)
      : handleClick(total);
  };

  React.useEffect(() => {
    const init =
      current === total && current > 1
        ? current - 4
        : current >= total - 4 && current !== 1
        ? current - 4
        : current > 3
        ? current - 2
        : 1;
    const arrContainer = [];
    for (let i = init; i < init + 5; i++) {
      arrContainer.push(i);
    }
    setCurrentArray(arrContainer);
  }, [current, total]);

  return (
    <Nav>
      <List>
        <Item
          color={color}
          disabled={current === 1}
          onClick={() => current !== 1 && handleClickPage(current - 1)}
        >
          <Previous>
            <FaChevronLeft />
          </Previous>
        </Item>
        {total > 5 && current > 3 && (
          <>
            <Item
              active={current === 1}
              color={color}
              onClick={() => handleClickPage(1)}
            >
              <span>1</span>
            </Item>
            <span>...</span>
          </>
        )}
        {currentArray.map((item, index) => (
          <Item
            key={index}
            active={current === item}
            color={color}
            onClick={() => handleClickPage(item)}
          >
            <span>{item}</span>
          </Item>
        ))}
        {total > 5 && current < total && (
          <>
            <span>...</span>
            <Item
              active={current === total}
              color={color}
              onClick={() => handleClickPage(total)}
            >
              <span>{total}</span>
            </Item>
          </>
        )}
        <Item
          color={color}
          disabled={current === total}
          onClick={() => current !== total && handleClickPage(current + 1)}
        >
          <Next>
            <FaChevronRight />
          </Next>
        </Item>
      </List>
    </Nav>
  );
};

export { Pagination };
