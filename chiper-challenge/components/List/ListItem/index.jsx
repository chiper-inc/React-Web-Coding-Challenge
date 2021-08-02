import styled from 'styled-components'
import Link from 'next/link'
import { timestampToDate } from '../../../utils'

const Item = styled.div`
    width: 95%;
    min-width: 475px;
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
`
const Image = styled.img`
    height: 175px;
    min-width: 175px;
    max-width: 175px;
    margin-right: 1.5%;
    object-fit: cover;
`
const CaseDescription = styled.div`
    display: flex;
    flex-direction: column;
    height: 175px;
    justify-content: space-around;
`
const BikeDescription = styled.div`
    display: flex;
    flex-direction: column; 
    
`

const Casetitle = styled.span`
    font-size: 25px;
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