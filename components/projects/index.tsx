import React from "react";
import ProjectList from "./ProjectList";
import PageHeading from "../PageHeading";
import PageContainer from "../PageContainer";

export default function Projects() {
  return (
    <PageContainer sectionName="Projects" threshold={0.5} noHFull>
      <PageHeading title="Projects" />
      <ProjectList />
    </PageContainer>
  );
}
