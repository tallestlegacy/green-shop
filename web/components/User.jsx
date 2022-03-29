// library imports
import { useState } from "react"
import moment from "moment"

// component imports
import styles from "./User.module.css"
import Link from "next/link"

// component declaration
const User = (props) => {
	const { first_name, last_name, _id, email, password, tel, date } = props

	return (
		<Link href={`/test/${_id}`} passHref={true}>
			<div className={styles.user_container}>
				<span className={styles.name}>
					{first_name} {last_name}
				</span>
				<span className={styles.span}>Email : {email}</span>
				<span className={styles.span}>Tel : {tel}</span>
				<span className={styles.span}>Created {moment(date).fromNow()}</span>
			</div>
		</Link>
	)
}

export default User
