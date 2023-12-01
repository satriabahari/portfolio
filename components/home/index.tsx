import React from "react";
import Welcome from "./Welcome";
import Profile from "../Profile";
import Intro from "./Intro";
import ScrollDown from "./ScrollDown";
import PageContainer from "../PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <Welcome />
      <Profile source="/personal_1.jpg" size={80} />
      <Intro />
      <ScrollDown />
    </PageContainer>
  );
}
