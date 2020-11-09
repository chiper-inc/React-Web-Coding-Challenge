import React, {Component} from 'react';
import { connect } from 'react-redux';
import IndexPage from './index';
import {
    changeStatusLoad
  } from '../../../store/actions';

const mapStateToProps = state => ({
    loading: state.appBikeStole.ui.generalLoading,
});
const mapDispatchToProps = dispatch => ({
    changeStatusLoad: (status) => dispatch(changeStatusLoad(status))
});

export const IndexPageC = connect(mapStateToProps, mapDispatchToProps)(IndexPage)
//export const IndexPageC = IndexPage;