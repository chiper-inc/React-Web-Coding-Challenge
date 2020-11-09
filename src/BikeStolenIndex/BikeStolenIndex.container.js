import React, {Component} from 'react';
import { connect, } from 'react-redux';
import {
    changeStatusLoad
  } from '../store/actions';
import BikeStolenIndex from './BikeStolenIndex';

const mapStateToProps = state => ({
    loading: state.appBikeStole.ui.generalLoading,
});
const mapDispatchToProps = dispatch => ({

});


export const BikeStolenIndexContainer =  connect(mapStateToProps, mapDispatchToProps)(BikeStolenIndex); ;