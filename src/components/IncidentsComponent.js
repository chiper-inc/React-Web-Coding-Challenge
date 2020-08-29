import { Loading } from "./LoadingComponent";
import React from "react";
import RenderTable from "./RenderTableComponent";

const Incidents = (props) => {
  if (props.incidents.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.incidents.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="red">{props.incidents.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else if (props.incidents.incidents.incidents.length === 0) {
    return (
      <div>
        <h4 className="m-auto noResults">No results</h4>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-8 m-auto">
              <h4 className="total">
                Total:{props.incidents.incidents.incidents.length}
              </h4>
            </div>
          </div>
          <div className="row ">
            <div className="col-12 col-md-10 m-auto  ">
              <RenderTable incidents={props.incidents.incidents.incidents} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};
export default Incidents;
