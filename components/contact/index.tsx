import React from "react";
import PageContainer from "../PageContainer";
import PageHeading from "../PageHeading";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Breakline from "../Breakline";

export default function Contact() {
  return (
    <PageContainer sidePadding noHFull sectionName="Contact" others="lg:h-screen mb-32 lg:mb-0">
      <PageHeading title="Contact" />
      <div className="flex w-full flex-col justify-center gap-y-8 lg:flex-row lg:gap-x-16">
        <ContactList />
        <Breakline />
        <ContactForm />
      </div>
    </PageContainer>
  );
}
