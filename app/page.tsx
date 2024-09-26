"use client";

import Container from "@/components/ui/container";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "ai/react";
import { useRef } from "react";
import MessagesPanel from "./_components/messages-panel";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <Container className="min-h-screen relative">
      {/* <p>Hello</p> */}
      <MessagesPanel messages={messages} />

      <div className="fixed bottom-0 w-full left-0 py-12">
        <Container>
          <form onSubmit={handleSubmit}>
            <Textarea
              ref={textAreaRef}
              onChange={(ev) => {
                handleInputChange(ev);
                if (textAreaRef.current) {
                  textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
                }
              }}
              value={input}
              onKeyDown={(ev) => {
                if (!ev.shiftKey && ev.code === "Enter") {
                  handleSubmit();

                  if (textAreaRef.current) {
                    textAreaRef.current.style.height = "initial";
                  }
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
