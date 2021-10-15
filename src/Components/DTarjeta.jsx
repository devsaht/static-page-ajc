
const DTarjeta = ({data,color,setItem}) => {

    const onClick = () =>{
        setItem(data)
    }

    return ( 
        <>
        <div className="flex-column dTarjeta" style={{backgroundColor:color}}  onClick={onClick}>
            <div className="dTexto">{data.titulo}</div>
            <img src={data.imgSource} alt="AJC Dashboard" />
        </div>
        </>
        
     );
}
 
export default DTarjeta;