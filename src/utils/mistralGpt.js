
const MISTRAL_API_KEY = "pkISy0IKPOrzV5NkUaTGOWQXbJc27VB8"; // Replace this

export const queryMistral = async (prompt) => {
  try {
    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MISTRAL_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mistral-small", // or mistral-medium if your key supports it
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 100,
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error("Mistral API error:", data.error.message);
      return "";
    }

    return data.choices?.[0]?.message?.content || "";
  } catch (err) {
    console.error("Fetch error:", err);
    return "";
  }
};
