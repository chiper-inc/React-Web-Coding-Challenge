import React, {Component} from 'react';
import { connect, } from 'react-redux';
import BikeStolenIndex from './BikeStolenIndex';

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});


export const BikeStolenIndexContainer =  connect(mapStateToProps, mapDispatchToProps)(BikeStolenIndex); ;