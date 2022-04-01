import styled from 'styled-components';

type Props = {
    isStolen: Boolean;
}

export const Card = styled.div `
    position: relative;
    z-index: 1;

    display: grid;
    grid-template-columns: 30% 50%;
    grid-template-rows: 100%;
    grid-column-gap: 1rem;
    grid-template-areas: "Image  InformationWrap";

    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid var(--gray);
    border-radius: 1rem;
    margin: .5rem 0;
    padding: .8rem 0;
`;

export const Image = styled.img `
    width: 8rem;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-self: center;
    margin: auto;
    border-radius: 2rem;
    object-fit: cover;
    border: .4rem double var(--gray);
`

export const InformationWrap = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const Information = styled.p `
    margin: 0;
`

export const Badge = styled.div <Props> `
    display: inline-block;
    padding: 0.35em 0.65em;
    margin: .5rem 0;
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

