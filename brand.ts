export const BRAND = { platform:"VEDANTIQ AI", creator:"JAYADITYA™", engine:"GYANTRA", tagline:"Ancient Wisdom. Infinite Intelligence.", watermark:"✨ Answer generated strictly from Ancient Sacred Scriptures | Powered by GYANTRA 1.3 | Created by JAYADITYA™" } as const;
export const MODEL_REGISTRY = { "gyantra-1.3": { id:"gyantra-1.3", label:"GYANTRA 1.3", status:"active", corpusVersion:"2026-10-01" } } as const;
export type ModelId = keyof typeof MODEL_REGISTRY;
