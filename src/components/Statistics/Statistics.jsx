import PropTypes from "prop-types";
import style from "./Statistics.module.css";
export default function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={style.stats}>
        {stats.map((item) => (
          <li className={style.item} key={item.id}>
            <span className={style.label}>{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
