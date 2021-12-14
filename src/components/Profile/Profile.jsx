import PropTypes from "prop-types";
import defaultImg from "../../images/DefaultImg.png";
import style from "./Profile.module.css";
export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={style.profile}>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className={style.name}>{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.stats__item}>
          <span className={style.label}>Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={style.stats__item}>
          <span className={style.label}>Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={style.stats__item}>
          <span className={style.label}>Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.defaultProps = {
  avatar: defaultImg,
  // "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
