import { MobileFacility } from "@/types/mobileFacility";

export const getOpenAICompletion = async (mobileFacility: MobileFacility) => {
  const response = await fetch("/openai/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mobileFacility),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data from OpenAI");
  }

  const reader = response.body?.getReader();
  const decoder = new TextDecoder();
  let result = "";
  let isDone = false;

  while (!isDone) {
    const { done, value } = await reader?.read() || {};
    isDone = !!done;
    const valueString = decoder.decode(value, { stream: true });
    result += valueString;
  }

  result = result.replace(/"\n0:"|0:"|"/g, "");

  return result;
};

