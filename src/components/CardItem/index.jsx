
import heart from '../../assets/heart.png'
import heart_2 from '../../assets/heart_2.png'
import rating from '../../assets/cards/rating.png'
import { ButtonComprar, ButtonComprarBox, CardImage, CardImageBox, CardInfos, CardTitle, FavoriteIcon, OffIcon, OldPrice, PriceWithCents, RatingStars, StyledCard } from './style'
import { useState } from 'react';

const CardItem = ({ image, title, real, cents, old, off }) => {
    const [favorite, setFavorite] = useState(false);

    function changeIcon(fav) {
        setFavorite(!favorite)
    }

    return (
        <StyledCard>
            <div className='flex'>
                {off ? <OffIcon>20%</OffIcon> : <OffIcon className='invisible'></OffIcon>}
                {favorite ? <FavoriteIcon onClick={changeIcon} src={heart_2} alt="adicionar aos favoritos" /> : <FavoriteIcon onClick={changeIcon} src={heart} alt="favoritado" />}

            </div>
            <CardImageBox>

                <CardImage src={image} alt={title} />
            </CardImageBox>
            <CardInfos>
                <CardTitle>{title}</CardTitle>
                <RatingStars src={rating} alt="star rating  " />
                <OldPrice className={old ? '' : 'invisible'}>{old}</OldPrice>
                <PriceWithCents>
                    <span className="real">{real}</span>
                    <span className="cents">{cents}</span>
                </PriceWithCents>
                <ButtonComprarBox>
                    <ButtonComprar>COMPRAR</ButtonComprar>
                </ButtonComprarBox>



            </CardInfos>
        </StyledCard>
    )
}

export default CardItem