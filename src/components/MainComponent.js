import React, { Component } from 'react';
import Incidents from './IncidentsComponent';
import IncidentDetail from './IncidentDetailComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchData, postQuery } from '../redux/ActionCreators';



const mapStateToProps = state => {
  return {
    incidents: state.incidents,
    
  }
}

 
const mapDispatchToProps = dispatch => ({

  fetchData: () => { dispatch(fetchData())},
  postQuery: (query) => dispatch(postQuery(query)),
  
});


class Main extends Component {


    componentDidMount() {
      this.props.fetchData();
  
    }
  
    
render() {




  const IncidentWithId = ({match}) => {
    return(
     
      <IncidentDetail incident={this.props.incidents.incidents.incidents.filter((incident) => incident.id.toString()===match.params.incidentId)[0]}
      isLoading={this.props.incidents.incidents.isLoading}
      errMess={this.props.incidents.incidents.errMess}
    
    />
    );
  };


  return (
    <div>
      <Header postQuery={this.props.postQuery} />
      <div>

              <Switch >
                  <Route path="/cases" component={()=><Incidents  incidents={this.props.incidents}/>}/>
                  <Route  path="/case/:incidentId" component={IncidentWithId}/>
               <Redirect to="/cases" />
              </Switch>  
      </div>
      <Footer />
    </div>
  );
}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));