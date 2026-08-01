import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { news } from "../data";

export default defineTool({
  name: "list_news",
  title: "List portal news",
  description:
    "List recent news and announcements published on the Khánh Hòa provincial portal, optionally filtered by category or a keyword in the title.",
  inputSchema: {
    category: z.string().optional().describe("Optional category filter, e.g. 'Y tế', 'Giao thông', 'Chính sách'."),
    query: z.string().optional().describe("Optional keyword to match against the article title."),
    limit: z.number().int().optional().describe("Maximum number of articles to return (default 10)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, query, limit }) => {
    const max = Math.min(Math.max(limit ?? 10, 1), 50);
    const q = query?.trim().toLowerCase();
    const cat = category?.trim().toLowerCase();
    const items = news
      .filter((n) => (cat ? n.category.toLowerCase().includes(cat) : true))
      .filter((n) => (q ? n.title.toLowerCase().includes(q) : true))
      .slice(0, max);

    return {
      content: [
        {
          type: "text" as const,
          text: items.length
            ? items.map((n) => `${n.date} [${n.category}] ${n.title}`).join("\n")
            : "No matching articles were found.",
        },
      ],
      structuredContent: { count: items.length, items },
    };
  },
});
