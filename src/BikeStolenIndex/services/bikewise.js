import callApi from "../helpers/sendRequest";

export const ApiBikewise = {
      getIncidents ( data ) {
        let paramQuery="",
          params,
          paramdateafter="",
          paramdatebefore="";
      if(data){
        if(data.query){
          paramQuery ="&query="+data.query;
        }
        if(data.beforeDate){
          paramdateafter ="&occurred_before="+data.beforeDate;
        }
        if(data.aferteDate){
          paramdatebefore ="&occurred_after="+data.aferteDate;
        }
        params =paramQuery+paramdateafter+paramdatebefore+"&proximity=berlin&proximity_square=100&incident_type=theft";
    
      }else{
        params = "&proximity=berlin&proximity_square=100&incident_type=theft"
        }

        return callApi('incidents',{ method: 'GET'},{},params );
      },
      getIncident ( id ){
        return callApi('incidents/'+id,{ method: 'GET'});
      }
  };
  
