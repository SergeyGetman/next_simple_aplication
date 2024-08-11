import NavigateLink from "../components/NavigateLink";
import MainContainer from "../components/MainContainer";

export const PicturesLife = ({ products }) => {
  console.log("products", products);
  return (
    <>
      <MainContainer>
        <h1>THIS IS PICTURES</h1>

        {products.map((obj, idx) => {
          return (
            <div
              style={{
                color: "red",
                backgroundColor: "grey",
                margin: "10px",
              }}
            >
              <NavigateLink href={obj.image}>{obj.id}</NavigateLink>
              {`images ${obj.image}`}
              <div>{<img src={obj.image} />}</div>
            </div>
          );
        })}
      </MainContainer>
    </>
  );
};

export default PicturesLife;

export async function getStaticProps() {
  try {
    const products = await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        return {
          props: {
            products: data, // Set the fetched data to the 'products' prop
          },
        };
      });

    return products; // Return the object with 'props' property
  } catch (error) {
    console.error(error);
  }
}
