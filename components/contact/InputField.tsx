import React from "react";

type InputFieldProps = {
  name: string;
  isTextArea?: boolean;
};

export default function InputField({
  name,
  isTextArea = false,
}: InputFieldProps) {
  return (
    <div>
      {isTextArea ? (
        <textarea
          rows={5}
          placeholder={name}
          className="w-full rounded-3xl bg-neutral-800 p-4 outline outline-neutral-700 focus:outline-2 focus:outline-neutral-500"
        />
      ) : (
        <input
          type="text"
          placeholder={name}
          className="w-full rounded-full bg-neutral-800 px-4 py-3 outline outline-neutral-700 focus:outline-2 focus:outline-neutral-500"
        />
      )}
    </div>
  );
}
