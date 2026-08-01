import { defineTool } from "@lovable.dev/mcp-js";
import { contact } from "../data";

export default defineTool({
  name: "get_contact_info",
  title: "Get portal contact info",
  description:
    "Get the official contact details of the Khánh Hòa provincial portal: address, phone numbers, email, managing office and website.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text" as const,
        text: [
          contact.organization,
          `Cơ quan quản lý: ${contact.managedBy}`,
          `Địa chỉ: ${contact.address}`,
          `Điện thoại: ${contact.phones.join(" / ")}`,
          `Email: ${contact.email}`,
          `Website: ${contact.website}`,
          `Trưởng Ban biên tập: ${contact.editorInChief}`,
        ].join("\n"),
      },
    ],
    structuredContent: contact,
  }),
});
