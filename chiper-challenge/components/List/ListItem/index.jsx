import styled from 'styled-components'

const Item = styled.div`
    height: 250px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    border: 2px solid green;
`
const Image = styled.img`
    height: 225px;
    width: 225px;
    margin: 12.5px;
`
const Description = styled.div`
    display: flex;
    flex-direction: column;
`
const Casetitle = styled.h2`

`
const BikeColors = styled.span`

`
const Casedescription = styled.span`

`
const Datetheft = styled.span`

`
const Datereported = styled.span`

`
const Locationtheft = styled.span`

`

const ListItem = () => {
    return (
        <Item>
            <Image src='./img/bike.png' alt='bike-image' />
            <Description>
                <Casetitle>{'Asdada ASasdasd 2017'}</Casetitle>
                <BikeColors>Color: {'asdasdasd'}</BikeColors>
                <Casedescription>{'asdasdasdasda'}</Casedescription>
                <Datetheft>Theft Date: {1}</Datetheft>
                <Datereported>Report Date: {1}</Datereported>
                <Locationtheft>Location of the theft: {1}</Locationtheft>
            </Description>
        </Item>
    )
}

export default ListItem