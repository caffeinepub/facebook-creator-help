import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    id: bigint;
    name: string;
    pageLink: string;
    submittedAt: bigint;
    problemDescription: string;
}
export interface backendInterface {
    getLeadCount(): Promise<bigint>;
    getLeads(): Promise<Array<Lead>>;
    submitLead(name: string, pageLink: string, problemDescription: string): Promise<bigint>;
}
