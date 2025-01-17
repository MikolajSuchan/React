import Header from "./components/Header/Header.jsx";
import componentsImg from './assets/components.png'
import {CORE_CONCEPTS,EXAMPLES} from './data.js';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import TabButton from "./components/TabButton.jsx";
import {useState} from 'react';

function App() {

  const[selectedTopic,setSelectedTopic]=useState();

  let tabContent='';

  if(selectedTopic){
    tabContent= 
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  };

  function handleClick(selectedButton){
    console.log(selectedButton); 
    setSelectedTopic(selectedButton);
    tabContent=selectedButton;
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept 
            {...CORE_CONCEPTS[0]}>
            </CoreConcept>
            <CoreConcept
            {...CORE_CONCEPTS[1]}>
            </CoreConcept>
            <CoreConcept
            {...CORE_CONCEPTS[2]}>
            </CoreConcept>
            <CoreConcept
            {...CORE_CONCEPTS[3]}>
            </CoreConcept>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==='components'} onAnyEventWeWant={()=>handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onAnyEventWeWant={()=>handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onAnyEventWeWant={()=>handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onAnyEventWeWant={()=>handleClick('state')}>State</TabButton>
          </menu>

          {!selectedTopic && <p>Please, select the button</p>}

          {tabContent}

        </section>
      </main>
    </div>
  );
}

export default App;
