"use client";

import { useState } from "react";

type Status = "idle" | "queued" | "rendering" | "done" | "error";

export default function GeneratePage() {
  const [productUrl, setProductUrl] = useState("");
  const [script, setScript] = useState("");
  const [model, setModel] = useState("kling-3");
  const [status, setStatus] = useState<Status>("idle");
  const [resultUrl, setResultUrl] = useState<string | null>(null);

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setStatus("queued");
    setResultUrl(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productUrl, script, model }),
      });
      const data = await res.json();

      setStatus("rendering");
      // In a real integration this would poll a job id until the
      // underlying model (Runway/Kling/etc.) reports completion.
      setTimeout(() => {
        setResultUrl(data.previewUrl);
        setStatus("done");
      }, 1500);
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-ink px-6 md:px-12 py-12">
      <p className="timecode text-xs text-ember mb-2">STUDIO</p>
      <h1 className="font-display text-3xl md:text-4xl text-bone mb-8">
        New UGC take
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
        <form onSubmit={handleGenerate} className="space-y-6">
          <div>
            <label className="timecode text-xs text-mute block mb-2">
              PRODUCT URL OR IMAGE LINK
            </label>
            <input
              required
              value={productUrl}
              onChange={(e) => setProductUrl(e.target.value)}
              placeholder="https://yourstore.com/products/..."
              className="w-full bg-panel border border-rail rounded-lg px-4 py-3 text-bone placeholder:text-mute focus:outline-none focus:border-amber"
            />
          </div>

          <div>
            <label className="timecode text-xs text-mute block mb-2">
              SCRIPT OR HOOK
            </label>
            <textarea
              required
              value={script}
              onChange={(e) => setScript(e.target.value)}
              rows={4}
              placeholder="Okay so I was skeptical about this at first, but..."
              className="w-full bg-panel border border-rail rounded-lg px-4 py-3 text-bone placeholder:text-mute focus:outline-none focus:border-amber resize-none"
            />
          </div>

          <div>
            <label className="timecode text-xs text-mute block mb-2">
              MODEL
            </label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full bg-panel border border-rail rounded-lg px-4 py-3 text-bone focus:outline-none focus:border-amber"
            >
              <option value="kling-3">Kling 3.0</option>
              <option value="veo-3">Veo 3</option>
              <option value="runway-gen4">Runway Gen-4</option>
              <option value="heygen-avatar">HeyGen Avatar</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={status === "queued" || status === "rendering"}
            className="w-full px-6 py-3 rounded-full bg-amber text-ink font-medium hover:bg-bone transition-colors disabled:opacity-50"
          >
            {status === "idle" && "Generate"}
            {status === "queued" && "Queuing take…"}
            {status === "rendering" && "Rendering…"}
            {status === "done" && "Generate another"}
            {status === "error" && "Try again"}
          </button>
        </form>

        <div className="border border-rail rounded-2xl bg-panel p-6 flex flex-col">
          <p className="timecode text-xs text-mute mb-4">PREVIEW</p>
          <div className="flex-1 aspect-[9/16] max-h-[420px] rounded-lg border border-rail bg-gradient-to-b from-rail to-panel flex items-center justify-center">
            {status === "idle" && (
              <p className="text-mute text-sm px-6 text-center">
                Your rendered take will appear here.
              </p>
            )}
            {(status === "queued" || status === "rendering") && (
              <p className="timecode text-xs text-ember animate-pulse">
                {status === "queued" ? "QUEUED…" : "RENDERING…"}
              </p>
            )}
            {status === "done" && resultUrl && (
              <p className="text-bone text-sm px-6 text-center">
                Mock render ready — wire a real model API into{" "}
                <code className="text-ember">/app/api/generate</code> to
                return an actual video URL.
              </p>
            )}
            {status === "error" && (
              <p className="text-ember text-sm px-6 text-center">
                Something went wrong. Try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
