"use server";
import { unstable_cache } from "next/cache";

export async function getPixabayImage(query) {
  try {
    const res = await fetch(
      `https://pixabay.com/api/?q=${query}&key=${process.env.PIXABAY_API_KEY}&min_width=1280&min_height=720&image_type=illustration&category=feelings`
    );
    const data = await res.json();
    return data.hits[0]?.largeImageURL || null;
  } catch (error) {
    console.error("Pixabay API Error:", error);
    return null;
  }
}
export const getDailyPrompt = unstable_cache(
  async () => {
    try {
      const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.API_NINJAS_KEY,
        },
        cache: "no-store",
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`API error: ${res.status} - ${text}`);
      }

      const data = await res.json();
      return `${data[0].quote} — ${data[0].author}`;
    } catch (error) {
      console.error("Error fetching daily prompt:", error);
      return "Whats on your mind today? Write about it in your journal.";
    }
  },
  ["daily-prompt"],
  {
    revalidate: 36000,
    tags: ["daily-prompt"],
  }
);
