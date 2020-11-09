import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DetailsPage from './details';
import {
    changeStatusLoad
  } from '../../../store/actions';

const mapStateToProps = state => ({
    loading: state.appBikeStole.ui.generalLoading,
});
const mapDispatchToProps = dispatch => ({
    changeStatusLoad: (status) => dispatch(changeStatusLoad(status))
});

export const DetailsPageC =  connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailsPage))
