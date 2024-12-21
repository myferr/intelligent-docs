import{_ as s,c as i,o as a,a1 as e}from"./chunks/framework.D0utey4O.js";const u=JSON.parse('{"title":"Using HuggingFace","description":"","frontmatter":{},"headers":[],"relativePath":"integrations/huggingface.md","filePath":"integrations/huggingface.md"}'),n={name:"integrations/huggingface.md"},t=e(`<h1 id="using-huggingface" tabindex="-1">Using HuggingFace <a class="header-anchor" href="#using-huggingface" aria-label="Permalink to &quot;Using HuggingFace&quot;">​</a></h1><p>Integrating HuggingFace models into your program is simple using <strong>intelligent</strong>.</p><h2 id="acquiring-an-api-key" tabindex="-1">Acquiring an API key. <a class="header-anchor" href="#acquiring-an-api-key" aria-label="Permalink to &quot;Acquiring an API key.&quot;">​</a></h2><ul><li><strong>Create a Hugging Face account:</strong> Sign up on the Hugging Face website if you don&#39;t already have an account.</li><li><strong>Access your settings:</strong> Log in to your account and go to your profile settings.</li><li><strong>Navigate to Access Tokens:</strong> Within your settings, find the &quot;Access Tokens&quot; tab.</li><li><strong>Generate a new key:</strong> Click &quot;New token&quot; to create a new API key.</li><li><strong>Name your key:</strong> Provide a descriptive name for your API key.</li><li><strong>Select access level:</strong> Choose the appropriate access level (usually &quot;Read&quot;) for your needs.</li><li><strong>Copy your key:</strong> Once generated, copy your API key to use in your applications.</li></ul><h2 id="integrating-a-hugging-face-ai-model" tabindex="-1">Integrating a Hugging Face AI Model <a class="header-anchor" href="#integrating-a-hugging-face-ai-model" aria-label="Permalink to &quot;Integrating a Hugging Face AI Model&quot;">​</a></h2><p><strong>intelligent</strong> provides a simple interface for integrating a Hugging Face AI model into your program.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li><p>Node.js (version 14 or higher)</p></li><li><p>A Hugging Face account with a valid API key</p></li><li><p><code>intelligent</code> installed. <code>npm install intelligent@latest</code></p></li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Here&#39;s a step-by-step guide to using the <code>HuggingFaceService</code> class:</p><h2 id="_1-import-the-huggingfaceservice-class" tabindex="-1">1. Import the <code>HuggingFaceService</code> class <a class="header-anchor" href="#_1-import-the-huggingfaceservice-class" aria-label="Permalink to &quot;1. Import the \`HuggingFaceService\` class&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { HuggingFaceService } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;intelligent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="_2-create-an-instance-of-the-huggingfaceservice-class" tabindex="-1">2. Create an instance of the <code>HuggingFaceService</code> class <a class="header-anchor" href="#_2-create-an-instance-of-the-huggingfaceservice-class" aria-label="Permalink to &quot;2. Create an instance of the \`HuggingFaceService\` class&quot;">​</a></h2><p>Pass your API key, model name, and optionally, parameters to the constructor. If no model name is provided, it defaults to &quot;gpt2&quot;. If no parameters are provided, it defaults to <code>{ max_new_tokens: 50 }</code>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> huggingFaceService</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HuggingFaceService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;API-KEY&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;gpt2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { max_new_tokens: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span></code></pre></div><h2 id="_3-call-the-response-method" tabindex="-1">3. Call the <code>response</code> method <a class="header-anchor" href="#_3-call-the-response-method" aria-label="Permalink to &quot;3. Call the \`response\` method&quot;">​</a></h2><p>Pass a prompt to the <code>response</code> method to generate a response using the Hugging Face AI model.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> huggingFaceService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Your prompt here&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="supported-models" tabindex="-1">Supported Models <a class="header-anchor" href="#supported-models" aria-label="Permalink to &quot;Supported Models&quot;">​</a></h2><p>The <code>HuggingFaceService</code> class supports any Hugging Face AI model that is compatible with the <code>@huggingface/inference</code> package.</p><h2 id="configuration-options" tabindex="-1">Configuration Options <a class="header-anchor" href="#configuration-options" aria-label="Permalink to &quot;Configuration Options&quot;">​</a></h2><p>The <code>HuggingFaceService</code> class supports the following configuration options:</p><ul><li><p><code>model</code>: The name of the Hugging Face model to use. Defaults to &quot;gpt2&quot;.</p></li><li><p><code>params</code>: An object containing parameters for the model. Defaults to <code>{ max_new_tokens: 50 }</code>.</p></li></ul><h2 id="error-handling" tabindex="-1">Error Handling <a class="header-anchor" href="#error-handling" aria-label="Permalink to &quot;Error Handling&quot;">​</a></h2><p>If no API key is provided or if the API key is invalid, the <code>response</code> method will log an error message to the console.</p><h2 id="example-use-case" tabindex="-1">Example Use Case <a class="header-anchor" href="#example-use-case" aria-label="Permalink to &quot;Example Use Case&quot;">​</a></h2><p>Here&#39;s an example of using the <code>HuggingFaceService</code> class to generate a response to a user&#39;s query:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { HuggingFaceService } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;intelligent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> huggingFaceService</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HuggingFaceService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;YOUR_API_KEY&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;gpt2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { max_new_tokens: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> handleUserQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> huggingFaceService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(query);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(response);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">handleUserQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;What is the meaning of life?&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>By following these steps, you can easily integrate a Hugging Face AI model into your program using the <code>HuggingFaceService</code> class.</p>`,29),l=[t];function h(r,p,o,g,k,c){return a(),i("div",null,l)}const E=s(n,[["render",h]]);export{u as __pageData,E as default};