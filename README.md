# Scripture corpus status

This directory is intentionally not populated with unverified bulk text. The application must not claim to contain the complete Vedas, Bhagavad Gita, Mahabharata, Ramayana or Puranas until each exact edition and redistribution right is reviewed.

## Candidate research leads (not automatically approved)
- `crine-in/art-hinduism`: broad structured catalogue and texts; inspect per-file provenance and license before import.
- `bhavykhatri/DharmicData`: advertises several requested works; independently audit source editions, coverage and license.
- `vedicscriptures/bhagavad-gita`: Bhagavad Gita verse/translations resource; preserve its license and translator attribution.
- IIT Kanpur Heritage/Gita resources: original Sanskrit and translations may have different rights. Do not assume translation redistribution is permitted.

## Required metadata for every imported text
`id`, `collection`, `work`, `section`, `chapter`, `verse`, `original_script`, `original_text`, `transliteration`, `transliteration_scheme`, translations with translator and edition, source URL/scan identifier, SPDX license, attribution, verification status and checksum.

A source repository's MIT license does not necessarily cover all third-party content embedded in it. Review its license and notices, plus individual translation rights.
