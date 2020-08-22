import React from 'react';
import { Link } from 'react-router-dom'

import './styles/Home.css'
import loading from '../images/loading.svg'

import IncidentsList from '../components/IncidentsList'
import { Button } from 'react-bootstrap';


class Home extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            nextPage: 1,
            loading: true,
            error: null,
            args: {
                city: '',
                initialDate:'',
                endDate:'',
            },
            data: {
                incidents: []
            }
        }
        
    }

    componentDidMount() {
        this.fetchIncidents()
    }

    fetchIncidents = async (args) => {
        this.setState({loading:true, error:null})
        try {
            let url=`https://bikewise.org:443/api/v2/incidents?page=${this.state.nextPage}&per_page=10`
            // union de parametros
            if (this.state.args.city) {
                url = url+`&proximity=${this.state.args.city}`   
            }
            if (this.state.args.initialDate) {
                let initialTime = new Date(this.state.args.initialDate).getTime() / 1000
                url = url+`&occurred_before=${initialTime}`
            }
            if (this.state.args.finalDate) {
                let finalTime = new Date(this.state.args.finalDate).getTime() / 1000
                url = url+`&occurred_after=${finalTime}`
            }

            const response = await fetch(url)
            const data = await response.json()
            
            console.log(data.incidents.length)

            this.setState({
                data: {
                    incidents: data.incidents
                },
                loading: false,
                nextPage: this.state.nextPage
            })
        } catch(error) {
            this.setState({
                error:error,
                loading:false
            })
        }
    }

    componentWillUnmount() {
        clearTimeout(this.clearTimeoutId)
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log({
        //     prevProps: prevProps, prevState: prevState
        // })

        // console.log({
        //     props: this.props,
        //     state: this.state
        // })
    }

    render() {
        // console.log(this.state.data.incidents)
        if(this.state.error) {
            return (
                <div>
                    error
                </div>
            )
        }
        return (
            <div className="Incidents__list">
                <div className="Incidents__container">
                    <form>
                        <div className="container mb-3">
                            <h3 className="centerText">Filters</h3>
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="titleFilter">city</label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            onChange={e => {
                                                this.setState({args:{
                                                    city: e.target.value,
                                                    initialDate: this.state.args.initialDate,
                                                    endDate: this.state.args.endDate
                                                }})
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="titleFilter">Initial Date</label>
                                        <input 
                                            type="date" 
                                            className="form-control"
                                            onChange={e => {
                                                this.setState({args:{
                                                    city: this.state.args.city,
                                                    initialDate: e.target.value,
                                                    endDate: this.state.args.endDate
                                                }})
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="titleFilter">Initial Date</label>
                                        <input 
                                            type="date" 
                                            className="form-control"
                                            onChange={e => {
                                                this.setState({args:{
                                                    city: this.state.args.city,
                                                    initialDate: this.state.args.initialDate,
                                                    endDate: e.target.value
                                                }})
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <button
                                    className="btn btn-primary mx-auto" 
                                    type="button" 
                                    onClick={() => {
                                        this.setState({nextPage: 1})
                                        this.fetchIncidents()
                                    }}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                    {this.state.loading && (
                        <figure className="loadingState">
                            <img src={loading} alt="loading"/>
                        </figure>
                    )}
                    {!this.state.loading && (
                        <div className="container">
                            <IncidentsList incidents={this.state.data.incidents}/>
                            <div className="buttonsPage mb-3">
                                {this.state.nextPage >  1 && (
                                    <button
                                        className="btn btn-primary mr-2" 
                                        type="button"
                                        onClick={() => {
                                            this.setState({nextPage: this.state.nextPage-1})
                                            this.fetchIncidents()
                                        }}
                                    >
                                        Previous Page
                                    </button>     
                                )}
                                {this.state.data.incidents.length != 0 && (
                                    <button
                                        className="btn btn-primary" 
                                        type="button" 
                                        onClick={() => {
                                            this.setState({nextPage: this.state.nextPage+1})
                                            this.fetchIncidents()
                                        }}
                                    >
                                        Next Page
                                    </button>
                                )}
                            </div> 
                        </div>
                    )}
                </div>
            </div>   
        )
    }

}

export default Home