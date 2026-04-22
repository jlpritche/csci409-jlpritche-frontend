export default function DetailsPage({params}){
    return(
        <div>
            <h1>Vehicle Details</h1>
            <h2>Details About Vehicle : {params.lineId}</h2>
        </div>
    )
}