

const Tables = () => {
  return (
    <div>
      {/* Tabla Events statistics */}
      <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th colSpan={4}>Events statistics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>

        {/* Tabla Events statistics */}
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th colSpan={4}>Upcoming events statistics by category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>

        {/* Tabla Events statistics */}
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th colSpan={4}>Past events statistics by category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Tables
