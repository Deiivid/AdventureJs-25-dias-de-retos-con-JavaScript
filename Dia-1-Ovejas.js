
export default function contarOvejas(ovejas) {
    ovejas = [
     { name: 'Noa', color: 'azul' },
     { name: 'Euge', color: 'rojo' },
     { name: 'Navidad', color: 'rojo' },
     { name: 'Ki Na Ma', color: 'rojo'}
   ]
     ovejas = ovejas.filter( (oveja) => oveja.color =='rojo' && oveja.name.includes('a')&&  oveja.name.toLowerCase().includes('n'))
       
     return ovejas
   }


   /*si lo usas en visual studio

 function contarOvejas(ovejas) {
    ovejas = [
     { name: 'Noa', color: 'azul' },
     { name: 'Euge', color: 'rojo' },
     { name: 'Navidad', color: 'rojo' },
     { name: 'Ki Na Ma', color: 'rojo'}
   ]
     ovejas = ovejas.filter( (oveja) => oveja.color =='rojo' && oveja.name.includes('a')&&  oveja.name.toLowerCase().includes('n'))
       
     return ovejas
   }
const filtro = contarOvejas(this.ovejas);
console.log(filtro);
*/