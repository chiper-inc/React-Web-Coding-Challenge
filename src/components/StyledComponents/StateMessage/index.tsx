import styled from 'styled-components';

export const StateMessage = styled.div`
    color: ${({ color }) => color ?? '#111'};
    margin: 0 30px 0 30px;
    text-size: 18px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`;
