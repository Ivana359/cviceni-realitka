export const Estate = (props)=>{
    return (
        <>
        <div>
            <h1>{props.title}</h1>
            <h2>Lokalita: {props.city}</h2>
            <p>{props.text}</p>
            <h3>Cena: {props.price} Kč</h3>
            <img className ="obrazek" src={props.photo} alt="obrázek domu"></img>
            <div className = "kontakt">
            <h4>Kontaktní osoba: {props.name}</h4> 
           <p> E-mail: {props.email}<br/>
            Telefon: {props.phone}</p>
            </div>
            </div>
            </>
    )
}