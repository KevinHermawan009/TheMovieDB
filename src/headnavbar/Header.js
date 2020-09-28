import React from 'react';
import './Header.css';
import 'semantic-ui-css/semantic.min.css'


const Header = () => {
  return (
 
    <div className="ui secondary pointing menu" style={InStyles.headerStyle}>
        <img alt="avatar" className="iconHeader" src={require("../image/tmdbSVG.svg")} />
        <div class="dropdown">
            <button class="dropbtn">Movies
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="/ApprovalCard" class="dropContent">Popular</a>
                <a href="#" class="dropContent">Now Playing</a>
                <a href="#" class="dropContent">Upcoming</a>
                <a href="#" class="dropContent">Top Rated</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">TV Shows
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="#" class="dropContent">Popular</a>
                <a href="#" class="dropContent">Airing Today</a>
                <a href="#" class="dropContent">On TV</a>
                <a href="#" class="dropContent">Top Rated</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">People
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="#" class="dropContent">Popular People</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">More
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="#" class="dropContent">Discussion</a>
                <a href="#" class="dropContent">Leaderboard</a>
                <a href="#" class="dropContent">Support</a>
                <a href="#" class="dropContent">API</a>
            </div>
        </div>

    </div>
  )

};
let InStyles = {
  headerStyle: {
    backgroundColor: 'black',
  },
}
export default Header;