const Toto = props => {

    return(
        
        <div>
            <h2> {props.name} </h2>

            <button
            disabled={props.leState.disabled}
            onClick={() => props.reponseToto("Non je veux regarder la télé!")}>Réponse Toto</button>

            <p> {props.leState.messageToto} </p>
        </div>
    )
}
export default Toto;