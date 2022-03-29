import styles from "../styles/Home.module.css"
import Link from "next/link"

const Home = () => {
	return (
		<>
			<header className={styles.header}>
				<span className={styles.heading}>Greeen Shop</span>
			</header>

			<main className={styles.main}>
				<div className="description">
					Green shop is an e-commerce platforms for farmers across the country,
					used to establish a market for everyone and everything.
				</div>
				<div>
					<Link href="/test" passHref={true}>
						<button className={styles.button}>Test the API</button>
					</Link>
				</div>
			</main>
		</>
	)
}

export default Home
