import { Forms, TitlePage } from '@/components/Molecules';
import { IFilters } from '@/Interfaces';
import React from 'react';

interface HeaderProps {
  onSearch: (filters: object | null) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [filters, setFilters] = React.useState<IFilters | null>();

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = React.useCallback(() => {
    onSearch(filters as object);
  }, [filters, onSearch]);

  const handleClear = React.useCallback(() => {
    setFilters(null);
    onSearch(null);
  }, [onSearch]);

  return (
    <>
      <TitlePage title="Police Department of Berlin" subtitle="Stolen Bykes" />
      <Forms
        searchWord={(event) => handleChange(event)}
        from={(event) => handleChange(event)}
        to={(event) => handleChange(event)}
        onSearch={() => handleSearch()}
        onClear={() => handleClear()}
      />
    </>
  );
};

export { Header };
