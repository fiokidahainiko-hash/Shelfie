import { NextRequest, NextResponse } from "next/server";

/**
 * This is a MOCK generation endpoint. It validates the request and
 * returns a placeholder response so the front end has something to
 * render end-to-end.
 *
 * To wire up a real video model, replace the body of this handler with
 * a call to the provider of your choice, e.g.:
 *
 *   const res = await fetch("https://api.kling.ai/v1/videos", {
 *     method: "POST",
 *     headers: {
 *       Authorization: `Bearer ${process.env.KLING_API_KEY}`,
 *       "Content-Type": "application/json",
 *     },
 *     body: JSON.stringify({ prompt: script, image_url: productUrl }),
 *   });
 *   const job = await res.json();
 *   // Most providers are async: return a job id here and poll a
 *   // separate /api/generate/[jobId] route until status === "completed".
 */
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { productUrl, script, model } = body ?? {};

  if (!productUrl || !script) {
    return NextResponse.json(
      { error: "productUrl and script are required" },
      { status: 400 }
    );
  }

  // TODO: replace with a real provider call (Runway, Kling, Veo, HeyGen...)
  return NextResponse.json({
    jobId: `mock_${Date.now()}`,
    model,
    status: "queued",
    previewUrl: null,
  });
}
