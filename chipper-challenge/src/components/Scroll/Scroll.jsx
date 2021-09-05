import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { StyledDiv } from './styled';

const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop);

    return (
        <StyledDiv>
            <FaArrowCircleUp
                className='scrollTop'
                onClick={scrollTop}
                style={{
                    height: 40,
                    display: showScroll ? 'flex' : 'none',
                    alignItems: 'flex-end',
                }}
            />
        </StyledDiv>
    );
};

export default ScrollArrow;
