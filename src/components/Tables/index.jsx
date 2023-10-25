const Tables = () => {
  return (
    <div>
      {/* Tabla Events */}
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th colSpan={3}>Events statistics</th>
          </tr>
          <tr>
            <th>Events with the highest percentage of attendance</th>
            <th>Events with the lowest percentage of attendance</th>
            <th>Events with the largest capacity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>3</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
