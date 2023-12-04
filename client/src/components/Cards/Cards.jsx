import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { getAllDogs } from "../../redux/actions";
import style from './Cards.module.css'

const Cards = () =>  {

    const dispatch = useDispatch();
    const { allDogs } = useSelector((state) => state);

    React.useEffect (() => {
        dispatch(getAllDogs());
    }, [])

    return(
        <div className={style.CardsList}>
          {
             allDogs?.map((Dog) => {
                return(
                    <Card
                       key={Dog?.id}
                       id={Dog?.id}
                       name={Dog?.name}
                       temperament={Dog?.temperament}
                       height={Dog.height.imperial}
                       weight={Dog?.weight.imperial}
                       image={Dog?.reference_image_id}
                       //image={imageUrls[Dog.id]}
                    />
                )
             })
          }


        </div>
    )
}

export default Cards;