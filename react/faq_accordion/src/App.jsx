import Faqs from "./components/ui/Faqs";
import styles from "./components/styles/App.module.css";
import Attribution from "./components/ui/Attribution";

function App() {
	return (
		<div className={styles.container}>
      <Faqs />
      <Attribution />
		</div>
	);
}

export default App;
