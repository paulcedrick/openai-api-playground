import { ReactNode } from "react";

export default function Container(props: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-[80%] ${props.className ?? ""}`}>
      {props.children}
    </div>
  );
}
