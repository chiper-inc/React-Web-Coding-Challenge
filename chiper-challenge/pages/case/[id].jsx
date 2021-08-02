import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCaseDetails } from '../../actions'
import { useRouter } from 'next/router'
import ReactMapGL, { Marker } from 'react-map-gl'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import styled from 'styled-components'
import { timestampToDate } from '../../utils'

const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2% 8%;
    width: 100%;
`
const CaseTitle = styled.span`
    font-size: 32px;
    font-weight: 500;
    `
const CaseInfo = styled.div`
    display: flex; 
    justify-content: flex-start;
    margin-top: 2%;
    background-color: #dfdfdf;
    
`
const CaseImage = styled.img`
    height: 25rem;
    min-width: 45%;
    max-width: 45%;
    object-fit: cover;
    margin-right: 1%;
`
const CaseDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 25rem;
    width: 100%;
    padding: .5rem;
`
const BikeInfo = styled.span`
    font-size: 1.3rem;
    font-weight: 500;
`
const Colors = styled.span`

`
const Info = styled.span`
    color: #282828;
    font-size: 1.1rem;
    margin-bottom: .5rem;
`
const Map = styled.div`
    height: 30rem;
    width: 54%;
`
const ExtraInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30rem;
    width 45%;
`
const BikeDescription = styled.div`
    height: 48%;
`
const InfoButton = styled.div`
    display: flex;
    height: 20%;
    width: 100%;
    font-size: 1.3rem;
    font-weight: 500;
    border: none;
    background-color: #191919;
    color: white;
    cursor: pointer;
    align-items: center;
    justify-content: center;
`
const InfoDisplay = styled.div`
    height: 80%;
    padding: 10px;
    overflow: auto;
    border-left: 2px solid #c7c7c7;
    border-bottom: 2px solid #c7c7c7;
    border-right: 2px solid #c7c7c7;
`
const Divider = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
`


const Case = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { caseDetails } = useSelector((state) => ({ ...state }))
    const [viewport, setViewport] = useState({
        latitude: 52.4972347,
        longitude: 13.3429021,
        zoom: 15,
        height: '100%',
        width: '100%'
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (router.query.id) {
            dispatch(getCaseDetails(router.query.id))
        }
        setTimeout(function () { setLoading(false) }, 1000)
    }, [router.query.id])
    useEffect(() => {
        if (Object.keys(caseDetails).length) {
            setViewport({
                ...viewport,
                latitude: caseDetails.stolen_record.latitude,
                longitude: caseDetails.stolen_record.longitude
            })
        }
    }, [caseDetails])

    console.log(caseDetails)

    return (
        <>
            {
                loading ?
                    <LoaderContainer>
                        <Loader type="TailSpin" color='#c7c7c7' />
                    </LoaderContainer>
                    :
                    caseDetails && Object.keys(caseDetails).length ?
                        <MainContainer>
                            <CaseTitle>{caseDetails.title}</CaseTitle>
                            <CaseInfo>
                                <CaseImage src={caseDetails.large_img}></CaseImage>
                                <CaseDescription>
                                    <BikeInfo>Location of the theft: </BikeInfo>
                                    <Info>{caseDetails.stolen_record.location}</Info>
                                    <BikeInfo>Theft Date:</BikeInfo>
                                    <Info>{timestampToDate(caseDetails.stolen_record.date_stolen)}</Info>
                                    <BikeInfo>Report Date:</BikeInfo>
                                    <Info>{timestampToDate(caseDetails.stolen_record.created_at)}</Info>
                                    <BikeInfo>Report Number: </BikeInfo>
                                    <Info>{caseDetails.stolen_record.police_report_number}</Info>
                                    <BikeInfo>Colors:</BikeInfo>
                                    <Info>{caseDetails.frame_colors.join(', ')}</Info>
                                </CaseDescription>
                            </CaseInfo>
                            <Divider>
                                <ExtraInfo>
                                    <BikeDescription>
                                        <InfoButton>Bike Description</InfoButton>
                                        <InfoDisplay>{caseDetails.description ? caseDetails.description : 'No description provided'}</InfoDisplay>
                                    </BikeDescription>
                                    <BikeDescription>
                                        <InfoButton>Theft Description</InfoButton>
                                        <InfoDisplay>{caseDetails.stolen_record.theft_description ? caseDetails.stolen_record.theft_description : 'No description provided'}</InfoDisplay>
                                    </BikeDescription>
                                </ExtraInfo>
                                <Map>
                                    <ReactMapGL
                                        {...viewport}
                                        mapboxApiAccessToken='pk.eyJ1IjoibWFyaWFub2JhZXphIiwiYSI6ImNrcm5rejJ4NzF1ZGIzMmtkY3V3ZWZmZWkifQ.dPFI6uXeabI2uszcrGM1OQ'
                                        onViewportChange={(viewport) => setViewport(viewport)}
                                        mapStyle='mapbox://styles/mapbox/streets-v11'
                                    >
                                        <Marker
                                            key='case'
                                            latitude={caseDetails.stolen_record.latitude}
                                            longitude={caseDetails.stolen_record.longitude}
                                        >
                                            <img src='/img/marker.png' height='40px' />
                                        </Marker>
                                    </ReactMapGL>
                                </Map>
                            </Divider>
                        </MainContainer>
                        :
                        <></>
            }
        </>
    )

}

export default Case