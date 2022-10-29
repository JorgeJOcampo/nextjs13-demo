export default async function Expenses() {
    const a = await new Promise(resolve => setTimeout(resolve, 1000));
    return <div>Expenses</div>
}