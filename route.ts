import {NextResponse} from "next/server";import {z} from "zod";
const Schema=z.object({question:z.string().trim().min(1).max(4000),scripture:z.enum(["all","bhagavad-gita","shiv-mahapurana","rigveda","samaveda","yajurveda","atharvaveda"]),language:z.enum(["en","gu","hi"])});
export async function POST(req:Request){const parsed=Schema.safeParse(await req.json());if(!parsed.success)return NextResponse.json({error:"Invalid request"},{status:400});
// TODO: authenticate, rate-limit, retrieve verified passages, call private provider, validate citations.
return NextResponse.json({status:"not-configured",message:"Verified corpus and GYANTRA provider are not configured."},{status:503});}
