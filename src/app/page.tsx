import TopicList from '@/components/TopicList'

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">WebDev Topics</h1>
      <p className="mb-4">MongDB CRUD Example</p>
      <TopicList />
    </div>
  )
}
