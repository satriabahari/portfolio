import React from "react";
import PageContainer from "../PageContainer";
import PageHeading from "../PageHeading";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <PageContainer>
      <PageHeading title="Contact" />
      <div className="flex">
        <ContactList />
        <ContactForm />
      </div>
    </PageContainer>
  );
}
