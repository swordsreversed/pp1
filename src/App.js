import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GridLayout from "react-grid-layout";
import _ from "lodash";
import imageArray from './images.js';

// import logo from './pp1.png';
// import action1 from './Action_03.png';
// import shape1 from './Shape_02.png';

function App() {

  const [items] = useState(8);
  const [images] = useState(imageArray);
  return (
    <div className="App">   
    <header>
       <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/drag">Participants</Link>
          </li>
        
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home items={items} images={images} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/participants">
            <Participants />
          </Route>
       
        </Switch>
      </div>
    </Router>
    </header> 
      
      
    </div>
  );
}

function Home(props) {
  const { items, images } = props;
    //  const layout = [
    //   { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
    //   { i: "b", x: 1, y: 4, w: 1, h: 1 },
    //   { i: "c", x: 5, y: 0, w: 1, h: 1, isResizable: true }
    // ];
    const layout = generateLayout(items);
    return (
     <GridLayout
        className="layout"
        items={items}
        layout={layout}
        allowOverlap={true}
        cols={16}
        rowHeight={50}
        width={1200}
        autoSize={true}
      >
        {generateDOM(items, images)}
      </GridLayout>
    );
}

function Participants() {
  return (
    <div>
    <h2>Participants</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function generateLayout(items) {
    return _.map(new Array(items), function(item, i) {
      const w = Math.ceil(Math.random() * 4);
      const y = Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: w,
        h: y,
        i: i.toString()
      };
    });
  }

  function generateDOM(items, images) {

    let els = _.map(images, function(image, i) {
      return (
        <div key={i}>
          <span><img draggable={false} className="midsize" src={image} alt="" /></span>
        </div>
      );
    });
    return (
      els
    )
  }


export default App;
