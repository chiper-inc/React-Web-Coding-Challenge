import styled from 'styled-components';

export const StyledDiv = styled.div`
    .scrollTop {
        display: flex;
        position: fixed;
        justify-content: flex-end;
        align-items: flex-end;
        width: 100%;
        bottom: 6rem;
        height: 20px;
        z-index: 1000;
        cursor: pointer;
        animation: fadeIn 0.3s;
        transition: opacity 0.4s;
        opacity: 0.5;
    }

    .scrollTop:hover {
        opacity: 1;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 0.5;
        }
    }
`;
