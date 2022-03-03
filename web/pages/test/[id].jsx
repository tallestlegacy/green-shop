// library imports
import { useEffect } from "react/";
import { useRouter } from "next/router";
import { useState } from "react";

const UserRoute = ({ id, user, products }) => {
  return (
    <div>
      {JSON.stringify(user, null, 2)}
      {JSON.stringify(products, null, 2)}
    </div>
  );
};

export default UserRoute;

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  const userJson = await fetch(
    `https://greeen-shop.vercel.app/api/user/${id}`,
    { method: "GET" }
  );
  const userData = await userJson.json();
  const productsJson = await fetch(
    `https://greeen-shop.vercel.app/api/products/${id}`,
    { method: "GET" }
  );
  const productsData = await productsJson.json();

  return {
    props: {
      id,
      user: userData.user,
      proucts: productsData.products,
    },
  };
};
