import { useState, useEffect } from "react";
import Layouts from "../../layouts";
import Tables from "../../components/Tables";
import VistaSelector from "../../components/VistaSelector";
import axios from 'axios';

const Stats = () => {

  let [highestAttendanceEvent, setHighestAttendanceEvent] = useState(null);
  let [highestAttendancePercentage, setHighestAttendancePercentage] = useState(0);


  let [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('src/data/data.json')
      .then(response => {
        
        let events = response.data.events;

        // Encuentra el evento con el mayor porcentaje de asistencia
        let maxAttendanceEvent = null;
        let maxAttendancePercentage = 0;

        for (let event of events) {
         let attendancePercentage = (event.assistance / event.capacity) * 100;

        if (attendancePercentage > maxAttendancePercentage) {
          maxAttendancePercentage = attendancePercentage;
          maxAttendanceEvent = event;
        }
      }

      setHighestAttendanceEvent(maxAttendanceEvent);
      setHighestAttendancePercentage(maxAttendancePercentage);

      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);


  return (
    <>
      <Layouts>
        <VistaSelector title="Stats" arrowLeft="/contact" arrowRight="/"/>
        <Tables events={events} highestAttendanceEvent={highestAttendanceEvent} highestAttendancePercentage={highestAttendancePercentage} />
      </Layouts>
    </>
  );
};

export default Stats;
