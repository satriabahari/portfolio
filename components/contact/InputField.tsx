import React from "react";

type InputFieldProps = {
  isTextArea?: boolean;
};

export default function InputField({
  isTextArea = false,
}: InputFieldProps) {
  return (
    <div>
      {isTextArea ? (
        <textarea
          rows={5}
          className="w-full rounded-3xl bg-neutral-800 p-4 outline outline-neutral-700 focus:outline-2 focus:outline-neutral-500"
        />
      ) : (
        <input
          type="text"
          className="w-full rounded-full bg-neutral-800 px-4 py-3 outline outline-neutral-700 focus:outline-2 focus:outline-neutral-500"
        />
      )}
    </div>
  );
}
