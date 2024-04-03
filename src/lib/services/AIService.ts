import type { Message } from "$lib/types/main";
class AIService {
  async ask(messages: Message[]) {
    const response = await fetch("https://practice.aronlomn.workers.dev", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });
    console.log("resposne", response);

    return await response.json();
  }
}
export default new AIService();
