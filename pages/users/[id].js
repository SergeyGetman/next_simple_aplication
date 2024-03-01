import { useRouter } from "next/router";
import style from "../../style/user.module.scss";
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
  const router = useRouter();
  const { query } = router;
  return (
    <MainContainer keywords={user.name}>
      <div className={style.user__block}>
        <h1>{`Пользователь №: ${query.id}`}</h1>
        <div className={style.user__block__name}>
          <div>{`Name User: ${user.name}`}</div>
        </div>
      </div>
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
