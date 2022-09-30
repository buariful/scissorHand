
export default async function deleteUser(id) {


    // const response = await fetch(`https://vocal-cat-872b6e.netlify.app/api/users?id=${id}`, {
    const response = await fetch(`https://vocal-cat-872b6e.netlify.app/api/users?id=${id}`, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        }
    })
}