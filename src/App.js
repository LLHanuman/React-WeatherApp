import Header from './Component/Nav'
import Day1 from '../src/Component/Weather-Card/Day1'

// const api = {
//   key: 'fbc8e985054e180773f4354b72f8ad47',
//   base: 'api.openweathermap.org/data/2.5/'
// }

function App() {
  return (
    <div>
      <Header />
      <Day1 />
    </div>
  );
}

export default App;
