
export default async function deleteUser(id) {


    const response = await fetch(`http://localhost:3000/api/users?id=${id}`, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        }
    })
}