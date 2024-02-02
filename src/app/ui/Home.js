import Link from 'next/link';

async function getData() {
    const res = await fetch('https://65b4c81b41db5efd2866e9ba.mockapi.io/api/v1/articles')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Home() {
    const data = await getData();

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-6xl font-bold text-center">
          My R&D Blog
        </h1>

        <ul>
          {data && data.map((item, index) => (
            <li key={index}>
                <Link href={`/article/${item.id}`}>
                {item.name}
                </Link>
            </li>
          ))}
        </ul>

      </main>
    );
  }
