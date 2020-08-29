import React, { Component } from 'react';
import moment from 'moment';
import styled from '../../theme'

const IncidentWrapper = styled.div`
  margin: 0 auto 15px;
  padding: 15px;
  width: 900px;
  background: #eee;
`;

const IncidentBikePicture = styled.div`
  position: relative;
  display: inline-block;
  width: 150px;
  height: 150px;
  margin-right: 15px;
`;

const IncidentDetails = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 735px;
`;

const BikePicture = styled.img`
  width: 150px;
  height: 150px;
`;

const IncidentTitle = styled.h5`
  font-weight: bold;
  color: #4996a2;
  font-size: 1.2em;
  margin: 0;
`;

const IncidentDesc = styled.p`
  color: #71c2cc;
  margin: 0;
`;

const IncidentInfo = styled.p`
  color: #999;
  margin: 10px 0 0;
`;

class IncidentItem extends Component {
  render() {
    const occurredAt = moment.unix(this.props.data.occurred_at).format('DD-MM-YYYY - HH:mm').toString();
    const picture = this.props.data.media.image_url_thumb ? this.props.data.media.image_url_thumb : 'placeholder.jpg';

    return (
      <IncidentWrapper>
        <IncidentBikePicture>
          <BikePicture src={picture} />
        </IncidentBikePicture>
        <IncidentDetails>
          <IncidentTitle>{this.props.data.title}</IncidentTitle>
          <IncidentDesc>{this.props.data.description}</IncidentDesc>
          <IncidentInfo><strong>Location: </strong> {this.props.data.address}</IncidentInfo>
          <IncidentInfo><strong>Occurred at: </strong> {occurredAt}</IncidentInfo>
        </IncidentDetails>
      </IncidentWrapper>
    );
  }
}

export default IncidentItem;
