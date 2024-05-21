import { OpenAIStream, StreamingTextResponse } from "ai";
import type { NextRequest } from "next/server";
import OpenAI from "openai";

import { MobileFacility } from "@/types/mobileFacility";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const mobileFacility: MobileFacility = body;

  const chatCompletionResponse = await openai.chat.completions.create({
    messages: [{
      role: "user",
      content: `Provide a summary of the following mobile food facility: 
      Applicant: ${mobileFacility.applicant}, 
      Food Items: ${mobileFacility.fooditems}`
    }],
    model: "gpt-3.5-turbo",
    stream: true,
  });

  const stream = OpenAIStream(chatCompletionResponse);

  return new StreamingTextResponse(stream);
}
