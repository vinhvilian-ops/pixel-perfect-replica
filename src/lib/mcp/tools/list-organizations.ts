import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { departments, localities } from "../data";

export default defineTool({
  name: "list_organizations",
  title: "List departments and localities",
  description:
    "List the provincial departments/agencies (sở, ban, ngành) and the local administrative units (xã, phường, đặc khu) of Khánh Hòa province.",
  inputSchema: {
    kind: z
      .enum(["departments", "localities", "all"])
      .optional()
      .describe("Which set to return: departments, localities, or all (default)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ kind }) => {
    const which = kind ?? "all";
    const result: { departments?: string[]; localities?: string[] } = {};
    if (which === "departments" || which === "all") result.departments = departments;
    if (which === "localities" || which === "all") result.localities = localities;

    const lines: string[] = [];
    if (result.departments) lines.push("Sở, ban, ngành:", ...result.departments.map((d) => `- ${d}`));
    if (result.localities) lines.push("Địa phương:", ...result.localities.map((l) => `- ${l}`));

    return {
      content: [{ type: "text" as const, text: lines.join("\n") }],
      structuredContent: result,
    };
  },
});
