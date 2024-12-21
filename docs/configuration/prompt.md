# Configuring your AI model's prompt

To configure the AI model's prompt, you need to provide a string input that represents the prompt or question you want the model to respond to.

## Prompt Recommendations
When crafting your prompt, keep the following guidelines in mind:
- **Be specific**: Clearly define what you want the model to generate or respond to.
- **Use natural language**: Phrase your prompt as you would in everyday conversation.
- **Avoid ambiguity**: Ensure your prompt is unambiguous and easy to understand.
- **Keep it concise**: Aim for a prompt that is 1-2 sentences long.

## Prompt Examples
Here are some examples of well-crafted prompts:
- **Simple question**: "What is the capital of France?"
- **Text generation**: "Write a short story about a character who discovers a hidden world."
- **Conversational dialogue**: "I'm planning a trip to Japan. Can you recommend some popular tourist destinations?"

## Prompt Parameters
When calling the `response` method, you can pass the prompt as a string parameter. For example:

```ts
const GeminiService = require("intelligent");

const ai = new GeminiService('YOUR_API_KEY');
const prompt = 'What is the meaning of life?';
// You can also place your prompt in the `ai.response` function.

ai.response(prompt).then((res) => {
  console.log(res);
});
```

By following these recommendations and examples, you can effectively configure the AI model's prompt to generate accurate and relevant responses.