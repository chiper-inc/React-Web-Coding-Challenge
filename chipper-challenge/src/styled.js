import styled from 'styled-components';

const StyledDiv = styled.div`
    display: grid;
    grid-template-areas:
        'navBar navBar navBar navBar navBar navBar'
        'content content content content content content'
        'content content content content content content'
        'content content content content content content'
        'content content content content content content'
        'content content content content content content';

    .nav {
        grid-area: navBar;
    }

    .container-home {
        grid-area: content;
    }
`;

export default StyledDiv;
