import { FC } from "react";
import s from "./card.module.scss";
import img from "../../img/card_img.png";
import { IProduct } from "../../interfaces/Interfaces";

type PropTypes = {
  item: IProduct;
};

const Card: FC<PropTypes> = ({ item }) => {
  return (
    <div className={s.card}>
      <div className={s.card__img}>
        <img src={img} alt="card" />
        <div className={s.card__created}>
          <p>created by</p>
          <p className={s.created__initials}>{item.created_by.display_name}</p>
        </div>
        <div className={s.card__name}>{item.name}</div>
      </div>
      <div className={s.card__info}>
        <div className={s.info__titles}>
          <p>available</p>
          <p>price</p>
        </div>
        <div className={s.info__values}>
          <p>
            {item.quantity_available} of {item.quantity}
          </p>
          <p className={s.currency}>
            {item.initial_price} <span>ETH</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
