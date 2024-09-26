"use client";

import Container from "@/components/ui/container";
import { useChat } from "ai/react";
import FloatingChatbox from "./_components/floating-chatbox";
import MessagesPanel from "./_components/messages-panel";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Container className="min-h-screen relative">
      <MessagesPanel messages={messages} />

      <FloatingChatbox
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}
