# VEDANTIQ AI — Implementation blueprint

## Brand
VEDANTIQ combines the project's chosen associations: VEDA + ANTIQUE + IQ. GYANTRA combines GYAN + YANTRA. These are brand-created word constructions, not asserted classical Sanskrit etymologies. VEDANTIQ is the platform; GYANTRA is a versioned engine registry.

## Boot scene
The current implementation uses a GSAP timeline to reveal the supplied gold logo, transition to the blue GYANTRA logo, reveal the brand text and fade into the app. React Three Fiber renders a lightweight animated star field behind it. It is 3D-inspired rather than literal 4D. For production, add a custom shader/particle burst, dispose GPU resources, pause when hidden, cap device pixel ratio, and preserve a skip control and reduced-motion fallback.

## UI visual language
- Glassmorphism / liquid-glass-inspired: translucent surfaces, 24–30px blur, saturation, fine border, specular top highlight and restrained inset shadow.
- Neomorphism / Soft UI: only secondary controls; preserve contrast.
- Skeuomorphism: only when physical affordance helps.
- Claymorphism: empty-state art.
- Bento: dashboard layout.
- Cinematic: boot and landing hero.
- Brutalist details: small labels and dividers.
- Morphing / micro-interactions: Framer Motion for UI, GSAP for timeline.
- Hyperrealism: pre-rendered brand artwork or optimized 3D assets.
- Parallax: decorative layers only; disable for reduced motion.

CSS backdrop-filter is blur and saturation, not true optical refraction. True distortion/refraction requires a shader and should never obscure text or controls.

## Scripture ingestion
1. Register a source edition and rights record.
2. Download only where terms permit.
3. Parse into stable passage records.
4. Preserve original source references and translator attribution.
5. Normalize Unicode while retaining original text.
6. Validate expected verse/chapter counts where authoritative.
7. Compare samples against source scans.
8. Record checksum, corpus version and reviewer.
9. Publish only records marked verified.

## Suggested record
```json
{
  "id": "bg-2-47-edition-x",
  "collection": "bhagavad-gita",
  "work": "Bhagavad Gita",
  "chapter": "2",
  "verse": "47",
  "original": {"script": "Devanagari", "text": "verified source text"},
  "transliteration": {"scheme": "IAST", "text": "verified transliteration"},
  "translations": {
    "en": {"text": "translation", "translator": "name", "edition": "edition"},
    "gu": {"text": "translation", "translator": "name", "edition": "edition"},
    "hi": {"text": "translation", "translator": "name", "edition": "edition"}
  },
  "source": {"url": "source locator", "license": "SPDX identifier"},
  "verificationStatus": "verified"
}
```
Example only; placeholder text is not an authentic verse.

## Retrieval and guardrails
- Validate request, language and scripture filter.
- Exact verse lookup first when a reference is supplied.
- Otherwise use lexical + multilingual embedding retrieval.
- Rerank; enforce evidence thresholds.
- Provide only retrieved verified passages to the generation model.
- Require structured citation IDs.
- Validate IDs and metadata against retrieved records.
- Abstain on missing, weak or conflicting evidence.
- Keep translations, commentary and AI explanation visibly separate.

A similarity score does not establish that a passage entails a generated statement. Add human-reviewed evaluation questions and adversarial tests.

## Feedback
Store response ID, rating, optional reason, engine/corpus version and passage IDs. Queue for human review. Never auto-edit sacred source records or fine-tune directly from a rating.

## Model registry
Keep model versions in a registry keyed by stable IDs, e.g. `gyantra-1.3`, `gyantra-2.0`. Each version declares prompt version, retrieval version, corpus compatibility and evaluation results. Client-selected labels are never trusted by the server.

## Security and launch
Keep provider keys server-side. Add auth, rate limiting, schema validation, request limits, logging minimization, data retention/deletion, backups, error monitoring and prompt-injection defenses. Optimize 3D for mobile and provide keyboard access, focus states, sufficient contrast and reduced motion.
