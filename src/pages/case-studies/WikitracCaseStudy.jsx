import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionLabel from '../../components/ui/SectionLabel'
import Footer from '../../components/layout/Footer'

export default function WikitracCaseStudy() {
  return (
    <div className="min-h-screen bg-navy">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-cyan transition-colors mb-8">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <SectionLabel>Case Study 02</SectionLabel>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-8">
          Real-Time GPS Ingestion at 2,000+ Events/Sec with Apache Kafka
        </h1>

        <div className="flex flex-wrap gap-2 mb-12">
          {["Kafka", "WebSocket", "Redis", "Node.js", "MongoDB", "Docker"].map((tag) => (
            <span key={tag} className="font-mono text-xs text-text-secondary/60 bg-navy/30 px-2.5 py-1 rounded-full border border-border/50">
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-8 text-text-secondary font-body leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-text-primary mb-3">Overview</h2>
            <p>
              The Vehicle Telematics Platform needed to ingest, process, and display real-time GPS data from
              thousands of vehicles simultaneously. Every second, 2,000+ location events needed to be:
              checked for geofence breaches, displayed on a live dashboard, and logged for trip analysis —
              all with sub-second latency.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-text-primary mb-3">The Challenge</h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>2,000+ GPS events per second during peak hours — a single server process would be a bottleneck</li>
              <li>Three independent consumers needed access to the same event stream</li>
              <li>Geofence checks required low-latency access to frequently changing geographic boundaries</li>
              <li>Live dashboard needed sub-second refresh for 500+ concurrent users</li>
              <li>Database queries for geofence data were creating a bottleneck under load</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-text-primary mb-3">Architecture</h2>
            <div className="bg-slate rounded-2xl border border-border p-6 font-mono text-sm leading-relaxed">
              <p>[GPS Devices] → [Kafka Producer]</p>
              <p>                              ↓</p>
              <p>                     [Apache Kafka]</p>
              <p>                     /     |      \</p>
              <p>                    ↓      ↓       ↓</p>
              <p>             [Alert]  [Live]   [Trip]</p>
              <p>             Consumer Consumer Consumer</p>
              <p>                ↓         ↓        ↓</p>
              <p>          [Redis Cache] [Socket.io] [MongoDB]</p>
              <p>               |       + Redis Pub/Sub  |</p>
              <p>               ↓            ↓           ↓</p>
              <p>          [Geofence]  [500+ Users]  [Trips]</p>
              <p>          [Breach Check] [Dashboards] [History]</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-text-primary mb-3">Key Engineering Decisions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-base font-bold text-text-primary mb-2">Why Kafka over a simple queue?</h3>
                <p>Three independent consumers needed to process the same event stream independently. Kafka's
                  consumer groups allow each consumer (alert, live dashboard, trip logging) to maintain its own
                  offset and process at its own pace. A simple queue like RabbitMQ would require fan-out exchanges
                  or duplicate messages.</p>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-text-primary mb-2">Redis cache for geofence data</h3>
                <p>Geofence boundaries were stored in PostgreSQL but queried on every GPS event — causing 80%
                  of database load. By caching geofence polygons in Redis with TTL-based invalidation, we
                  eliminated redundant queries while keeping geofence data fresh within seconds of updates.</p>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-text-primary mb-2">WebSocket + Redis pub/sub</h3>
                <p>Socket.io with Redis pub/sub enabled horizontal scaling of the WebSocket layer. Any server
                  instance can broadcast to any connected client, and the Redis adapter handles cross-instance
                  message delivery. This was critical for supporting 500+ concurrent dashboard users.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-text-primary mb-3">What I Learned</h2>
            <p>
              This project taught me that real-time systems are fundamentally about managing backpressure and
              decoupling. Kafka's buffering meant the ingestion pipeline never lost data even when downstream
              consumers lagged. Redis proved that not all data needs to live in the primary database — caching
              with the right invalidation strategy can eliminate orders of magnitude of unnecessary load.
              The Outstanding Performer recognition came from the reliability of this system — it processed
              millions of events daily without a single data loss incident.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
