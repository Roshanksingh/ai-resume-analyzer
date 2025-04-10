export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const pdfParse = require("pdf-parse");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const role =
      (formData.get("role") as string)?.trim() || "Software Developer";

    if (!file || file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Invalid file type." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const pdfData = await pdfParse(buffer);
    const resumeText = pdfData.text;

    const prompt = `
You are a professional resume reviewer.

Please review the following resume for the role of **${role}**.

Return your analysis in JSON format like:
{
  "score": "8/10",
  "skill_match": "...",
  "grammar_formatting": "...",
  "improvements": ["...", "..."]
}

Resume:
${resumeText}
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a professional resume reviewer." },
        { role: "user", content: prompt },
      ],
    });

    const raw = response.choices[0].message.content ?? "{}";
    const cleaned = raw.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    return NextResponse.json({ result: parsed });
  } catch (error: any) {
    console.error("Error in /api/analyze:", error);
    return NextResponse.json(
      { error: "Resume analysis failed." },
      { status: 500 }
    );
  }
}
