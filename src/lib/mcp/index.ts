import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listNewsTool from "./tools/list-news";
import listOrganizationsTool from "./tools/list-organizations";
import getContactInfoTool from "./tools/get-contact-info";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "pixel-perfect-replica",
  title: "Pixel Perfect Replica",
  version: "0.1.0",
  instructions:
    "Tools for the Khánh Hòa provincial e-government portal. Use `list_news` for recent articles and announcements, `list_organizations` for departments and localities, and `get_contact_info` for official contact details.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listNewsTool, listOrganizationsTool, getContactInfoTool],
});
