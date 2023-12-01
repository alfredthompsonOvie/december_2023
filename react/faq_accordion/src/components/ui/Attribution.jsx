import styles from '../styles/Attribution.module.css'
function Attribution() {
	return (
		<div className={styles.attribution}>
			Challenge by{" "}
			<a
				href="https://www.frontendmentor.io?ref=challenge"
				target="_blank"
				rel="noreferrer"
			>
				Frontend Mentor
			</a>
			. Coded by{" "}
			<a
				href="https://github.com/alfredthompsonOvie"
				target="_blank"
				rel="noreferrer"
			>
				Alfred Thompson Ovie
			</a>
			.
		</div>
	);
}

export default Attribution;
