"use client";

import Container from "@/components/ui/container";
import MessageBubble from "@/components/ui/message-bubble";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const ref = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

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
            <Textarea
              ref={textAreaRef}
              onChange={(ev) => {
                handleInputChange(ev);

                if (textAreaRef.current) {
                  textAreaRef.current.style.height = "auto";
                  textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
                }
              }}
              value={input}
              onKeyDown={(ev) => {
                if (!ev.shiftKey && ev.code === "Enter") {
                  handleSubmit();
                }
              }}
              placeholder="Type your message here then press enter if you want to send your message or shift + enter for new line..."
              className="bg-zinc-800 border-zinc-200 resize-none max-h-60"
              rows={1}
            />
          </form>
        </Container>
      </div>
    </Container>
  );
}
