"use client";

import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      setIsLoading(true);
      const response = await fetch("api/nodemailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const body = await response.json();

      if (response.ok) {
        alert(body.message);
      }

      if (response.status === 400) {
        alert(body.message);
      }
      reset();
      setIsLoading(false);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input
          type="text"
          className="w-full rounded-full bg-neutral-200 px-4 py-3 outline outline-neutral-400 focus:outline-2 focus:outline-neutral-600 dark:bg-neutral-800 dark:outline-neutral-700 dark:focus:outline-neutral-500"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="ml-2 text-xs text-red-500">
            * {`${errors.name.message}`}
          </p>
        )}
        <input
          type="email"
          className="w-full rounded-full bg-neutral-200 px-4 py-3 outline outline-neutral-400 focus:outline-2 focus:outline-neutral-600 dark:bg-neutral-800 dark:outline-neutral-700 dark:focus:outline-neutral-500"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="ml-2 text-xs text-red-500">
            * {`${errors.email.message}`}
          </p>
        )}
        <textarea
          rows={5}
          className="w-full rounded-3xl bg-neutral-200 p-4 outline outline-neutral-400 focus:outline-2 focus:outline-neutral-600 dark:bg-neutral-800 dark:outline-neutral-700 dark:focus:outline-neutral-500"
          placeholder="Message"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p className="ml-2 text-xs text-red-500">
            * {`${errors.message.message}`}
          </p>
        )}
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full rounded-full border-2 border-neutral-400 bg-neutral-50 p-1 dark:border-neutral-700 dark:bg-neutral-900"
        >
          <div className="rounded-full bg-neutral-200 px-8 py-2 dark:bg-neutral-800">
            {isLoading ? "Sending..." : "Submit"}
          </div>
        </button>
      </form>
    </div>
  );
}
