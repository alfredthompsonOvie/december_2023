<template>
	<div class="faqs">
    <h1 class="faqsTitle">
				<img :src="getImageUrl('star')" alt="star icon" />
				<span>FAQs</span>
			</h1>
		<template v-for="faq in faqs">
			<FaqItem :faq="{ faq }" :curFaq="{curFaq}" @toggle-faq="onHandleToggle" />
		</template>
	</div>
</template>

<script setup>
import { ref } from "vue";
import FaqItem from "./FaqItem.vue";

const faqs = [
	{
		question: "What is Frontend Mentor, and how will it help me?",
		answer:
			"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
	},
	{
		question: "Is Frontend Mentor free?",
		answer:
			"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
	},
	{
		question: "Can I use Frontend Mentor projects in my portfolio?",
		answer:
			"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
	},
	{
		question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
		answer:
			"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
	},
];
const curFaq = ref(null);

function onHandleToggle(question) {
  if (curFaq.value === question) return curFaq.value = null;

  curFaq.value = question ;
}

function getImageUrl(name) {
  return new URL(`/src/assets/images/icon-${name}.svg`, import.meta.url).href
}
</script>

<style scoped>
.faqs {
	align-self: start;
	margin-top: 8em;
	max-width: 550px;
	width: 100%;
	margin-inline: auto;
	background-color: white;
	border-radius: 8px;
	position: relative;
	z-index: 2;
	padding: 2em;
	grid-column: 2;
	grid-row: 1;
}

.faqsTitle {
	display: flex;
	align-items: center;
	gap: 0.31em;
  margin-bottom: .6em;
}
.faqsTitle img {
	width: 0.8em;
}
</style>
