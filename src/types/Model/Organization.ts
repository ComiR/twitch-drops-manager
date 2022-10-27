import { UUID } from "../types";

export type OrganizationId = UUID;

export default interface Organization {
  id: OrganizationId;
  name: string;
  __typename: "Organization";
}
