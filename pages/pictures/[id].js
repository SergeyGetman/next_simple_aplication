import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

export default function PicturesLifeUnique({ newParams }) {
  const router = useRouter();

  return (
    <>
      <MainContainer>
        <div>Empty Block</div>
      </MainContainer>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const newParams = await fetch(
      `https://fakestoreapi.com/products/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        return {
          props: {
            newParams: data,
          },
        };
      });
    return newParams;
  } catch (error) {
    console.error("www", error);
  }
}

// export async function getServerSideProps({ params }) {
//     console.log("111111", params);

//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${params.id}`
//     );
//     const user = await response.json();

//     return {
//       props: { user }, // will be passed to the page component as props
//     };
//   }
