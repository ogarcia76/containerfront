import './App.css';
import { Base } from './component/Base';
import { getPosts } from './service/postts';
import { useTranslation } from 'react-i18next';

function App() {
  const [t, i18n] = useTranslation("global");
  const data = getPosts();

  return (
    <>
    <div id='appContainer' className="App">
      <button onClick={() => i18n.changeLanguage("es")}>ES</button>
      <br />
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <br />
      <p>{t("header.hello")}</p>
      <p> prueba de contendor</p>
      <Base />
    </div>
    </>
  );
}

export default App;
