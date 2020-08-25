import React, { useState } from 'react'
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Paragraph = styled.p`
    margin: 0.6rem 0;
    color: #777;
    font-size: 0.9rem;
`

export const SearchCases = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories(() => [inputValue]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <Paragraph>Including results for '{inputValue}'</Paragraph>
        </form>
    )
}


SearchCases.propTypes = {
    setCategories: PropTypes.func.isRequired
}