/* eslint-disable */
import React, { useState } from 'react';
import IncidentItem from '../incident_item/incident_item';
import Paginator from '../paginator/paginator';
import SearchBar from '../search_bar/search_bar';
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
      query: '',
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
    this.searchIncident = this.searchIncident.bind(this);
  }

  async getIncidentsList() {
    this.setState({isLoaded: false});
    this.setState({queryError: false});

    const queryParams = `proximity=${this.state.proximity}&incident_type=${this.state.incidentType}&per_page=${this.state.resultsLimit}&query=${this.state.query}&occurred_before=${this.state.occurredBefore}&occurred_after=${this.state.occurredAfter}`;

    await API.get(`incidents/?${queryParams}`).then((res) => {
      this.setState({
        incidents: res.data.incidents,
        totalIncidents: res.data.incidents.length,
        isLoaded: true
      });
      if (res.data.incidents.length === 0) {
        this.setState({ queryError: true });
        console.log("no results");
      };
    }).catch((err) => {
      this.setState({ queryError: true });
      throw (err);
    });
  }

  async componentDidMount() {
    await this.getIncidentsList();
    await this.paginate();
  }

  async updatePage(newPage) {
    await this.setState({ pageNumber: newPage });
    this.paginate();
  }

  async searchIncident(query) {
    await this.setState({
      query: query.query,
      occurredAfter: query.occurredAfter,
      occurredBefore: query.occurredBefore
    });
    await this.getIncidentsList();
    await this.paginate();
  }

  paginate() {
    this.setState({
      pagedIncidents: this.state.incidents.slice((this.state.pageNumber - 1) * this.state.itemsPerPage, this.state.pageNumber * this.state.itemsPerPage),
      totalPages: Math.ceil(this.state.totalIncidents / this.state.itemsPerPage)
    });
  }

  listIncidents() {
    return this.state.pagedIncidents.map((data, key) => {
      return <IncidentItem data={data} key={key} />;
    });
  }

  render() {
    let selectedTemplate;
    let paginatorTemplate;

    if (this.state.totalPages > 1) {
      paginatorTemplate = (<Paginator updatePage={this.updatePage} pageNumber={this.state.pageNumber} totalPages={this.state.totalPages} />);
    }

    const loadingTemplate = (
      <React.Fragment>
        <LoadingSpinner src="spinner.gif" alt="Loading..." />
      </React.Fragment>
    );

    const listTemplate = (
      <React.Fragment>
        <TotalIncidents>{this.state.totalIncidents} incidents found</TotalIncidents>
        {this.listIncidents()}
        {paginatorTemplate}
      </React.Fragment>
    );

    const errorTemplate = (
      <React.Fragment>
        <TotalIncidents>No results matching your search were found</TotalIncidents>
      </React.Fragment>
    );

    if (this.state.isLoaded && !this.state.queryError) { selectedTemplate = listTemplate; }
    else if (this.state.isLoaded && this.state.queryError) { selectedTemplate = errorTemplate; }
    else { selectedTemplate = loadingTemplate; }

    return (
      <React.Fragment>
        <SearchBar query={this.searchIncident} />
        <MainWrapper>
          {selectedTemplate}
        </MainWrapper>
      </React.Fragment>
    );
  }
}
