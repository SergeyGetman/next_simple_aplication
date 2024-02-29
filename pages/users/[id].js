import { useRouter } from "next/router";
import style from "../../style/user.module.scss";
import MainContainer from "../../components/MainContainer";
import { Button } from "@mui/material";

export default function User({ user }) {
  const router = useRouter();
  const { query } = router;
  return (
    <MainContainer keywords={user.name}>
      <div className={style.block}>
        <h1>{`Пользователь number ${query.id}`}</h1>
        <div>{`Name User: ${user.name}`}</div>
      </div>
      <Button variant="contained">Contained</Button>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();

  return {
    props: { user },
  };
}
