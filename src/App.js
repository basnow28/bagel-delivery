import { Router } from 'react-router-dom'
import Routes from './routes'
import history from './services/history'
import GlobalStyles from './styles/global'
import { Provider } from 'react-redux'
import { store } from './store'
import Dashboard from './containers/Dashboard'
import React, { Component } from 'react'
import video from "./video/OnwardDeliveryV4.mp4"
import "./App.css"


//renders responsive video
const getVideoSrc = width => {
    if (width >= 1080) return video;
    if (width >=720) return video; //replace with tabletVideo
    return video; //replace with mobileVideo
}

/*
const Video = props => {
    const[isVideoLoaded, setIsVideoLoaded] = React.useState(false);
    const src = getVideoSrc(window.innerWidth);

    //Takes care of progressive video loading which helps people who have slower network connections
    const onLoadedData = () => {
        setIsVideoLoaded(true);
    }

    return (
        <div id="Landing page video" className="container">
            <img src = {thumb} className = "video-thumb tiny" alt="thumb" style={{opacity: isVideoLoaded ? 0: 1}}/>
            <video autoPlay muted loop playsInline="true" src={src} type='video/mp4' onLoadedData={onLoadedData}
            style={{opacity: isVideoLoaded? 1: 0}}/>
        </div>
        )
} */


const Video = props => {
    const src = getVideoSrc(window.innerWidth);
    return (
        <div id="Landing page video" className="videoContainer">
            <video autoPlay muted loop playsInline="true" src={video} type='video/mp4'/>
            <div className="textOverlayOnVideo">
                <p>Bæredygtig levering med ladcykel – hver dag</p>
            </div>
        </div>

    )
}


const Intro = () => {
    return (
        <div id="Landing page text" className="textContainer">
            <div className="introText">
                <p>Det kan være svært at regne på klimatiltag, og derfor har vi gjort det en smule lettere.</p>
                    <div className="deliveryImage"></div>
            </div>
        </div>
    )
}

const IntroImage = () => {
    return(
        <div className="imageContainer">
            <div className="deliveryImage"></div>
        </div>
    )
}


const WhoWeWorkWithSection = () => {
    return (
        <div id="WhoWeWorkWithSection" className="whoWeWorkWithContainer">
            <div className = "topBorder"></div>
            <div className = "whoWeWorkWithTitle">
                <span>Who we work with</span>
            </div>
            <div className="whoWeWorkWithSubHeading">
                <span>Et grønt fællesskab</span>
            </div>

            <div className="whoWeWorkWithText">
                <span>Vi arbejder ud fra troen på, at de bedste samarbejder kommer af en personlig relation. Det
                    betyder, at vi har et godt kendskab til vores samarbejdspartnere, og at vi ved, hvem vi siger
                    hej til, når vi kommer med friske varer. Fælles for alle er, at de støtter op om en grøn
                    omstilling og gerne vil være med til at gøre en forskel.</span>
            </div>

            <div className="clientsContainer">
                <div className="grid-item">1</div>
                <div className="grid-item">2</div>
                <div className="grid-item">3</div>
                <div className="grid-item">4</div>
                <div className="grid-item">5</div>
                <div className="grid-item">6</div>
                <div className="grid-item">7</div>
                <div className="grid-item">8</div>
                <div className="grid-item">9</div>
                <div className="grid-item">10</div>
                <div className="grid-item">11</div>
                <div className="grid-item">12</div>
                <div className="grid-item">13</div>
                <div className="grid-item">14</div>
                <div className="grid-item">15</div>
                <div className="grid-item">16</div>
                <div className="grid-item">17</div>
                <div className="grid-item">18</div>
            </div>

        </div>
    )
}


function App(){
    return (
        <div className="App">
            <div className="app-container">
                <Video />
                <Intro />
                <IntroImage />
                <WhoWeWorkWithSection />
            </div>
        </div>
    )
}



export default App;

/*
function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <Dashboard/>
        <GlobalStyles />
      </Router>
    </Provider>
  );
}

export default App;*/



