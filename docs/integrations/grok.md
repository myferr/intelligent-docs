# Using Grok
Integrating Grok into your program is simple using **intelligent**.

## Acquiring an API key
- **Access point:** Go to the xAI console (console.x.ai) to manage your API keys.
- **Login required:** You need to be logged into your xAI account to access the API key generation feature.
- **Location in console:** Once logged in, locate the "API Keys" section on your dashboard.
- **Generate new key:** Click "Generate New Key" to create a fresh API key.

## Integrating Grok's AI Model

**intelligent** provides a simple interface for integrating Grok's AI model into your program. This document outlines the steps to get started.

## Prerequisites

- Node.js (version 14 or higher)
    
- A Grok API account with a valid API key
    
- `intelligent` installed. `npm install intelligent@latest`
    

## Usage

Here's a step-by-step guide to using the `GrokService` class:

## 1. Import the `GrokService` class

```ts
import { GrokService } from 'intelligent';
```

## 2. Create an instance of the `GrokService` class

Pass your API key and optionally, the model name to the constructor. If no model name is provided, it defaults to "grok-2-1212".

```ts
const grokService = new GrokService('API-KEY', 'grok-2-1212');
```

## 3. Call the `response` method

Pass a prompt to the `response` method to generate a response using Grok's AI model.

```ts
await grokService.response('Your prompt here').then((res) => {
  console.log(res);
});
```

## Configuration Options

The `GrokService` class supports the following configuration options:

- `model`: The name of the Grok model to use. Defaults to "grok-2-1212".
    

## Error Handling

If no API key is provided or if the API key is invalid, the `GrokService` class will log an error message to the console.

## Example Use Case

Here's an example of using the `GrokService` class to generate a response to a user's query:

```ts
import { GrokService } from 'intelligent';

const grokService = new GrokService('API-KEY', 'grok-2-1212');

async function handleUserQuery(query) {
  try {
    const response = await grokService.response(query);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

handleUserQuery('What is the meaning of life?');
```

By following these steps, you can easily integrate Grok's AI model into your program using the `GrokService` class.

## Note

The `GrokService` class uses the `openai` package under the hood, but with a custom `baseURL` set to `https://api.x.ai/v1`. This is because Grok's API endpoint is different from the standard OpenAI API endpoint.