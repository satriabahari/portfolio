"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input
          type="text"
          className="w-full rounded-full bg-neutral-200 px-4 py-3 outline outline-neutral-500 focus:outline-2 focus:outline-neutral-700 dark:bg-neutral-800 dark:outline-neutral-700 dark:focus:outline-neutral-500"
          placeholder="Name"
          {...register("name")}
        />
        <input
          type="email"
          className="w-full rounded-full bg-neutral-200 px-4 py-3 outline outline-neutral-500 focus:outline-2 focus:outline-neutral-700 dark:bg-neutral-800 dark:outline-neutral-700 dark:focus:outline-neutral-500"
          placeholder="Email"
          {...register("email")}
        />
        <textarea
          rows={5}
          className="w-full rounded-3xl bg-neutral-200 p-4 outline outline-neutral-500 focus:outline-2 focus:outline-neutral-700 dark:bg-neutral-800 dark:outline-neutral-700 dark:focus:outline-neutral-500"
          placeholder="Message"
          {...register("message")}
        />
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full rounded-full border-2 border-neutral-500 bg-neutral-50 p-1 dark:border-neutral-700 dark:bg-neutral-900"
        >
          <div className="rounded-full bg-neutral-200 px-8 py-2 dark:bg-neutral-800">
            Submit
          </div>
        </button>
      </form>
    </div>
  );
}
