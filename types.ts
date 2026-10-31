export type ScriptureId = "bhagavad-gita"|"shiv-mahapurana"|"rigveda"|"samaveda"|"yajurveda"|"atharvaveda";
export interface ScripturePassage {
 id:string; scriptureId:ScriptureId; book?:string; chapter?:string; verse?:string;
 sourceEdition:string; sourceUrl?:string; verificationStatus:"verified"|"review-needed"|"demo";
 original:{language:"sa";script:string};
 transliteration?:{scheme:string;text:string};
 translations:{en?:{text:string;translator:string;edition:string};gu?:{text:string;translator:string;edition:string};hi?:{text:string;translator:string;edition:string}};
 commentary?:Array<{author:string;tradition?:string;text:string;edition:string}>; tags:string[];
}
