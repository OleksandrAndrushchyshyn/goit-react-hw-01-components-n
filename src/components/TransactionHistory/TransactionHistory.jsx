import PropTypes from "prop-types";
import style from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <>
      <table className={style.transaction}>
        <thead className={style.transaction__history}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((trans, idx) => (
            <tr
              key={trans.id}
              style={{
                backgroundColor: idx % 2 === 0 ? "rgb(219, 211, 211)" : "white",
              }}
            >
              <td>{trans.type}</td>
              <td>{trans.amount}</td>
              <td>{trans.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
