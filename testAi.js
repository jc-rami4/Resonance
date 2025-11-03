import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

const response = openai.responses.create({
  model: "gpt-5-nano",
  input: "write a haiku about ai",
  store: true,
});

response.then((result) => console.log(result.output_text));