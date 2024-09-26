import type { Message } from "ai/react";
import { memo, useEffect, useRef } from "react";
import MessageBubble from "./message-bubble";

function MessagesPanel({ messages }: { messages: Message[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
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
  );
}

export default memo(MessagesPanel);
