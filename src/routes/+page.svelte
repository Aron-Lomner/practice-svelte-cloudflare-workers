<script lang="ts">
  import AIService from "$lib/services/AIService";
  import MessageComponent from "$lib/components/message.svelte";
  import type { Message } from "$lib/types/main.ts";
  let messages = $state<Message[]>([
    { role: "user", content: "what is WASM?" },
    {
      role: "assistant",
      content:
        "WASM (WebAssembly) is a binary instruction format that is designed to be a platform-agnostic",
    },
    { role: "user", content: "does Python compile to WASM?" },
    {
      role: "assistant",
      content: "No, Python does not directly compile to WebAssembly",
    },
  ]);
  let newMessage = $state<string>("");
  async function sendMessage(msg: string) {
    newMessage = "";
    messages = [...messages, { role: "user", content: msg }];
    const response = await AIService.ask(messages);
    messages.push({ role: "assistant", content: response.response });
    console.log(response);
  }
</script>

<main>
  <div class="message-container">
    {#each messages as message}
      <MessageComponent {message} />
    {/each}
  </div>
  <input type="text" bind:value={newMessage} />
  <button onclick={() => sendMessage(newMessage)}>Send</button>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .message-container {
    overflow-y: scroll;
    height: 70%;
  }
</style>
