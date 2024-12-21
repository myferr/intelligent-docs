import{_ as s,c as i,o as a,a1 as e}from"./chunks/framework.D0utey4O.js";const E=JSON.parse('{"title":"Using OpenAI","description":"","frontmatter":{},"headers":[],"relativePath":"integrations/openai.md","filePath":"integrations/openai.md"}'),n={name:"integrations/openai.md"},t=e(`<h1 id="using-openai" tabindex="-1">Using OpenAI <a class="header-anchor" href="#using-openai" aria-label="Permalink to &quot;Using OpenAI&quot;">​</a></h1><p>Integrating OpenAI into your program is simple using <strong>intelligent</strong>.</p><h2 id="acquiring-an-api-key" tabindex="-1">Acquiring an API key. <a class="header-anchor" href="#acquiring-an-api-key" aria-label="Permalink to &quot;Acquiring an API key.&quot;">​</a></h2><ul><li>Go to the OpenAI website and sign in or sign up</li><li>Navigate to the API section</li><li>Hover over the left menu and click API keys</li><li>Click the Create new secret key button</li></ul><h2 id="integrating-openai-s-ai-model" tabindex="-1">Integrating OpenAI&#39;s AI Model <a class="header-anchor" href="#integrating-openai-s-ai-model" aria-label="Permalink to &quot;Integrating OpenAI&#39;s AI Model&quot;">​</a></h2><p><strong>intelligent</strong> provides a simple interface for integrating OpenAI&#39;s AI model into your program.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li><p>Node.js (version 14 or higher)</p></li><li><p>An OpenAI account with a valid API key</p></li><li><p><code>intelligent</code> installed. <code>npm install intelligent@latest</code></p></li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Here&#39;s a step-by-step guide to using the <code>OpenAIService</code> class:</p><h2 id="_1-import-the-openaiservice-class" tabindex="-1">1. Import the <code>OpenAIService</code> class <a class="header-anchor" href="#_1-import-the-openaiservice-class" aria-label="Permalink to &quot;1. Import the \`OpenAIService\` class&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { OpenAIService } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;intelligent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="_2-create-an-instance-of-the-openaiservice-class" tabindex="-1">2. Create an instance of the <code>OpenAIService</code> class <a class="header-anchor" href="#_2-create-an-instance-of-the-openaiservice-class" aria-label="Permalink to &quot;2. Create an instance of the \`OpenAIService\` class&quot;">​</a></h2><p>Pass your API key and optionally, the model name to the constructor. If no model name is provided, it defaults to &quot;gpt-4o-mini&quot;.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> openaiService</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OpenAIService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;API-KEY&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="_3-call-the-response-method" tabindex="-1">3. Call the <code>response</code> method <a class="header-anchor" href="#_3-call-the-response-method" aria-label="Permalink to &quot;3. Call the \`response\` method&quot;">​</a></h2><p>Pass a prompt to the <code>response</code> method to generate a response using the OpenAI model.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> openaiService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Your prompt here&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="error-handling" tabindex="-1">Error Handling <a class="header-anchor" href="#error-handling" aria-label="Permalink to &quot;Error Handling&quot;">​</a></h2><p>If no API key is provided or if the API key is invalid, the <code>OpenAIService</code> class will log an error message to the console.</p><p>You can specify the model name when creating an instance of the <code>OpenAIService</code> class.</p><h2 id="example-use-case" tabindex="-1">Example Use Case <a class="header-anchor" href="#example-use-case" aria-label="Permalink to &quot;Example Use Case&quot;">​</a></h2><p>Here&#39;s an example of using the <code>OpenAIService</code> class to generate a response to a user&#39;s query:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { OpenAIService } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;intelligent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> openaiService</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OpenAIService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;YOUR_API_KEY&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;gpt-4o-mini&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> handleUserQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> openaiService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(query);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(response);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">handleUserQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;What is the meaning of life?&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>By following these steps, you can easily integrate OpenAI&#39;s AI model into your program using the <code>OpenAIService</code> class.</p>`,25),l=[t];function h(p,r,k,o,d,c){return a(),i("div",null,l)}const y=s(n,[["render",h]]);export{E as __pageData,y as default};
