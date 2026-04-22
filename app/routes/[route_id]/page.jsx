export default function DetailsPage({params}){
    return(
        <div>
            <h1>Route Details</h1>
            <h2>Details About Route : {params.routeId}</h2>
        </div>
    )
}