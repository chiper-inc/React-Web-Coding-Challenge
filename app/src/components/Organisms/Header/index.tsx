import { Forms, TitlePage } from '@/components/Molecules';
import React from 'react';

interface IFilters {
  word?: string;
  from?: string;
  to?: string;
}

interface HeaderProps {
  onSearch: (filters: object) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [filters, setFilters] = React.useState<IFilters>();

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = React.useCallback(() => {
    onSearch(filters as object);
  }, [filters, onSearch]);

  return (
    <>
      <TitlePage title="Police Department of Berlin" subtitle="Stolen Bykes" />
      <Forms
        searchWord={(event) => handleChange(event)}
        from={(event) => handleChange(event)}
        to={(event) => handleChange(event)}
        onSearch={() => handleSearch()}
      />
    </>
  );
};

export { Header };
