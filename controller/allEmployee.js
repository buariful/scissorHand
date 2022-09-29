export default async function AllEmployee() {
    const response = await fetch('https://vocal-cat-872b6e.netlify.app/api/users');
    const json = response.json();
    return json;
}