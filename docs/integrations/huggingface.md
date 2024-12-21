# Using HuggingFace
Integrating HuggingFace models into your program is simple using **intelligent**.

## Acquiring an API key.
- **Create a Hugging Face account:** Sign up on the Hugging Face website if you don't already have an account. 
- **Access your settings:** Log in to your account and go to your profile settings. 
- **Navigate to Access Tokens:** Within your settings, find the "Access Tokens" tab. 
- **Generate a new key:** Click "New token" to create a new API key. 
- **Name your key:** Provide a descriptive name for your API key. 
- **Select access level:** Choose the appropriate access level (usually "Read") for your needs. 
- **Copy your key:** Once generated, copy your API key to use in your applications.

## Integrating a Hugging Face AI Model

**intelligent** provides a simple interface for integrating a Hugging Face AI model into your program.

## Prerequisites

- Node.js (version 14 or higher)
    
- A Hugging Face account with a valid API key
       
- `intelligent` installed. `npm install intelligent@latest`
    

## Usage

Here's a step-by-step guide to using the `HuggingFaceService` class:

## 1. Import the `HuggingFaceService` class

```ts
import { HuggingFaceService } from 'intelligent';
```

## 2. Create an instance of the `HuggingFaceService` class

Pass your API key, model name, and optionally, parameters to the constructor. If no model name is provided, it defaults to "gpt2". If no parameters are provided, it defaults to `{ max_new_tokens: 50 }`.

```ts
const huggingFaceService = new HuggingFaceService('API-KEY', 'gpt2', { max_new_tokens: 50 });
```

## 3. Call the `response` method

Pass a prompt to the `response` method to generate a response using the Hugging Face AI model.

```ts
await huggingFaceService.response('Your prompt here').then((res) => {
  console.log(res);
});
```

## Supported Models

The `HuggingFaceService` class supports any Hugging Face AI model that is compatible with the `@huggingface/inference` package.

## Configuration Options

The `HuggingFaceService` class supports the following configuration options:

- `model`: The name of the Hugging Face model to use. Defaults to "gpt2".
    
- `params`: An object containing parameters for the model. Defaults to `{ max_new_tokens: 50 }`.
    

## Error Handling

If no API key is provided or if the API key is invalid, the `response` method will log an error message to the console.

## Example Use Case

Here's an example of using the `HuggingFaceService` class to generate a response to a user's query:

```ts
import { HuggingFaceService } from 'intelligent';

const huggingFaceService = new HuggingFaceService('YOUR_API_KEY', 'gpt2', { max_new_tokens: 50 });

async function handleUserQuery(query) {
  try {
    const response = await huggingFaceService.response(query);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

handleUserQuery('What is the meaning of life?');
```

By following these steps, you can easily integrate a Hugging Face AI model into your program using the `HuggingFaceService` class.