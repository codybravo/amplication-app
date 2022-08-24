import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  products?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
