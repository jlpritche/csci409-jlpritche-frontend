export default function DetailsPage({params}){
    return(
        <div>
            <h1>Line Details</h1>
            <h2>Details About Line : {params.lineId}</h2>
        </div>
    )
}