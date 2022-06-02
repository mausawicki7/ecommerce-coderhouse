import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true);
    const { id } = useParams()

//Get data from firebase for itemDetailContainer
    useEffect(() => {
        const db = getFirestore();
        const dbQuery = doc(db, 'items', id);
        getDoc(dbQuery)
        .then(resp => setItem({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[id]);

    // useEffect(() => {
    //     getFetch(id) 
    //     .then(res=> setItem(res))
    //     .catch((err)=> console.log(err))
    //     .finally(()=>setLoading(false)) 
    // }, [])
    
    return (
        <div>
            {loading ? <div><div className="lds-ring"><div></div></div><br></br>Cargando..</div> 
      : <ItemDetail item={item} />}
            
        </div>
    )
}

export default ItemDetailContainer
