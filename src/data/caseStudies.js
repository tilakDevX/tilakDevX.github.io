export const caseStudies = [
  {
    id: 1,
    slug: "chatbot",
    title: "Building a Deterministic LLM Chatbot with Text-to-SQL + RAG",
    teaser: "How I designed a dual-source AI chatbot for enterprise compliance data — with multi-layer intent classification, dynamic schema injection, server-enforced RBAC, SQL safety guardrails, and a RAG pipeline for knowledge base queries.",
    tags: ["LLM", "Text-to-SQL", "RAG", "RBAC", "PostgreSQL", "Django"],
    number: "01",
    sections: [
      {
        type: "paragraph",
        title: "Overview",
        body: "The Compliance Management Tool needed a way for enterprise users to query their compliance data without writing SQL or navigating complex dashboards. The solution: a dual-source AI chatbot that routes queries to either a Text-to-SQL engine (for structured data queries) or a RAG pipeline (for knowledge base questions about compliance procedures).",
      },
      {
        type: "list",
        title: "The Challenge",
        items: [
          "Enterprise compliance data is highly sensitive — every query must respect RBAC boundaries",
          "SQL generation must be deterministic and safe — no DELETE, DROP, or UPDATE statements",
          "Schema is complex (60+ tables) — dynamic schema injection needed per tenant",
          'Users ask both data questions ("How many audits in Q3?") and knowledge questions ("What is the approval process?")',
        ],
      },
      {
        type: "architecture",
        title: "Architecture",
        diagram: [
          { text: "[User Message]" },
          { text: "      \u2193", className: "text-cyan" },
          { text: "[Intent Classifier] \u2014 routes to SQL path or RAG path" },
          { text: "      \u2193                           \u2193", className: "text-cyan" },
          { text: "[Text-to-SQL Engine]          [RAG Pipeline]" },
          { text: "  \u00b7 Schema injection            \u00b7 Vector search" },
          { text: "  \u00b7 RBAC filter injection       \u00b7 Knowledge base" },
          { text: "  \u00b7 SQL safety guardrails       \u00b7 Context retrieval" },
          { text: "      \u2193                           \u2193", className: "text-cyan" },
          { text: "[PostgreSQL Query]           [LLM Response]" },
          { text: "      \u2193                           \u2193", className: "text-cyan" },
          { text: "        [Transparency Engine \u2014 unified response]", className: "text-emerald" },
        ],
      },
      {
        type: "decisions",
        title: "Key Engineering Decisions",
        decisions: [
          {
            heading: "Why Text-to-SQL over pure RAG?",
            body: 'RAG is excellent for unstructured knowledge but unreliable for precise numerical queries. Text-to-SQL guarantees exact answers for structured data ("total audits in 2024: 1,247"). By combining both, we get the best of both worlds \u2014 precise data queries + flexible knowledge retrieval.',
          },
          {
            heading: "Multi-layer intent classification",
            body: "A lightweight classifier first determines query type (data vs knowledge). Data queries go through a second layer that identifies which tables/columns are relevant, enabling dynamic schema injection without exposing the full 60-table schema to the LLM.",
          },
          {
            heading: "SQL safety guardrails",
            body: "Before execution, every generated SQL is parsed and checked against a deny list of operations (DROP, DELETE, UPDATE, ALTER). A regex-based validator also ensures only SELECT queries pass through. This runs server-side and cannot be bypassed.",
          },
        ],
      },
      {
        type: "paragraph",
        title: "What I Learned",
        body: 'Building deterministic LLM features for enterprise requires a fundamentally different approach from consumer AI. Every output must be auditable, explainable, and bounded by business rules. The "transparency engine" \u2014 showing users exactly how each answer was derived \u2014 turned out to be as important as the AI capability itself. Users trust the system more when they can see the SQL that produced their answer or the source documents used in a RAG response.',
      },
    ],
  },
  {
    id: 2,
    slug: "wikitrac",
    title: "Real-Time GPS Ingestion at 2,000+ Events/Sec with Apache Kafka",
    teaser: "How I built a fault-tolerant real-time vehicle telematics pipeline with Kafka, three independent consumers, Redis pub/sub for live dashboards, and geofence breach detection with 80% DB load reduction.",
    tags: ["Kafka", "WebSocket", "Redis", "Node.js", "MongoDB", "Docker"],
    number: "02",
    sections: [
      {
        type: "paragraph",
        title: "Overview",
        body: "The Vehicle Telematics Platform needed to ingest, process, and display real-time GPS data from thousands of vehicles simultaneously. Every second, 2,000+ location events needed to be: checked for geofence breaches, displayed on a live dashboard, and logged for trip analysis \u2014 all with sub-second latency.",
      },
      {
        type: "list",
        title: "The Challenge",
        items: [
          "2,000+ GPS events per second during peak hours \u2014 a single server process would be a bottleneck",
          "Three independent consumers needed access to the same event stream",
          "Geofence checks required low-latency access to frequently changing geographic boundaries",
          "Live dashboard needed sub-second refresh for 500+ concurrent users",
          "Database queries for geofence data were creating a bottleneck under load",
        ],
      },
      {
        type: "architecture",
        title: "Architecture",
        diagram: [
          { text: "[GPS Devices] \u2192 [Kafka Producer]" },
          { text: "                              \u2193", className: "text-cyan" },
          { text: "                     [Apache Kafka]" },
          { text: "                     /     |      \\" },
          { text: "                    \u2193      \u2193       \u2193", className: "text-cyan" },
          { text: "             [Alert]  [Live]   [Trip]" },
          { text: "             Consumer Consumer Consumer" },
          { text: "                \u2193         \u2193        \u2193", className: "text-cyan" },
          { text: "          [Redis Cache] [Socket.io] [MongoDB]" },
          { text: "               |       + Redis Pub/Sub  |" },
          { text: "               \u2193            \u2193           \u2193", className: "text-cyan" },
          { text: "          [Geofence]  [500+ Users]  [Trips]" },
          { text: "          [Breach Check] [Dashboards] [History]" },
        ],
      },
      {
        type: "decisions",
        title: "Key Engineering Decisions",
        decisions: [
          {
            heading: "Why Kafka over a simple queue?",
            body: "Three independent consumers needed to process the same event stream independently. Kafka's consumer groups allow each consumer (alert, live dashboard, trip logging) to maintain its own offset and process at its own pace. A simple queue like RabbitMQ would require fan-out exchanges or duplicate messages.",
          },
          {
            heading: "Redis cache for geofence data",
            body: "Geofence boundaries were stored in PostgreSQL but queried on every GPS event \u2014 causing 80% of database load. By caching geofence polygons in Redis with TTL-based invalidation, we eliminated redundant queries while keeping geofence data fresh within seconds of updates.",
          },
          {
            heading: "WebSocket + Redis pub/sub",
            body: "Socket.io with Redis pub/sub enabled horizontal scaling of the WebSocket layer. Any server instance can broadcast to any connected client, and the Redis adapter handles cross-instance message delivery. This was critical for supporting 500+ concurrent dashboard users.",
          },
        ],
      },
      {
        type: "paragraph",
        title: "What I Learned",
        body: "This project taught me that real-time systems are fundamentally about managing backpressure and decoupling. Kafka's buffering meant the ingestion pipeline never lost data even when downstream consumers lagged. Redis proved that not all data needs to live in the primary database \u2014 caching with the right invalidation strategy can eliminate orders of magnitude of unnecessary load. The Outstanding Performer recognition came from the reliability of this system \u2014 it processed millions of events daily without a single data loss incident.",
      },
    ],
  },
]
