interface Item {
    id: number;
    name: string;
}

async function fetchItems(): Promise<Item[]> {
    const res = await fetch('http://localhost:3000/api/items');
    if (!res.ok) {
        //throw new Error('Failed to fetch data');
        console.log('Failed to fetch data');
    }
    return res.json();
}

export default async function Home() {
    const items = await fetchItems();

    return (
        <div>
            <h1>Items List</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}