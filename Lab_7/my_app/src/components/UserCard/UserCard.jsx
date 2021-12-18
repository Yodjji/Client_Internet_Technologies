import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../Avatar/Avatar";
import { getGender } from "../../Utils/getGender";
import { parseDate } from "../../Utils/parseDate";
import {
  addToFriendList,
  checkIsInList,
} from "../../store/reducers/bestFriends";
import styles from "./UserCard.module.css";
import { useState } from "react";

const UserCard = ({
  userObject,
  img,
  name,
  id,
  gender,
  dob,
  location,
  email,
  phone,
  friends,
}) => {
  const { isInList, inFriendList } = useSelector(
    (state) => state.friends
  );



  const dispatch = useDispatch();

  const addFriend = (obj) => {
    dispatch(checkIsInList(obj));
    
    if (isInList === false) {
      dispatch(addToFriendList(obj));
      obj["friend"] = "friend"
      dispatch(checkIsInList(obj));
    }
  };

  return (
    <div className={styles.card} key={id}>
      <div className={styles.cardHead}>
        <Avatar image={img} />
        {/* <span>{userObject.friend}</span> */}
        <h3 className={styles.headTitle}>
          {name.title} {name.first} {name.last}
        </h3>

        {inFriendList === false && (
          <button onClick={() => addFriend(userObject)}>
            Add to best friends
          </button>
        )}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.bodyItem}>
          <p className={styles.text}>Пол: {getGender[gender]}</p>
        </div>
        <div className={styles.bodyItem}>
          <p className={styles.text}>
            Адрес: {location.country} {location.state} {location.city}{" "}
            {location.street.name}, <span>{location.street.number}</span>
          </p>
        </div>
        <div className={styles.bodyItem}>
          <p className={styles.text}>Дата рождения: {parseDate(dob.date)}</p>
        </div>
        <div className={styles.bodyItem}>
          <p className={styles.text}>Email: {email}</p>
        </div>
        <div className={styles.bodyItem}>
          <p className={styles.text}>Возраст: {dob.age} лет</p>
        </div>
        <div className={styles.bodyItem}>
          <p className={styles.text}>Телефон: {phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;