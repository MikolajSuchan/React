import TabButton from './TabButton.jsx';
import {useState, Fragment} from 'react';
import{EXAMPLES} from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';




export default function Examples(){

     const [selectedTopic, setSelectedTopic] = useState();
    
      let tabContent = 'Please, select the content';
      if(selectedTopic){ 
                tabContent = <div id="tab-content">
                <h3> {EXAMPLES[selectedTopic].title} </h3>
                <p> {EXAMPLES[selectedTopic].description} </p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
              };
    
      function handleClick(selectedButton){
        console.log(selectedButton);
        setSelectedTopic(selectedButton);
        tabContent = selectedButton;
      };

    return(
        <>
        <Section id="examples" title='Examlpes'>
          <Tabs ButtonsContainer="menu" buttons={
            <>
              <TabButton isSelected={selectedTopic==='components'} onAnyEventWeWant={()=>handleClick('components')}>Components</TabButton>
              <TabButton isSelected={selectedTopic==='jsx'} onAnyEventWeWant={()=>handleClick('jsx')}>JSX</TabButton>
              <TabButton isSelected={selectedTopic==='props'} onAnyEventWeWant={()=>handleClick('props')}>Props</TabButton>
              <TabButton isSelected={selectedTopic==='state'} onAnyEventWeWant={()=>handleClick('state')}>State</TabButton>
            </>}>
            {tabContent}
          </Tabs>
        </Section>
        </>

    );

    
}