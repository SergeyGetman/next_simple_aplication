import "../style/global.css";
import { Provider } from "react-redux";
import store from "../store/reducer";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
