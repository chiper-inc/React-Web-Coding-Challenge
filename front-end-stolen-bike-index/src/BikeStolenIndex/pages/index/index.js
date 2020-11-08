import React, {Component} from 'react';
import { Pagination } from 'react-bootstrap';
import { ArticleResumen } from '../../../components/articleResume/articleResume'; 

class IndexPage extends Component {

    constructor(props) {
        super(props);
        this.state = { };
      }

    render() {

        return(
            <div className="internalContainer">

                <ArticleResumen image="" title="{}" date ="{}" >
                    description1
                </ArticleResumen>

                <ArticleResumen image="{}" title="{}" date ="{}" >
                    description2
                </ArticleResumen>
    
                <Pagination>
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
                
            </div>
        )};
}

export default IndexPage;