import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import carouselImage01 from '../../assets/carouselImage01.png'


import CarouselFooter from '../CarouselFooter';
import { MainCarousel } from './style';



const CarouselMain = () => {



    return (
        <>
            <MainCarousel>
                <AwesomeSlider>
                    <div>
                        <img src={carouselImage01} alt="" />
                        <a href="/#">COMPRAR</a>
                    </div>
                    <div>
                        <img src={carouselImage01} alt="" />
                        <a href="/#">COMPRAR</a>
                    </div>
                    <div>
                        <img src={carouselImage01} alt="" />
                        <a href="/#">COMPRAR</a>
                    </div>
                    <div>
                        <img src={carouselImage01} alt="" />
                        <a href="/#">COMPRAR</a>
                    </div>
                </AwesomeSlider>
            </MainCarousel>
            <CarouselFooter />
        </>
    )
}

export default CarouselMain;