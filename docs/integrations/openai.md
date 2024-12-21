# Using OpenAI
Integrating OpenAI into your program is simple using **intelligent**.

## Acquiring an API key.
*  Go to the OpenAI website and sign in or sign up
*  Navigate to the API section
*  Hover over the left menu and click API keys
*  Click the Create new secret key button

## Integrating OpenAI's AI Model
**intelligent** provides a simple interface for integrating OpenAI's AI model into your program.
## Prerequisites

- Node.js (version 14 or higher)
    
- An OpenAI account with a valid API key
    
- `intelligent` installed. `npm install intelligent@latest`
    
## Usage

Here's a step-by-step guide to using the `OpenAIService` class:

## 1. Import the `OpenAIService` class

```ts
import { OpenAIService } from 'intelligent';
```

## 2. Create an instance of the `OpenAIService` class

Pass your API key and optionally, the model name to the constructor. If no model name is provided, it defaults to "gpt-4o-mini".

```ts
const openaiService = new OpenAIService('API-KEY');
```

## 3. Call the `response` method

Pass a prompt to the `response` method to generate a response using the OpenAI model.

```ts
await openaiService.response('Your prompt here').then((res) => {
  console.log(res);
});
```

## Error Handling

If no API key is provided or if the API key is invalid, the `OpenAIService` class will log an error message to the console.

You can specify the model name when creating an instance of the `OpenAIService` class.

## Example Use Case

Here's an example of using the `OpenAIService` class to generate a response to a user's query:

```ts
import { OpenAIService } from 'intelligent';

const openaiService = new OpenAIService('YOUR_API_KEY', 'gpt-4o-mini');

async function handleUserQuery(query) {
  try {
    const response = await openaiService.response(query);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

handleUserQuery('What is the meaning of life?');
```

By following these steps, you can easily integrate OpenAI's AI model into your program using the `OpenAIService` class.