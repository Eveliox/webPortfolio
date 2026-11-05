import { projects } from "./data";

export const caseStudies = [
  {
    slug: "relay", project: projects[0], number: "01", discipline: "Geospatial systems", title: "Finding connections in a fragmented grid.",
    outcome: "252 projects extracted · 39 coordination opportunities identified",
    problem: "Transmission plans are scattered across lengthy utility PDFs. Relay was built at ShellHacks 2026 for Sperry Tech’s Gridlock challenge to make cross-utility coordination opportunities easier to find.",
    contribution: "My work focused on PDF extraction and geocoding, the PostGIS schema and transactional loader, and the overlap engine exposed through FastAPI. Relay was a team project; these notes focus on those backend and data contributions.",
    decision: "Match substation names to OpenStreetMap data, store the results in PostGIS, and use distance and in-service timing to surface candidate overlaps. This makes fragmented plans queryable without requiring a common source format.",
    tradeoff: "Name matching and geocoding introduce uncertainty. Spatial proximity is a useful screening signal, but cannot establish that two transmission projects are technically compatible.",
    results: "The project record reports 252 transmission projects extracted from more than 700 PDF pages and 39 coordination opportunities. The overlap results matched the sponsor’s reference results for the challenge dataset.",
    limitations: "That comparison is specific to the challenge data, not a general accuracy benchmark. Ambiguous substation names, missing coordinates, and incomplete dates still need review. This exhibit uses fictional centroids rather than the original dataset.",
    architecture: ["Utility PDFs", "Extract + geocode", "PostGIS", "Overlap engine", "Coordination map"],
  },
  {
    slug: "biomedical-rag", project: projects[1], number: "02", discipline: "Retrieval & grounded AI", title: "An answer is only as useful as its evidence.",
    outcome: "PubMed retrieval · Inspectable citations · Local inference",
    problem: "Research answers need traceable sources. This project searches PubMed and generates answers from retrieved papers, giving readers numbered references they can inspect.",
    contribution: "I built the retrieval-to-answer workflow: PubMed ingestion, embeddings and Chroma storage, cross-encoder reranking, local Ollama streaming, and the Next.js interface. Swappable Protocol interfaces separate the model, embeddings, store, and reranker.",
    decision: "Retrieve candidate chunks, then rerank the top 20 with an MS-MARCO cross-encoder before generating an answer. Interfaces allow retrieval and inference choices to evolve independently.",
    tradeoff: "Reranking adds inference work and latency. Local generation gives control over the model runtime, but performance and answer quality depend on hardware, the selected model, and retrieval coverage.",
    results: "The implementation includes streaming answers, clickable PubMed citations, and tests for retrieval deduplication and citation-number validation. No measured retrieval-quality or claim-support benchmark is published in this portfolio.",
    limitations: "Checking whether a citation number exists does not verify that a passage supports the generated claim. A next evaluation would measure relevance, claim support, and abstention on a fixed question set. The exhibit uses authored answers and fictional passages.",
    architecture: ["PubMed", "Embed + retrieve", "Rerank", "Local generation", "Cited answer"],
  },
  {
    slug: "alpaca-agents", project: projects[2], number: "03", discipline: "Reliable execution", title: "Designing the decision not to trade.",
    outcome: "Paper-only execution · Deterministic rules · Offline lifecycle tests",
    problem: "An automated trading workflow must handle stale state, retries, and risk limits before considering an order. AlpacaAgents explores those constraints in a paper-only system.",
    contribution: "I separated scanning, a pure rules engine, broker execution, and reporting. The executor reconciles broker state, journals orders transactionally, and applies explicit arming and risk checks before paper execution.",
    decision: "Keep the rules engine free of I/O and test the trade lifecycle against a stateful fake broker. This makes decisions repeatable and allows failures to be exercised offline.",
    tradeoff: "A fake broker cannot capture every API failure or timing issue. Reconciliation and conservative guards can also reject an otherwise valid opportunity when state is uncertain.",
    results: "The project includes offline lifecycle tests and a walk-forward backtester designed to avoid look-ahead. Safeguards include a daily-loss breaker, per-trade risk cap, order journal, and explicit arming. This portfolio makes no profitability or live-trading performance claim.",
    limitations: "Paper execution does not establish real-market execution quality. The exhibit explains three failure guards; it does not execute the actual engine or reproduce its full check sequence.",
    architecture: ["Signal scanner", "Pure rules", "Reconcile + guard", "Paper executor", "Journal + dashboard"],
  },
];
