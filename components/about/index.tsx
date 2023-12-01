import React from "react";
import PageHeading from "../PageHeading";
import Profile from "../Profile";
import Summary from "./Summary";
import PageContainer from "../PageContainer";

export default function About() {
  return (
    <PageContainer>
      <PageHeading title={"About me"} />
      <Profile source="/personal.jpg" size={144} />
      <Summary />
    </PageContainer>
  );
}
