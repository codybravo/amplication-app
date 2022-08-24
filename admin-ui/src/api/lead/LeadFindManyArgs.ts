import { LeadWhereInput } from "./LeadWhereInput";
import { LeadOrderByInput } from "./LeadOrderByInput";

export type LeadFindManyArgs = {
  where?: LeadWhereInput;
  orderBy?: Array<LeadOrderByInput>;
  skip?: number;
  take?: number;
};
