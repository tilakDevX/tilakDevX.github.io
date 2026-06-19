import SectionLabel from '../ui/SectionLabel'
import BlogCard from '../ui/BlogCard'
import { articles } from '../../data/blog'

export default function Blog() {
  return (
    <section id="blog" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-14">
          <SectionLabel>WRITING</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-2">Technical Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <BlogCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
