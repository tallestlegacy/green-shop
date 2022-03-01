import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.heading}>Greeen Shop</span>
      </header>

      <main className={styles.main}>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugiat
          beatae id quisquam fugit consequuntur eveniet, sint, vitae
          reprehenderit dolorum tenetur error nesciunt autem, repudiandae libero
          perspiciatis! Perspiciatis, sit velit?
        </div>
        <div>
          <Link href="/test">
            <button className={styles.button}>Test the API</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
