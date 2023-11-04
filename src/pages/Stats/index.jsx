import { useState, useEffect } from "react";
import Layouts from "../../layouts";
import Tables from "../../components/Tables";
import VistaSelector from "../../components/VistaSelector";
import axios from 'axios';

const Stats = () => {

  //Para sacar MAYOR porcentaje:
  let [highestAttendanceEvent, setHighestAttendanceEvent] = useState(null);
  let [highestAttendancePercentage, setHighestAttendancePercentage] = useState(0);

  //Para sacar el MENOR porcentaje:
  let [lowestAttendanceEvent, setLowestAttendanceEvent] = useState(null);
  let [lowestAttendancePercentage, setLowestAttendancePercentage] = useState(100); // Inicialízalo en 100%

  //Para sacar el que tiene MÁS capacidad:
  let [largestCapacityEvent, setLargestCapacityEvent] = useState(null);
  let [largestCapacity, setLargestCapacity] = useState(0);

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

        if (attendancePercentage < lowestAttendancePercentage) {
          lowestAttendancePercentage = attendancePercentage;
          lowestAttendanceEvent = event;
        }

        // Si la capacidad actual es mayor, actualizamos largestCapacity y largestCapacityEvent con los nuevos valores.
        if (event.capacity > largestCapacity) {
          largestCapacity = event.capacity;
          largestCapacityEvent = event;
        }
      }

      setHighestAttendanceEvent(maxAttendanceEvent);
      setHighestAttendancePercentage(maxAttendancePercentage);
      setLowestAttendanceEvent(lowestAttendanceEvent);
      setLowestAttendancePercentage(lowestAttendancePercentage);
      setLargestCapacityEvent(largestCapacityEvent);
      setLargestCapacity(largestCapacity);

      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);


  return (
    <>
      <Layouts>
        <VistaSelector title="Stats" arrowLeft="/contact" arrowRight="/"/>
        <Tables events={events} highestAttendanceEvent={highestAttendanceEvent} highestAttendancePercentage={highestAttendancePercentage} lowestAttendanceEvent={lowestAttendanceEvent} lowestAttendancePercentage={lowestAttendancePercentage} largestCapacityEvent={largestCapacityEvent} largestCapacity={largestCapacity} />
      </Layouts>
    </>
  );
};

export default Stats;
