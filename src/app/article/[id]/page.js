// /articles/:id

async function getData(id) {
    const res = await fetch('https://65b4c81b41db5efd2866e9ba.mockapi.io/api/v1/articles/' + id )
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch');
    }

    return res.json()
}


export default async function Page({ params }) {
    const data = await getData(params.id);
    const date = new Date(data.createdAt);
    const formattedDate = date.toDateString();
    return <>
        <h1>{data.name}</h1>
        <h5>Published: {formattedDate} by {data.author}</h5>
        <hr />
        <p dangerouslySetInnerHTML={{ __html: data.content.replace("\n" , "</p><p>") }}>
        </p>
        </>
}