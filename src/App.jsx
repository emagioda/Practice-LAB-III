import Table from './component/Table';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 }
  ];

  return (
    <div>
      <Table data={netIncomes} />
    </div>
  );
};

App.propTypes = {
  data: PropTypes.array,
};

export default App;
