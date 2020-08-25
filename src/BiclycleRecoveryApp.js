import React, { useState } from 'react';
import { SearchCases } from './components/SearchCases';
import { CaseGrid } from './components/CaseGrid';
import { Header } from './components/Header';

export const BiclycleRecoveryApp = () => {

    const [categories, setCategories] = useState(['Stolen']);

    return (
        <>
            <Header />
            <SearchCases setCategories={setCategories} />
            {
                categories.map(category => (
                    <CaseGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
