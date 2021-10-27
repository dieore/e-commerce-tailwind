import type { NextPage } from 'next'

interface Products {
    nombre: string;
    descripcion: string;
    stock: number;
    precio: number;
    imagen: string;
    promo: boolean;
    categoriaId: string;
    id: string;
}

type Prop = {
  data: Products[]
}

const Home: NextPage<Prop> = ({ data }) => {
  return (
    <div className="h-72">
      {
        data.map(d => (
          <li>
            {d.nombre}
          </li>
        ))
      }
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/hello")
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Home;
