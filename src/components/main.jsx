import { useLoaderData, Await } from "react-router";

import { MainContainer, MainHeading } from "./styled-elements";
import { Suspense } from "react";

const Main = () => {
  const { promise } = useLoaderData();

  return (
    <MainContainer>
      <MainHeading>
        Main -{" "}
        <Suspense fallback="fetching...">
          <Await resolve={promise}>{(data) => <strong>{data}</strong>} </Await>
        </Suspense>
      </MainHeading>
    </MainContainer>
  );
};

export default Main;
