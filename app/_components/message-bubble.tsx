import Markdown from "markdown-to-jsx";
import { memo } from "react";

function MessageBubble(props: {
  role: "function" | "data" | "system" | "user" | "assistant" | "tool";
  content: string;
}) {
  if (props.role === "user") {
    return (
      <div className="flex justify-between">
        <div />
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-zince-200 rounded-xl bg-zinc-700">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              You
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {new Date().toLocaleTimeString()}
            </span>
          </div>
          <div className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            <Markdown>{props.content}</Markdown>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-full max-w-[80%] leading-1.5 p-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            4o mini
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {new Date().toLocaleTimeString()}
          </span>
        </div>
        <div className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
          <Markdown>{props.content}</Markdown>
        </div>
        <button onClick={() => navigator.clipboard.writeText(props.content)}>
          Copy
        </button>
      </div>
      <div />
    </div>
  );
}

export default memo(MessageBubble);
