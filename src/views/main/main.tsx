import { Header, Hero, Form, Price } from "@src/components";
import { REQUESTS_STATE } from "@src/types";

import { priceSelector } from "@src/redux/selectors";

export function Main() {
  const { status } = priceSelector();
  console.log(status);
  return (
    <>
      <Header />
      <Hero />
      <Form />
      {status === REQUESTS_STATE.success && <Price />}
    </>
  );
}
