import ItemCard from "./ItemCard";

const data = [
  {
    description:
      "Jump Rope, Tangle-Free Rapid Speed Jumping Rope Cable with Ball Bearings for Women, Men, and Kids.",
    amount: 1157,
    img: "https://m.media-amazon.com/images/I/71wm42EtoNL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description:
      "BOOMIBOO Adjustable Jump Rope with Ball Bearings.",
    amount: 697,
    img: "https://m.media-amazon.com/images/I/71WhY22zw7L._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description:
      "SPORTBIT Adjustable Jump Rope for Fitness.",
    amount: 774,
    img: "https://m.media-amazon.com/images/I/71UzJ-BgpFL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description:
      "LED Light Up Jump Rope for Kids.",
    amount: 1679,
    img: "https://m.media-amazon.com/images/I/719M6JVne6L._AC_UL480_FMwebp_QL65_.jpg",
  },
];

function MainSection() {
  return (
    <div className="products">
      {data.map((product, index) => (
        <ItemCard
          key={index}
          description={product.description}
          amount={product.amount}
          img={product.img}
        />
      ))}
    </div>
  );
}

export default MainSection;