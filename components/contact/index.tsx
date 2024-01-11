import React from "react";
import PageContainer from "../PageContainer";
import PageHeading from "../PageHeading";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Breakline from "../Breakline";

export default function Contact() {
  return (
    <PageContainer sidePadding sectionName="Contact">
      <PageHeading title="Contact" />
      <div className="flex gap-x-16 w-full justify-center">
        <ContactList />
        <Breakline/>
        <ContactForm />
      </div>
    </PageContainer>
  );
}
