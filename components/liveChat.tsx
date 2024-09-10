"use client";

import { RegisteredComponent } from "@builder.io/sdk-react";

export const LiveChatComponent: RegisteredComponent = {
  name: "LiveChatDemo",
  component: LiveChat,
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
};

function LiveChat({ title }: { title: string }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>I am live chat component</h2>
    </div>
  );
}
