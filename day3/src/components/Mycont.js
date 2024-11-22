export default function Mycont({msg,dosum}){
    return(
        <>
            <h1>Message received from my parent</h1>
            <p>{msg}</p>
            <p>{dosum(50,10)}</p>
        </>
    )
}