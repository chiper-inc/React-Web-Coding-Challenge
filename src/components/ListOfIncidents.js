import React from "react";
import { Incident } from "./Incident";

export const ListOfIncidents = ({ incidents }) => {
  return (
    <>
      {incidents.map(({ id, title, description, date_stolen, stolen_location, large_img }) => (
        <Incident
          key={id}
          id={id}
          title={title}
          description={description}
          date_stolen={date_stolen}
          stolen_location={stolen_location}
          large_img={large_img}
        />
      ))}
    </>
  );
};
