import { Card, InformationWrap, Image, Information, Badge } from './BikeItem.styles';
import bike_not_found from './../../assets/img/bike_not_found.png';
import { Link } from 'react-router-dom';

export const BikeItem = ({bike}) => {

    const formatterDate = (unixDate) => {
        const date = new Date(parseInt(unixDate)*1000);
        const formatterDate = date.toDateString();
        return formatterDate;
    }

    return (
        <Card>
            <Image src={bike.thumb ? bike.thumb : bike_not_found} alt={bike.title} />
            <InformationWrap>
                <Link to={`bike/${bike.id}`}>
                    <h2>{bike.title}</h2>
                </Link>
                <Information>{bike.description ? bike.description : 'No Description'}</Information>
                <Information>{bike.date_stolen ? formatterDate(bike.date_stolen) : 'N/A'} - {bike.stolen_location}</Information>
                <Badge isStolen={bike.stolen}>{bike.stolen ? "Stolen" : "Recovered"}</Badge>
            </InformationWrap>
        </Card>
    )
}
