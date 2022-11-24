import React from 'react'
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import { SimpleCarouselBox } from './style';
import right from '../../assets/right.svg'
import left from '../../assets/left.svg'
function DoubleCarousel({ children, show }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);



  return (
    <SimpleCarouselBox>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        infinite={true}
        disableNavIfAllVisible={false}
        hideNavIfAllVisible={false}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'none',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            marginLeft: 20,
            transform: 'translateY(-70px)',
          },
          children: <img src={right} alt="" />,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'none',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            marginRight: 20,
            transform: 'translateY(-70px)',
          },
          children: <img src={left} alt="" />,
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              transform: 'scale(0.7)',
              height: 15,
              width: 10.5,
              borderRadius: "100%",
              border: '1px solid #AA8232',
              background: 'white',
            }
          },
          activeItemBtnProps: {

            style: {
              transform: 'scale(0.7)',
              height: 14,
              width: 22.5,
              borderRadius: "10px",
              border: 0,
              background: "#AA8232",


            }
          }
        }}

        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 1,
            minWidth: 1268,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {children}
      </ReactSimplyCarousel>
    </SimpleCarouselBox>
  );

}
export default DoubleCarousel