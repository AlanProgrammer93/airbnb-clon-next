
const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Acerca de</h5>
                <p>Como trabaja Airbnb</p>
                <p>Nuevos Cuartos</p>
                <p>Inversores</p>
                <p>Airbnb Plus</p>
            </div>
            
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Comunidad</h5>
                <p>Accesibilidad</p>
                <p>Esto es un asombroso clon</p>
                <p>Referencias aceptadas</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Anfitrion</h5>
                <p>Alan Zurita</p>
                <p>Presentaciones</p>
                <p>Unirse Ahora</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Soporte</h5>
                <p>Centro de ayuda</p>
                <p>Servicios</p>
            </div>
        </div>
    )
}

export default Footer
