export default async function () {
    const res = await fetch("http://localhost:3000/api/hello")
    const data = await res.json();

    return data;
};

