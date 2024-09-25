import { openai } from "@ai-sdk/openai";
import { convertToCoreMessages, streamText } from "ai";

export const maxDuration = 30;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const result = await streamText({
      model: openai("gpt-4o-mini"),
      messages: convertToCoreMessages(messages),
    });

    return result.toDataStreamResponse();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error({
        message: err.message,
      });
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
