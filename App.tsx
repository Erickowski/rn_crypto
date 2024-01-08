import { Provider } from "react-redux";

import { store } from "@src/redux/store";
import { Layout } from "@src/components";
import { Main } from "@src/views";

export default function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Main />
      </Layout>
    </Provider>
  );
}
