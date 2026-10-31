import type { ScripturePassage } from "../scriptures/types";
export function validateCitations(citations:Array<{passageId:string;scriptureId:string;sourceEdition:string}>, retrieved:ScripturePassage[]) {
 const allowed=new Map(retrieved.map(p=>[p.id,p]));
 return citations.filter(c=>{const p=allowed.get(c.passageId);return !!p&&p.scriptureId===c.scriptureId&&p.sourceEdition===c.sourceEdition;});
}
export function abstain(message="No sufficiently relevant verified passage was found.") {
 return {status:"insufficient-evidence" as const,answer:message,citations:[],disclaimer:"No scripture-based conclusion has been generated."};
}
// Validate every citation against retrieved IDs and metadata. Abstain on missing or conflicting evidence.
