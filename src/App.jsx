import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ChatbotCaseStudy from './pages/case-studies/ChatbotCaseStudy'
import WikitracCaseStudy from './pages/case-studies/WikitracCaseStudy'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-study/chatbot" element={<ChatbotCaseStudy />} />
      <Route path="/case-study/wikitrac" element={<WikitracCaseStudy />} />
    </Routes>
  )
}
