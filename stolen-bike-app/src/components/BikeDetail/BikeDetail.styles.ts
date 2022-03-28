import styled from "styled-components";

type Props = {
    isStolen: Boolean;
}

export const WrapperCard = styled.div `
    position: relative;
    z-index: 1;

    background-color: #fff;
    background-clip: border-box;
    border: 1px solid var(--gray);
    border-radius: 1rem;
    margin: .5rem 0;
    padding: .8rem 0;
`

export const WrapperHeader = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Header2 = styled.h2 `
    display: inline-block;
`

export const WrapperDetails = styled.div `
    position: relative;
    z-index: 1;

    display: grid;
    grid-template-columns: 60% 30%;
    grid-template-rows: 100%;
    grid-column-gap: 3rem;
    grid-template-areas: "Image  InformationWrap";

    word-wrap: break-word;
    margin: .5rem 0;
    padding: .8rem 0;
`;

export const Image = styled.img `
    width: 100%;
`;

export const InformationWrap = styled.div `
    display: flex;
    flex-direction: column;
`;

export const Information = styled.p `
    margin: 0;
    margin-bottom: 1rem;
    & b {
        display: block;
    }
`;

export const Badge = styled.div <Props> `
    display: inline-block;
    padding: 0.35em 0.65em;
    margin: 0 .5rem;
    font-size: .75em;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    background-color: ${(props) => props.isStolen ? '#dc3545' : '#0fa64b'};
`