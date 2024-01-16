import React from "react";
import ProjectList from "./ProjectList";
import PageHeading from "../PageHeading";
import PageContainer from "../PageContainer";

export default function Projects() {
  return (
    <PageContainer sectionName="Projects" threshold={0.5} noHFull others="mb-32 lg:mb-0">
      <PageHeading title="Projects" />
      <ProjectList />
    </PageContainer>
  );
}
