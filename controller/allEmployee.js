export default async function AllEmployee() {
    const response = await fetch('http://localhost:3000/api/users');
    const json = response.json();
    return json;
}