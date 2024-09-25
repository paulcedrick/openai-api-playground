import { memo, ReactNode } from "react";

function MessageBubble(props: {
  role: "function" | "data" | "system" | "user" | "assistant" | "tool";
  content: ReactNode;
}) {
  if (props.role === "user") {
    return (
      <div className="flex justify-between">
        <div />
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-xl dark:bg-gray-900">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              You
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {new Date().toLocaleTimeString()}
            </span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            {props.content}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-xl dark:bg-gray-900">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            4o mini
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {new Date().toLocaleTimeString()}
          </span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
          {props.content}
        </p>
      </div>
      <div />
    </div>
  );
}

export default memo(MessageBubble);
