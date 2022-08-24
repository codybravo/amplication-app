import { Lead as TLead } from "../api/lead/Lead";

export const LEAD_TITLE_FIELD = "products";

export const LeadTitle = (record: TLead): string => {
  return record.products || record.id;
};
