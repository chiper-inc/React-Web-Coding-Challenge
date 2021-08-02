import styled from 'styled-components'
import Link from 'next/link'
import { timestampToDate } from '../../../utils'

const Item = styled.div`
    width: 95%;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    margin: .3% 1%;
    padding: 1%;
    border-radius: 3px;
    box-shadow: -1px 0px 4px 0px rgba(0,0,0,0.3);
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
        &:hover {
            background-color: #dfdfdf;
            width: 100%;
        }
        @media (max-width: 768px) {
            min-width: 475px;
        }
        @media (max-width: 481px) {
            min-width: 0px;
            flex-direction: column;
            width: 100%;
            padding: 0;
            margin: 5px 0;
        }
`
const Image = styled.img`
    height: 11rem;
    min-width: 11rem;
    max-width: 11rem;
    margin-right: 1.5%;
    object-fit: cover;
    @media (max-width: 481px) {
        min-width: 100%;
        max-width: 100%;
        height: 18rem;
        margin: 0;
    }
`
const CaseDescription = styled.div`
    display: flex;
    flex-direction: column;
    height: 11rem;
    justify-content: space-around;
    @media (max-width: 481px) {
        width: 100%;
        padding: 10px;
        height: fit-content;
    }
`
const BikeDescription = styled.div`
    display: flex;
    flex-direction: column; 
    
`

const Casetitle = styled.span`
    font-size: 1.5rem;
`
const BikeInfo = styled.span`
    margin-bottom: 2%;
`
const Colors = styled.span`

`

const ListItem = ({ image, title, colors, description, dateStolen, location, id }) => {
  return (
        <Link href='/case/[id]' as={`/case/${id}`}>
            <Item>
                <Image src={image || './img/bike.png'} alt='bike-image' />
                <CaseDescription>
                    <Casetitle>{title}</Casetitle>
                    <BikeDescription>
                        <BikeInfo>{'Colors: '}
                            <Colors>{colors.join(', ')}</Colors>
                        </BikeInfo>
                        <BikeInfo>Theft Date: {timestampToDate(dateStolen)}</BikeInfo>
                        <BikeInfo>Location of the theft: {location}</BikeInfo>
                    </BikeDescription>
                </CaseDescription>
            </Item>
        </Link>
  )
}

export default ListItem