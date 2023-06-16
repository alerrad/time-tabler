export default function Status(props) {
    return (
        <li>
           <span style={{background: props.color}}></span>
           <p style={{color: props.color}}>{props.name}</p> 
        </li>
    )
}