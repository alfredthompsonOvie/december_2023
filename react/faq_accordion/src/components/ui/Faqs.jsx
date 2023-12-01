import { useState } from "react";
import Faq from "./Faq";
import styles from "../styles/Faqs.module.css";

const faqs = [
	{
		question: "What is Frontend Mentor, and how will it help me?",
		answer:
			"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
		isOpen: false,
	},
	{
		question: "Is Frontend Mentor free?",
		answer:
			"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
		isOpen: false,
	},
	{
		question: "Can I use Frontend Mentor projects in my portfolio?",
		answer:
			"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
		isOpen: false,
	},
	{
		question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
		answer:
			"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
		isOpen: false,
	},
];
function Faqs() {
	const [curFaq, setCurFaq] = useState(null);

	function handleToggleFaq(faq) {
		setCurFaq((curFaq) => (curFaq === faq ? null : faq));
	}

	return (
		<div className={styles.faqs}>
			<h1 className={styles.faqsTitle}>
				<img src="/src/assets/images/icon-star.svg" alt="star icon" />
				<span>FAQs</span>
			</h1>

			{faqs.map((faq) => (
				<Faq
					faq={faq}
					key={faq.question}
					onHandleToggle={handleToggleFaq}
					curFaq={curFaq}
				/>
			))}
		</div>
	);
}

export default Faqs;
