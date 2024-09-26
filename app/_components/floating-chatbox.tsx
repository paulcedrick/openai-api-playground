import Container from "@/components/ui/container";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "ai/react";
import { memo, useRef } from "react";

function FloatingChatbox({
  handleSubmit,
  handleInputChange,
  input,
}: {
  handleSubmit: ReturnType<typeof useChat>["handleSubmit"];
  handleInputChange: ReturnType<typeof useChat>["handleInputChange"];
  input: ReturnType<typeof useChat>["input"];
}) {
  const ref = useRef<HTMLTextAreaElement>(null);

  function resetInputHeight() {
    if (ref.current) {
      ref.current.style.height = "initial";
    }
  }

  function adjustInputHeight() {
    if (ref.current) {
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }

  return (
    <div className="fixed bottom-0 w-full left-0 py-6 pt-0 bg-zinc-800">
      <Container>
        <form onSubmit={handleSubmit}>
          <Textarea
            ref={ref}
            onChange={(ev) => {
              console.log({ value: ev.target.value });
              handleInputChange(ev);
              adjustInputHeight();
            }}
            value={input}
            onKeyDown={(ev) => {
              if (!ev.shiftKey && ev.code === "Enter") {
                ev.preventDefault();
                handleSubmit();

                resetInputHeight();
              }
            }}
            placeholder="Type your message here then press enter if you want to send your message or shift + enter for new line..."
            className="bg-zinc-700 resize-none max-h-60"
            rows={1}
          />
        </form>
      </Container>
    </div>
  );
}

export default memo(FloatingChatbox);
