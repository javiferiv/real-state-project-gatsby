import { graphql, useStaticQuery } from 'gatsby';

const usePropiedades = () => {
    const datos = useStaticQuery(graphql`
        query {
            allStrapiPropiedades{
                nodes {
                    nombre
                    descripcion
                    id
                    wc
                    precio
                    estacionamiento
                    habitaciones
                    categoria {
                        nombre
                    }
                    agentes {
                        nombre
                        telefono
                        email
                    }
                    imagen {
                        sharp: childImageSharp{
                            fluid(maxWidth: 600, maxHeight: 400){
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `);

    return datos.allStrapiPropiedades.nodes.map(propiedad => ({
        nombre: propiedad.nombre,
        descripcion: propiedad.descripcion,
        id: propiedad.id,
        wc: propiedad.wc,
        precio: propiedad.precio,
        estacionamiento: propiedad.estacionamiento,
        habitaciones: propiedad.habitaciones,
        imagen: propiedad.imagen,
        agentes: propiedad.agentes,
        categoria: propiedad.categoria
    }));
}

export default usePropiedades;
 
