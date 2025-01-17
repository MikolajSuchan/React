import React from 'react';
import './styles.css';
import Card from './Card';
 
// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <h1>Exercise with component Card</h1>
           
            <Card>
              {/* <Card> ... </Card> */}
              <p>Welcome to the excercise.</p>
            </Card>
           
            <ul>
              <li className="todo">
                <Card>
                <h2>Front End Frameworks</h2>
                  <p>React, Angular, Vue.js</p>
                </Card>
              </li>
              <li className="todo">
                <Card>
                  <h2>LANGUAGES</h2>
                  <p>C#, CSS, JS, HTML</p>
                </Card>
              </li>
            </ul>
        </div>
    );
}