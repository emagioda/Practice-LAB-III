import PropTypes from 'prop-types';

const Table = ({ data }) => {

  const totalIncome = data.reduce((acum, item) => acum + item.income, 0);
  const averageIncome = totalIncome / data.length;

  const tableStyles = {
    width: '400px',
    textAlign: 'center'
  };

  return (
    <div >
      <table className="table" style={tableStyles}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Brand</th>
            <th scope="col">Income</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{item.brand}</td>
              <td>{item.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Average Income: {averageIncome.toFixed(2)}</p>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array,
};

export default Table;
