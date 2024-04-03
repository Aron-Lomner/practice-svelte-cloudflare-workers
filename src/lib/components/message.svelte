<script lang="ts">
  import type { Message } from "$lib/types/main";
  const { message }: { message: Message } = $props();
</script>

<div>
  <h2>{message.role === "user" ? "you" : "GPT"}</h2>
  <p>{message.content}</p>
</div>
