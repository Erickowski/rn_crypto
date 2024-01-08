import { Header, Hero, Form, Price, Loader } from "@src/components";
import { REQUESTS_STATE } from "@src/types";

import { priceSelector } from "@src/redux/selectors";

export function Main() {
  const { status } = priceSelector();

  return (
    <>
      <Header />
      <Hero />
      <Form />
      {status === REQUESTS_STATE.success && <Price />}
      {status === REQUESTS_STATE.loading && <Loader />}
    </>
  );
}
