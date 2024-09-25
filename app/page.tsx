"use client";

import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import MessageBubble from "@/components/ui/message-bubble";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container className="min-h-screen relative">
      <div className="flex flex-col gap-4 py-8 mb-20">
        {messages.map((message) => {
          return (
            <MessageBubble
              key={message.id}
              content={message.content}
              role={message.role}
            />
          );
        })}
        <div ref={ref} />
      </div>

      <div className="fixed bottom-0 w-full left-0 py-12">
        <Container>
          <form onSubmit={handleSubmit}>
            <Input
              onChange={handleInputChange}
              value={input}
              placeholder="Type your message here..."
              className="bg-zinc-800 border-zinc-200"
            />
          </form>
        </Container>
      </div>
    </Container>
  );
}
