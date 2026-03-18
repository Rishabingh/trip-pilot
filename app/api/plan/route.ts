import { generateAiResponse } from "@/lib/gemini";

interface requestBody {
  destination: string;
  duration: number;
  budget: number;
  instructions: string;
}

export async function POST(request: Request) {
  const data: requestBody = await request.json();
  const res = await generateAiResponse(data)
  console.log(res);
  return Response.json({res})
}