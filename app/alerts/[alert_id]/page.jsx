export default function DetailsPage({params}){
    return(
        <div>
            <h1>Alert Details</h1>
            <h2>Details About Alert : {params.lineId}</h2>
        </div>
    )
}