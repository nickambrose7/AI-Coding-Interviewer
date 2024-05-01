import OpenAI from 'openai'
// import { OpenAIStream, StreamingTextResponse } from 'ai'
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})
 
export async function POST(req: Request) {
  const { messages } = await req.json()
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    stream: false, // change to true for streaming
    messages,
  })
  console.log(response.choices[0].message.content)
  return Response.json(response.choices[0].message.content)
//   const stream = OpenAIStream(response)
 
//   return new StreamingTextResponse(stream)
}