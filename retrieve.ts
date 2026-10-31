import type { ScripturePassage, ScriptureId } from "./types";
export function retrieveExact(query:string, scripture:ScriptureId|"all", language:"en"|"gu"|"hi", corpus:ScripturePassage[]) {
 const q=query.normalize("NFC").toLocaleLowerCase().trim(); if(!q) return [];
 return corpus.filter(p=>p.verificationStatus==="verified"&&(scripture==="all"||p.scriptureId===scripture))
 .filter(p=>[p.original.script,p.transliteration?.text??"",p.translations[language]?.text??""].some(v=>v.normalize("NFC").toLocaleLowerCase().includes(q)));
}
// Production: combine lexical BM25 + multilingual embeddings + reranking.
// Similarity is a retrieval signal, never proof that a passage supports a claim.
