import React, {Component} from 'react';
import {Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Row} from 'reactstrap';
import Container from "reactstrap/es/Container";

const items = [
    {
        src: 'https://s3.amazonaws.com/cake-corp-s3.trycake.com/wp-content/uploads/2017/01/iStock-527912462-1.jpg',
        altText: 'Slide 1',
        caption: 'Sysco LABS '
    },
    {
        src: 'https://visitsunsetcountry.com/sites/default/files/styles/big/public/sysco-food-services-inc/sysco-facility.jpg?itok=MCrMTWjK',
        altText: 'Slide 2',
        caption: 'Sysco LABS '
    },
    {
        src: 'http://igonsol.com/wp-content/uploads/2018/08/cover-copy3.jpg',
        altText: 'Slide 3',
        caption: 'Sysco LABS '
    }
];

class CarouselComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {activeIndex: 0};
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex: nextIndex});
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({activeIndex: nextIndex});
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({activeIndex: newIndex});
    }

    render() {
        const {activeIndex} = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} width="1200" height="600"/>
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
                </CarouselItem>
            );
        });

        return (
            <Row>
                <Col sm="12" md={{size: 11, offset: 1}}>
                    <Container>
                        <Carousel
                            activeIndex={activeIndex}
                            next={this.next}
                            previous={this.previous}
                        >
                            <CarouselIndicators items={items} activeIndex={activeIndex}
                                                onClickHandler={this.goToIndex}/>
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
                        </Carousel>
                    </Container>
                </Col>

            </Row>


        );

    }
}


export default CarouselComponent;