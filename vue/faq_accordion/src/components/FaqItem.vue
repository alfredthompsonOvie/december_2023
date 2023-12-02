<template>
  <section class="faq">
    <button class="faqQuestion" @click="handleClick(question)">
      <span class="faqQuestionContent">
        {{ question }}
      </span>
      <img :src="getImageUrl(isCur ? 'minus' : 'plus')" alt="" />
    </button>

    <Transition name="slide" mode="out-in">
      <p class="faqAnswer inner" v-if="isCur">
        {{ answer }} 
      </p>
  </Transition>
  </section>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
	faq: {
		type: Object,
		required: true,
  },
  curFaq: {
    type: Object,
  }
});

const emit = defineEmits(["toggleFaq"])


function handleClick(question) {
  emit("toggleFaq", question)
}

const question = computed(() => props.faq.faq.question);
const answer = computed(() => props.faq.faq.answer);
const isCur = computed(() => props.curFaq.curFaq === props.faq.faq.question);
const imageSrc = computed(() => isCur.value ? "src/assets/images/icon-minus.svg" : "src/assets/images/icon-plus.svg");

function getImageUrl(name) {
  return new URL(`/src/assets/images/icon-${name}.svg`, import.meta.url).href
}

</script>

<style scoped>
.faq {
	padding: 1.5em 0;
}
.faqQuestion {
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	gap: 2em;
	margin-bottom: 1em;
	font-size: 0.9em;
	color: var(--DarkPurple);
	font-weight: 600;
	cursor: pointer;
}
.faqQuestion img {
	width: 1.5em;
  transition: opacity 5s ease;

}
.faqQuestionContent {
	text-align: left;
}
.faqAnswer {
	color: var(--GrayishPurple);
	font-size: 0.9rem;
	line-height: 1.5;
}
/* ============================================================ */
/* ============================================================ */

.slide-enter-active {
  animation: bounce-in 0.3s;
}
.slide-leave-active {
  animation: slide-out 0.01s;
}
@keyframes bounce-in {
  0% {
    transform: translateY(1.5em);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  0% {
    transform: translateX(0em);
  }
  100% {
    transform: translateX(1.5em);
  }
}

</style>
