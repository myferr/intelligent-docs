import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Intelligent Docs",
  description: "In-depth documentation for intelligent.",
  themeConfig: {
    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Introduction", link: "/" },
          { text: "Installation", link: "/installation" },
          { text: "Versions", link: "/versions" },
        ],
      },
      {
        text: "Guides",
        items: [
          {
            text: "Quickstart",
            link: "/guides/quickstart",
          },
          {
            text: "Integrate in React JS",
            link: "/guides/integrate-in-react-js",
          },
        ],
      },
      {
        text: "Configuration",
        items: [
          { text: "API Key", link: "/configuration/api-key" },
          { text: "Model", link: "/configuration/model" },
          { text: "Prompt", link: "/configuration/prompt" },
          {
            text: "Additional Parameters",
            link: "/configuration/additional-parameters",
          },
        ],
      },
      {
        text: "Integrations",
        items: [
          { text: "Gemini", link: "/integrations/gemini" },
          { text: "OpenAI", link: "/integrations/openai" },
          { text: "Ollama", link: "/integrations/ollama" },
          { text: "Claude", link: "/integrations/claude" },
          { text: "HuggingFace", link: "/integrations/huggingface" },
          { text: "Grok", link: "/integrations/grok" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/myferr/intelligent" },
      { icon: "npm", link: "https://www.npmjs.com/package/intelligent" },
    ],
  },
});
