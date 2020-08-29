/* eslint-disable */
import React, { useState } from 'react';
import IncidentItem from '../incident_item/incident_item';
import Paginator from '../paginator/paginator';
import API from '../../api';
import styled from '../../theme';

const LoadingSpinner = styled.img`
  width: 150px;
  height: 150px;
  display: block;
  margin: 0 auto;
`;

const TotalIncidents = styled.div`
  width: 900px;
  margin: 15px auto;
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
`;

const MainWrapper = styled.div``;

export default class IncidentsList extends React.Component {
  constructor() {
    super();
    this.state = {
      incidents: [],
      totalIncidents: 0,
      isLoaded: false,
      queryError: false,
      occurredBefore: '',
      occurredAfter: '',
      proximity: [52.513047, 13.404237],
      incidentType: 'theft',
      resultsLimit: 1000,
      itemsPerPage: 10,
      pageNumber: 1,
      totalPages: 0,
      pagedIncidents: []
    }
    this.updatePage = this.updatePage.bind(this);
  }

  async getIncidentsList() {
    await API.get(`incidents/?proximity=${this.state.proximity}&incident_type=${this.state.incidentType}&per_page=${this.state.resultsLimit}`).then((res) => {
      this.setState({ incidents: res.data.incidents });
      this.setState({ totalIncidents: res.data.incidents.length });
      this.setState({ isLoaded: true });
    }).catch((err) => {
      this.setState({ queryError: true });
      throw (err);
    });
  }

  async componentDidMount() {
    await this.getIncidentsList();
    await this.paginate();
    console.log(this.state.incidents);
  }

  updatePage = newPage => {
    this.setState({ pageNumber: newPage });
  }

  paginate() {
    this.setState({ pagedIncidents: this.state.incidents.slice((this.state.pageNumber - 1) * this.state.itemsPerPage, this.state.pageNumber * this.state.itemsPerPage) });
    this.setState({ totalPages: Math.ceil(this.state.totalIncidents / this.state.itemsPerPage) });
    console.log(this.state.totalPages);
  }

  listIncidents() {
    return this.state.pagedIncidents.map((data, key) => {
      return <IncidentItem data={data} key={key} />;
    });
  }

  render() {
    const loadingTemplate = (
      <React.Fragment>
        <LoadingSpinner src="spinner.gif" alt="Loading..." />
      </React.Fragment>
    );

    const listTemplate = (
      <React.Fragment>
        <TotalIncidents>{this.state.totalIncidents} incidents found</TotalIncidents>
        {this.listIncidents()}
      </React.Fragment>
    );

    const errorTemplate = (
      <React.Fragment>
        No results matching your search were found
      </React.Fragment>
    );

    let selectedTemplate;

    if (this.state.isLoaded) {
      selectedTemplate = listTemplate;
    } else if (this.state.queryError) {
      selectedTemplate = errorTemplate;
    } else {
      selectedTemplate = loadingTemplate;
    }

    return (
      <MainWrapper>
        {selectedTemplate}
      </MainWrapper>
    );
  }
}
