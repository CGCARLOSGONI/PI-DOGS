// import './Card.css';
import style from './Card.module.css'

const Card = ({id, name, temperament, weight, image }) => {
    const baseUrl = "https://cdn2.thedogapi.com/images/";
    const imageUrl = `${baseUrl}${image}.jpg`;
    return(
        <div className={style.CardContainer}>
            <h3 className={style.name}>{name}</h3>
            <img className={style.image} src={imageUrl} alt={name}/>
            <h3 className={style.temperament}>Temperament: {temperament}</h3>
            <h3 className={style.weight}>Weight:{weight}</h3>
        </div>
    )
}

export default Card;
