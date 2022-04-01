import { useGetDetailsBike } from '../../hooks/useGetDetailsBike';
import { useParams, Link } from 'react-router-dom';
import { Loading } from '../../helpers/Loading/Loading';
import { WrapperCard, Header2, WrapperDetails, Image, InformationWrap, Information, Badge, WrapperHeader } from './BikeDetail.styles';
import bike_not_found from './../../assets/img/bike_not_found.png';
import { Button } from './../Search/Search.styles';

export const BikeDetail = () => {
    const { id } = useParams();
    const { bikeDetail, loading } = useGetDetailsBike({id});

    return (
        <>
            { loading ? (
                <Loading />
            ) : (
                <WrapperCard>
                    <Link to={'/'}>
                        <Button>Back</Button>
                    </Link>
                    <WrapperHeader>
                        <Header2>{bikeDetail.title}</Header2><Badge isStolen={bikeDetail.stolen}>{bikeDetail.stolen ? "Stolen" : "Recovered"}</Badge>
                    </WrapperHeader>
                    <WrapperDetails>
                        <Image src={bikeDetail.large_img ? bikeDetail.large_img : bike_not_found} alt="" />
                        <InformationWrap>
                            <Information><b>Serial</b> {bikeDetail.serial ? bikeDetail.serial : 'N/A'}</Information>
                            <Information><b>Stole</b> 
                                {bikeDetail.date_stolen ? bikeDetail.date_stolen : 'No Date Stolen'} at 
                                {bikeDetail.stolen_location ? bikeDetail.stolen_location : 'No Location Stolen'}
                            </Information>
                            <Information><b>Colors</b> {bikeDetail.frame_colors[0] ? bikeDetail.frame_colors[0] : 'N/A'}</Information>
                            <Information><b>Date Reported</b> {bikeDetail.registration_created_at ? bikeDetail.registration_created_at : 'N/A'}</Information>
                            <Information><b>Description</b> {bikeDetail.description ? bikeDetail.description : 'N/A'}</Information>
                        </InformationWrap>
                    </WrapperDetails>
                </WrapperCard>
            )}
        </>
    )
}
