import React, { useState } from "react";
import SwiperCore, { Autoplay, Thumbs, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HistoryData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Autoplay, Thumbs, Pagination]);

const HistoryCarousel = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const historyThumbOptions = {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 0,
        speed: 1900,
        pagination: {
            el: "#testimonials-carousel-pagination",
            type: "bullets",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
    };
    const historyOptions = {
        speed: 1400,
        mousewheel: true,
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
        },
    };
    const { sectionContent, posts } = HistoryData;
    return (
        <section className="commonSection testimonial_2">
            <Container>
                <Row className="testimoniTab">
                    <Col lg={5}>
                        <h4 className="sub_title color_aaa">{sectionContent.subTitle}</h4>
                        <h2 className="sec_title white">{sectionContent.subTitle}</h2>
                        <Swiper
                            id="testimonial_2_thumb"
                            onSwiper={setThumbsSwiper}
                            {...historyThumbOptions}
                        >
                            {posts.map(({ name, designation, image }, index) => (
                                <SwiperSlide key={index}>
                                    <div className="control_item">
                                        <a href={`#tab_${index}`} data-toggle="tab">
                      <span>
                        <img src={image} alt={name} />
                      </span>
                                            <div className="author_detail">
                                                <h5>{name}</h5>
                                                <h6>{designation}</h6>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                    <Col lg={7}>
                        <div
                            className="swiper-pagination"
                            id="testimonials-carousel-pagination"
                        ></div>
                        <div className="tab-content">
                            <Swiper
                                thumbs={{ swiper: thumbsSwiper }}
                                {...historyOptions}
                            >
                                {posts.map(({ content, date }, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="testi_con">
                                            <p>{content}</p>
                                            <span>{date}</span>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HistoryCarousel;
