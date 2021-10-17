import { Forms, TitlePage } from '@/components/Molecules';
import { IFilters } from '@/Interfaces';
import { convertDateToTimestamp } from '@/utils/dates';
import React from 'react';

interface HeaderHomeProps {
  onSearch: (filters: object | null) => void;
}

const HeaderHome: React.FC<HeaderHomeProps> = ({
  onSearch,
}: HeaderHomeProps) => {
  const [filters, setFilters] = React.useState<IFilters | null>();

  const handleChange = (event: any) => {
    const { name } = event.target;
    let { value } = event.target;
    if (name === `stolen_before` || name === `stolen_after`)
      value = convertDateToTimestamp(value);
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

export { HeaderHome };
