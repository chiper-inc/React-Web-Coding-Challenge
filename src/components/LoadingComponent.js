import React from 'react';
import{ Spinner} from 'reactstrap';

export const Loading = () => {
    return(
                    
                        <div className="col-10 m-auto loading">
                            <Spinner color="dark" className="mt-4 loading" />
                            <p>Loading...</p>
                        </div>
                   
         
    );
};