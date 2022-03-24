import React from 'react';
import { Item, ContentImg, MoreDetails } from './styles';
import { Byke } from '../BykeList';
import logo from '../../assets/images/bicycle.png';
import moment from "moment";

function ItemByke ({ thumb, title, description, date_stolen, stolen_location }: Byke) {
  return (
        <Item>
            <ContentImg>
                <img src={thumb || logo} alt=""/>
            </ContentImg>
            <MoreDetails>
                <h4>{title}</h4>
                <p>
                    {description || `There isn't description`}
                </p>
                <p>{stolen_location}</p>
                <span>{moment(date_stolen).format('MMMM Do YYYY, h:mm:ss a')}</span>
            </MoreDetails>
        </Item>
  );
}

export { ItemByke };
