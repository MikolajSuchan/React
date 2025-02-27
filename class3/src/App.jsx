import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {

  console.log('Rendering App');

  return (
    <>
      <Header />
      <main>
        <CoreConcepts></CoreConcepts>


        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
