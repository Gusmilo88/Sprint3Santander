import React, { useState, useEffect } from "react";
import Layouts from "../../layouts";
import Tables from "../../components/Tables";
import VistaSelector from "../../components/VistaSelector";
import axios from 'axios';

const Stats = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('src/data/data.json')
      .then(response => {
        setEvents(response.data.events);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);


  return (
    <>
      <Layouts>
        <VistaSelector title="Stats" arrowLeft="/contact" arrowRight="/"/>
        <Tables events={events}/>
      </Layouts>
    </>
  );
};

export default Stats;
