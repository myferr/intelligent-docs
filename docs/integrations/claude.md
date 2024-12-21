# Using Claude
Integrating Claude into your program is simple using **intelligent**.

## Acquiring an API key
- **Create an Anthropic account:** Go to the Anthropic website and sign up for an account. 
- **Login to the console:** Access the Anthropic console using your account credentials. 
- **Navigate to API Keys:** Once logged in, find the "API Keys" section within your account dashboard. 
- **Generate a new key:** Click "Create New API Key" to generate your Claude API key. 

Important points to remember:

- **Security:** Always keep your Claude API key confidential and store it securely. 
- **Usage costs:** Using the Claude API typically comes with usage-based charges, so be aware of the pricing structure.

## Integrating Claude's AI Model
**intelligent** provides a simple interface for integrating Claude's AI model into your program.

## Prerequisites

- Node.js (version 14 or higher)
    
- An Anthropic AI account with a valid API key
    
- `intelligent` installed. `npm install intelligent@latest`
    
## Usage

Here's a step-by-step guide to using the `ClaudeService` class:

## 1. Import the `ClaudeService` class

```ts
import { ClaudeService } from 'intelligent';
```

## 2. Create an instance of the `ClaudeService` class

Pass your API key and optionally, the model name to the constructor. If no model name is provided, it defaults to "claude-3-5-sonnet-20241022".

```ts
const claudeService = new ClaudeService('API-KEY');
```

## 3. Call the `response` method

Pass a prompt to the `response` method to generate a response using Claude's AI model.

```ts
claudeService.response('Your prompt here').then((res) => {
  console.log(res);
});
```

## Configuration Options

The `ClaudeService` class supports the following configuration options:
- `apiKey`: The API key of the Claude model to use.
- `model`: The name of the Claude model to use. Defaults to "claude-3-5-sonnet-20241022".
## Error Handling

If no API key is provided or if the API key is invalid, the `response` method will log an error message to the console.

## Example Use Case

Here's an example of using the `ClaudeService` class to generate a response to a user's query:

```ts
import { ClaudeService } from 'intelligent';

const claudeService = new ClaudeService('API-KEY', 'claude-3-5-sonnet-20241022');

async function handleUserQuery(query) {
  try {
    await claudeService.response(query).then((res) => {
	  console.log(res);
	});
  } catch (error) {
    console.error(error);
  }
}

handleUserQuery('What is the meaning of life?');
```

By following these steps, you can easily integrate Claude's AI model into your program using the `ClaudeService` class.