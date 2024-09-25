import { openai } from "@ai-sdk/openai";
import { convertToCoreMessages, streamText } from "ai";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const result = await streamText({
      model: openai("gpt-4o-mini"),
      messages: convertToCoreMessages(messages),
    });

    return result.toDataStream();
  } catch (err: unknown) {
    if (err instanceof Error) {
      return Response.json(
        {
          message: err.message,
        },
        {
          status: 500,
        },
      );
    }
    return Response.json(
      {
        message: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}
