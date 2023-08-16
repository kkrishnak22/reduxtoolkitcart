import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const dummy = [
    {
      id: 1,
      title: "F Product",
      price: 179,
      description: "First Product des"
    },
    {
      id: 2,
      title: "S Product",
      price: 75,
      description: "Second Product des"
    }
  ];

  const allProducts = dummy.map((p) => {
    return (
      <ProductItem
        key={p.id}
        title={p.title}
        price={p.price}
        description={p.description}
      />
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{allProducts}</ul>
    </section>
  );
};

export default Products;
