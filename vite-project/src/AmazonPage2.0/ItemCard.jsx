function ItemCard({ description, amount, img }) {
  return (
    <div className="item-card">
      <div className="item-image">
        <img src={img} alt={description} />
      </div>

      <p className="item-description">
        {description}
      </p>

      <h2 className="item-price">
        KES {amount}
      </h2>

      <button className="cart-btn">
        Add to Cart
      </button>
    </div>
  );
}

export default ItemCard;