import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "../styles/ItemList.css";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  collection,
} from "firebase/firestore";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  //get data from firebase for itemListContainer
  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");
    if (!id) {
      const queryCollectionFilter = query(queryCollection);
      getDocs(queryCollectionFilter).then((resp) => {
        setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })));
        setLoading(false);
      });
    } else {
      const queryCollectionFilter = query(queryCollection,where("category", "==", id));
      getDocs(queryCollectionFilter)
        .then((resp) =>
          setItems(resp.docs.map((el) => ({ id: el.id, ...el.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  //get hardcoded data from getFetch
  // useEffect(() => {
  //   if (id) {
  //     getFetch()
  //     .then(res=> setItems(res.filter(item => item.category == id )))
  //     .catch((err)=> console.log(err))
  //     .finally(()=>setLoading(false))
  // } else {
  //     getFetch()
  //     .then(res=> setItems(res))
  //     .catch((err)=> console.log(err))
  //     .finally(()=>setLoading(false))
  // }

  // }, [id]);

  return (
    <>
      <div className="item-list-grid">
        {loading ? (
          <div>
            <div className="lds-ring">
              <div></div>
            </div>
            <br></br>Cargando..
          </div>
        ) : (
          <ItemList items={items} />
        )}
      </div>
    </>
  );
}
export default ItemListContainer;
