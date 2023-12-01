/* eslint-disable react/prop-types */

import styles from "../styles/Faq.module.css";

function Faq({ faq, onHandleToggle, curFaq }) {
	return (
		<section className={styles.faq}>
			<button
				className={styles.faqQuestion}
				onClick={() => onHandleToggle(faq.question)}
			>
				<span className={styles.faqQuestionContent}>{faq.question}</span>
				<img
					src={`/src/assets/images/icon-${
						curFaq === faq.question ? "minus" : "plus"
					}.svg`}
					alt={`${curFaq === faq.question ? "close" : "open"} icon`}
				/>
			</button>
			{curFaq === faq.question ? (
				<p className={styles.faqAnswer}>{faq.answer}</p>
			) : null}
		</section>
	);
}

export default Faq;
