const Tables = ({ events, highestAttendanceEvent, highestAttendancePercentage}) => {
  
  return (
    <div role="tables">
      {/* Tabla Events */}
      <div className="my-5">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th colSpan={3} className="text-center text-2xl">Events statistics</th>
          </tr>
          <tr>
            <th>Events with the highest percentage of assistance</th>
            <th>Events with the lowest percentage of assistance</th>
            <th>Events with the largest capacity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{highestAttendanceEvent ? highestAttendanceEvent.name : "No hay infomarción disponible"} {highestAttendancePercentage.toFixed(2)} %</td>
            <td></td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="my-5">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th colSpan={3} className="text-center text-2xl">Upcoming events statistics by category</th>
          </tr>
          <tr>
            <th>Categories</th>
            <th>Revenues</th>
            <th>Porcentage of attendance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      </div>


      <div className="my-5">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th colSpan={3} className="text-center text-2xl">Past events statistics by category</th>
          </tr>
          <tr>
            <th>Categories</th>
            <th>Revenues</th>
            <th>Porcentage of attendance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      </div>

    </div>
  );
};

export default Tables;
