// library imports
import { useEffect } from "react/"
import { useRouter } from "next/router"
import { useState } from "react"

// component imports
import styles from "../../styles/Test.module.css"
import Product from "../../components/Product"
import AddProduct from "../../components/AddProduct"

const UserRoute = ({ id, user, products }) => {
	const [isPopping, setisPopping] = useState(false)

	return (
		<div className={styles.container}>
			<h1>
				{user.first_name} {user.last_name}
			</h1>
			<div className={styles.details}>
				<span>User_id : {user._id}</span>
				<span>Email : {user.email}</span>
				<span>Tel : {user.tel}</span>
			</div>

			<h3>{user.first_name}s products </h3>
			<div className="products">
				{products &&
					products.map((product, index) => {
						return <Product key={index} />
					})}
			</div>
			<AddProduct seller_id={user._id} />
		</div>
	)
}

export default UserRoute

export const getServerSideProps = async (context) => {
	const { id } = context.params

	const userJson = await fetch(
		`https://greeen-shop.vercel.app/api/user/${id}`,
		{ method: "GET" }
	)
	const userData = await userJson.json()
	const productsJson = await fetch(
		`https://greeen-shop.vercel.app/api/products/${id}`,
		{ method: "GET" }
	)
	const productsData = await productsJson.json()

	return {
		props: {
			id,
			user: userData.user,
			proucts: productsData.products,
		},
	}
}
