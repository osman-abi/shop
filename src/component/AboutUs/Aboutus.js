/**
 *  About Us Page
 */
import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import AboutBanner2 from '../../widgets/AboutBanner2';
import BrandLogoSlider2 from '../../widgets/BrandLogoSlider2';
import InterestingFacts from '../../widgets/InterestingFacts';
import OurTeam from '../../widgets/OurTeam';
import PageTitle from '../../widgets/PageTitle';

const ourteam = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
    }
    }
  ]

};

class Aboutus extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="site-content">
                <div className="inner-intro header_intro header_intro_bg-image header_intro_opacity header_intro_opacity-custom">
                    <Container>
                        <div className="row intro-title align-items-center intro-section-center">
                         <PageTitle title="About Us"/>
                        </div>
                    </Container>
                </div>
                <div className="content-wrapper">
                    <AboutBanner2 />
                    
                </div>
            </div>
        )
    }
}
export default Aboutus;
