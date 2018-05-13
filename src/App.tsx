import * as React from 'react'; 
import { BrowserRouter as Router, Link, Route  } from 'react-router-dom';
import './App.css';
 

const Intro = () => (
  <div>
    <p className="App-intro">
        I just wanted to take hold of my namesake and domain.  
        I am professional Software Engineer @ <a href='http://www.bentley.com'>Bentley Systems, Inc.</a> 
        <br />
        In my spare time, I enjoy the following:
        <ul>
          <li>Baseball, go <a href="http://www.pittsburghpirates.com">bucs</a>.</li>
          <li>WWE</li>
          <li>Cooking</li>
          <li>Eating</li>
          <li>Fitness</li>
        </ul>
        I am also creating this website to dabble in various frameworks in my spare time.  I was previously using Angular2+, but have no switched over to React.  Using a framework for a site like this is definitely overkill, but I want to have playground to test various technologies so here we are.
      </p>
  </div>
);
const Skills = () => (
  <div>
    <h2>Technical Skills</h2>
    <ul>
      <li>angularjs</li>
      <li>Angular2</li>
      <li>React</li>
      <li>ASP.NET</li>
      <li>Oracle</li>
      <li>SQL</li>
      <li>Grunt</li>
      <li>TFS/VSTS</li>
      <li>NPM</li>
      <li>Yarn</li>
    </ul>
  </div>
);
 
class App extends React.Component {
  
  public render() {
    return (
      <Router> 
        <div>
          <div className="App-header">
            <div className="App-title">
              seanamoroso.com
            </div>
            <div className="App-routing">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/skills">Technical Skills</Link>
                </li> 
              </ul>
            </div> 
          </div>
          <div className='App-content-wrapper'>
          <Route exact={true} path="/" component={Intro} />
          <Route path="/skills" component={Skills} /> 
          </div>
        </div>
        
      </Router> 
    );
  }
}

export default App;
