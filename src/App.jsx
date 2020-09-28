import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import {Home} from './components/DashboardContent/Home';
import  {MovieDetail} from './components/MovieDetail/MovieDetail';


// import Route from './navigation/Route';
import Header from './headnavbar/Header';

// function clickedButton(){
//   return 'CLICK ME!';
// }
// const buttonLogin = { text: 'Click Me' }
// const textLabel = { text: 'The Movie DB Project:' }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      long: null
    };
  }
  render() {
    // GELOCATION==========
    window.navigator.geolocation.getCurrentPosition(
      // position => console.log('position', position),
      position => this.setState({
        lat: position.coords.accuracy,
        long: position.coords.longitude
      }),
      err => console.log('Err', err)
    );
    return (
      <main className='App'>
                  {/* <Header /> */}
        <Switch className='App'>

          <Route path="/" component={Home} exact/>
          <Route path="/movie/:id" component={MovieDetail}/>
        </Switch>
      </main >


    );
  }
};
export default App;

