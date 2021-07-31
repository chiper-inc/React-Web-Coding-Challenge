import styled from 'styled-components'

const Item = styled.a`
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

const ListItem = ({ image, title, colors, description, dateStolen, location }) => {
  const timestampToDate = (strDate) => {
    const dateNum = new Date(strDate * 1000).toLocaleDateString('en-US')
    return dateNum
  }

  return (
        <Item href=''>
            <Image src={image || './img/bike.png'} alt='bike-image' />
            <CaseDescription>
                <Casetitle>{title}</Casetitle>
                <BikeDescription>
                    <BikeInfo>{'Colors: '}
                        {
                            colors.length > 1
                              ? colors.map(color => {
                                if (color === colors[0]) {
                                  return <Colors>{color + ' - '}</Colors>
                                } else {
                                  return <Colors>{color + ' '}</Colors>
                                }
                              })
                              : <Colors>{colors[0] + ' '}</Colors>
                        }
                    </BikeInfo>
                    <BikeInfo>Theft Date: {timestampToDate(dateStolen)}</BikeInfo>
                    <BikeInfo>Location of the theft: {location}</BikeInfo>
                </BikeDescription>
            </CaseDescription>
        </Item>
  )
}

export default ListItem