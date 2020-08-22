import React from 'react';

import IncidentDetails from './IncidentDetails'

class IncidentDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: {},
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({loading:true, error:null})
        try {
            const endpoint = `https://bikewise.org:443/api/v2/incidents/`
            const id = this.props.match.params.incidentId
            
            const response = await fetch(`${endpoint}/${id}`)
            const data = await response.json()
            this.setState({
                loading: false,
                data: data.incident
            })
            // console.log(this.state.data)
        } catch (error) {
            this.setState({loading:false, error:error})
        }
    }
    
    render() { 
        // console.log(this.state.data)
        return (
            <IncidentDetails
                incident={this.state.data}
                loading={this.state.loading}
            />
        )
    }
}
 
export default IncidentDetailsContainer;