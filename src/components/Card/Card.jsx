import React from 'react';
import './Card.scss'

import { AiFillHeart } from "react-icons/ai";
import { MdOutlineLocalGroceryStore, MdOutlineInsertChartOutlined } from "react-icons/md";

const Card = () => {
    return (
        <>
          <div className="card">
                <div className="card__wrapper">

                </div>
              <img src="" alt="" className="card__images"/>
              <h5 className="card__name">

              </h5>
              <p className="card__desc">
                  {

                  }

              </p>
              <div className="availability">

              </div>
              <div className="card__block">
                  <div className="card__left">

                      <p className="card__price ">
                          10 020 рублей
                      </p>
                  </div>
                  <div className="card__right">

                      <AiFillHeart className='card__favorites' type='button'/>
                      <MdOutlineInsertChartOutlined  className='card__comparison'/>
                      <button className="card__btn">
                          <MdOutlineLocalGroceryStore  className="card__btn-icons"/>
                      </button>
                  </div>
              </div>
          </div>
        </>
    );
};

export default Card;