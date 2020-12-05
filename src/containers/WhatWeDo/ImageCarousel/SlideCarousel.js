import React from 'react';



class SlideCarousel extends React.Component{
    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="3000">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    <li data-target="#myCarousel" data-slide-to="4"></li>
                    <li data-target="#myCarousel" data-slide-to="5"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img src="http://lorempixel.com/600/200/" alt="slid0" className="img-responsive"></img>
                        <div class="carousel-caption"></div>
                    </div>
                    <div className="item">
                        <img src="http://lorempixel.com/600/200/" alt="slid1" className="img-responsive"></img>
                        <div className="carousel-caption"></div>
                    </div>
                    <div className="item">
                        <img src="http://lorempixel.com/600/200/" alt="slid2" className="img-responsive"></img>
                        <div className="carousel-caption"></div>
                    </div>
                    <div className="item">
                        <img src="http://lorempixel.com/600/200/" alt="slid3" className="img-responsive"></img>
                        <div className="carousel-caption"></div>
                    </div>
                    <div className="item">
                        <img src="http://lorempixel.com/600/200/" alt="slid4" className="img-responsive"></img>
                        <div className="carousel-caption"></div>
                    </div>
                    <div className="item">
                        <img src="http://lorempixel.com/600/200/" alt="slid5" className="img-responsive"></img>
                        <div className="carousel-caption"></div>
                    </div>
                </div>
            </div>
        )
    }

}
export default SlideCarousel;