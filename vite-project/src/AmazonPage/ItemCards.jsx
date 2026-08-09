function ItemCard(props) {
  const { description, amount, img } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        border: "2px solid rgba(0,0,0,0.2)",
        padding: "8px",
        margin: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img width="200px" src={img} alt={description} />
      </div>

      <div
        style={{
          textAlign: "left",
          fontSize: "12px",
        }}
      >
        {description}
      </div>

      <div
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
        KES {amount}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "15px",
        }}
      >
        <button
          style={{
            border: "1px solid rgba(0,0,0,0.2)",
            padding: "10px 20px",
            backgroundColor: "orange",
            color: "white",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;