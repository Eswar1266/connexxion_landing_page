export interface Iplans {
    starter: string[],
    enterprise: string[],
    custom: string[]
}

export type PlanTypes = keyof Iplans;