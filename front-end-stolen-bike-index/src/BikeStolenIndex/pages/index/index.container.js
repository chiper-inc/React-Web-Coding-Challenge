import React, {Component} from 'react';
import { connect } from 'react-redux';
import IndexPage from './index';

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

export const IndexPageC = connect(mapStateToProps, mapDispatchToProps)(IndexPage)
//export const IndexPageC = IndexPage;