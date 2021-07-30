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
const Colors = styled.span`

`

const ListItem = ({ image, title, colors, description, dateStolen, location }) => {
    return (
        <Item>
            <Image src={image ? image : './img/bike.png'} alt='bike-image' />
            <Description>
                <Casetitle>{title}</Casetitle>
                <BikeColors>{'Colors: '}
                {
                   colors.length > 1 ? 
                   colors.map(color => {
                    if(color === colors[0]) {
                        return <Colors>{color + ' - '}</Colors>
                    } else {
                        return <Colors>{color + ' '}</Colors>
                    }
                   })
                   :
                   <Colors>{colors[0] + ' '}</Colors>
                }
                </BikeColors>
                <Casedescription>{description}</Casedescription>
                <Datetheft>Theft Date: {dateStolen}</Datetheft>
                <Locationtheft>Location of the theft: {location}</Locationtheft>
            </Description>
        </Item>
    )
}

export default ListItem