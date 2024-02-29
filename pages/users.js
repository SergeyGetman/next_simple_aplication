import { useEffect, useState } from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";
import styling from "../style/user.module.css";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

const Users = ({ users }) => {
  console.log("users ssss", users);
  return (
    <MainContainer keywords={"page users"}>
      <h1>All users</h1>
      <div className={styling.user__list}>
        <div className={styling.user__list__user}>
          <ul>
            {users.map((el, idx) => {
              return (
                <>
                  <li key={idx}>
                    <AccessibilityIcon />
                    <Link href={`/users/${idx + 1}`}>
                      <h2>{el.name}</h2>
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: { users },
  };
}
