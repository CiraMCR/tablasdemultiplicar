import React from 'react';
var numero= prompt("Que tabla de multiplicar desea mostrar ");

/*const Prueba = () =>{
return(
    <div>
    <h3>Tablas de Multiplicar {numero}</h3>

    </div>
);
//}*/
class TablasMulti extends React.Component{
    constructor(props){
        super(props);
        this.state={numero:1,limite:10};

    }
      render() {
          
        let tabla=[]
        for(let i=1;i<=this.state.limite;i++){
          tabla.push(<p><b>{numero} x {i} = {i * parseFloat(numero)}</b></p>)
        }
        return (
            <div>
                <h3>Se muestra la tabla del {numero}</h3>
                <div>{tabla}</div> 
            </div>
           
          );
      }
}

export default function App() {
    return <TablasMulti/>;
}
