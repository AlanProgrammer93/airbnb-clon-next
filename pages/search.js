import { format } from "date-fns";
import { useRouter } from "next/dist/client/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

const Search = ({searchResults}) => {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div className="">
            <Header placeholder={`${location} | ${range} | ${noOfGuests} invitados`} />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-sm">Resultados para {noOfGuests} invitados.</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        Estancias en {location}
                    </h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancelacion Flexible</p>
                        <p className="button">Type de Espacio</p>
                        <p className="button">Precio</p>
                        <p className="button">Habitaciones y Camas</p>
                        <p className="button">Mas Filtros</p>
                    </div>
                    
                    <div className="flex flex-col">
                        {
                            searchResults.map(item => (
                                <InfoCard 
                                    key={item.img}
                                    img={item.img}
                                    location={item.location}
                                    title={item.title}
                                    description={item.description}
                                    star={item.star}
                                    price={item.price}
                                    total={item.total}
                                />
                            ))
                        }
                    </div>
                </section>

                <section className="hidden xl:inline-flex xl:min-w-[600px]">
                    <Map searchResults={searchResults} />
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz')
        .then(res => res.json());

    return {
        props: {
            searchResults
        }
    }
}
