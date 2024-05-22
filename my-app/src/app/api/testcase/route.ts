import OpenAI from 'openai'
import { systemMessageTestCase, userMessageTestCaseExample, assistantMessageTestCaseExample } from '@/utils/prompts/systemMessages'
// import { OpenAIStream, StreamingTextResponse } from 'ai'
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// // Store the past messages in memory, will transition to using my Firestore database
// let pastMessages: any[] = [systemMessage]
 
// can give GPT functions to call, these could test our users code.
export async function POST(req: Request) {
  // using destructuring, messages becomes an array of message objects
  const { messages } = await req.json()
  
  
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    stream: false, // change to true for streaming
    messages: [systemMessageTestCase, userMessageTestCaseExample, assistantMessageTestCaseExample, ...messages],
  })
  console.log(response.choices[0].message)

  return Response.json(response.choices[0].message.content)
//   const stream = OpenAIStream(response)
 
//   return new StreamingTextResponse(stream)
}