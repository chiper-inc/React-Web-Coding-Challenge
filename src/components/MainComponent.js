import React, { Component } from 'react';
import Incidents from './IncidentsComponent';
import IncidentDetail from './IncidentDetailComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchData } from '../redux/ActionCreators';



const mapStateToProps = state => {
  return {
    data: state.data,
    
  }
}

 
const mapDispatchToProps = dispatch => ({

  fetchData: () => { dispatch(fetchData())}
  
});


class Main extends Component {
   constructor(props) {
      super(props);
  
      this.state = {
        incidents:null
      };}

    componentDidMount() {
      this.props.fetchData();
  
    }
  
    
render() {




  const incidentWithId = ({incidentId}) => {
    return(
      <IncidentDetail incident={this.props.data.data.filter((item) => item.id === incidentId)[0]}
      isLoading={this.props.data.isLoading}
      errMess={this.props.data.errMess}
    
    />
    );
  };


  return (
    <div>
      <div>

              <Switch location={this.props.location}>
                  <Route path='/' component={()=><Incidents  incidents={this.props.data}/>} />
                  <Route path='/case/:incidentId' component={incidentWithId} />
               <Redirect to="/home" />
              </Switch>  
      </div>
      <Footer />
    </div>
  );
}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));