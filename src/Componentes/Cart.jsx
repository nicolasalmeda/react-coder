import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import {
  writeBatch,
  getDoc,
  doc,
  addDoc,
  collection,
  Timestamp,
} from "firebase/firestore";
import { firestoreDb } from "../firebase/firebase";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export default function Cart() {
  const { cart, clear, removeItem, getTotal } = useContext(CartContext);
  const MySwal = withReactContent(Swal);
  const [processingOrder, setProcessingOrder] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleContactForm = (e) => {
    e.preventDefault();

    const objContact = {
      name,
      phone,
      address,
    };
    setContact(objContact);
    setName("");
    setPhone("");
    setAddress("");
  };

  const confirmOrder = () => {
    if (
      contact.phone !== "" &&
      contact.address !== "" &&
      contact.comment !== "" &&
      contact.name !== ""
    ) {
      setProcessingOrder(true);

      const objOrder = {
        buyer: contact,
        items: cart,
        total: getTotal(),
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(firestoreDb);
      const outOfStock = [];

      objOrder.items.forEach((prod) => {
        getDoc(doc(firestoreDb, "products", prod.id)).then((response) => {
          if (response.data().stock >= prod.totalItem) {
            batch.update(doc(firestoreDb, "products", response.id), {
              stock: response.data().stock - prod.totalItem,
            });
          } else {
            outOfStock.push({ id: response.id, ...response.data() });
          }
        });
      });
      if (outOfStock.length === 0) {
        addDoc(collection(firestoreDb, "orders"), objOrder).then(({ id }) => {
          batch
            .commit()
            .then(() => {
              MySwal.fire({
                icon: "success",
                title: "Orden generada",
                text: `
              La orden se genero existosamente, su numero de orden es: ${id}
              Para ${contact.name} Dirección ${contact.address}
              `,
                confirmButtonColor: "#20e973",
              });
            })
            .catch((error) => {
              alert("error", error);
            })
            .finally(() => {
              setProcessingOrder(false);
            });
        });
      }
    } else {
      MySwal.fire({
        icon: "error",
        title: "Faltan Datos",
        text: "Debe completar todos los campos del formulario",
      });
    }
  };

  if (processingOrder) {
    return <h2> Se esta procesando su pedido</h2>;
  }

  let total = 0;
  return (
    <div>
      <ul>
        {cart.map((items) => {
          const subtotal = items.price * items.totalItem;

          total = total + subtotal;

          return (
            <div className={styles.Cont} key={items.id}>
              <div className={styles.container}>
                <div className={styles.imgContainer}>
                  <img className={styles.img} src={items.img} alt="img" />
                </div>
                <div className={styles.containerTitle}>
                  <h3 className={styles.title}>{items.name}</h3>
                  <p>{items.description}</p>
                </div>
                <div className={styles.detailsContainer}>
                  <p> Price: $ {items.price} </p>
                  <p className={styles.totalItem}>
                    Total de Items: {items.totalItem}
                  </p>
                  <p className={styles.subtotal}>SubTotal: $ {subtotal} </p>
                  <button
                    onClick={() => removeItem(items.id)}
                    className={styles.buttonRemove}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
      <div className={styles.finalPrice}>
        <p>Precio Total:{getTotal()}</p>
      </div>
      <div className={styles.ContactContainer}>
        <div>Contacto</div>
        <form className={styles.ContactForm} onSubmit={handleContactForm}>
          <div className={styles.conta}>
            <label className={styles.LabelContact}>
              Nombre:
              <input
                className={styles.InputContact}
                type="text"
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </label>
          </div>
          <div className={styles.conta}>
            <label className={styles.LabelContact}>
              Telefono:
              <input
                className={styles.InputContact}
                type="text"
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </label>
          </div>
          <div className={styles.conta}>
            <label className={styles.LabelContact}>
              Direccion:
              <input
                className={styles.InputContact}
                type="text"
                value={address}
                onChange={({ target }) => setAddress(target.value)}
              />
            </label>
          </div>

          <div>
            <button className={styles.ButtonSubmit} type="submit">
              Confirmar
            </button>
          </div>
        </form>
      </div>
      <div className={styles.buttonContainer}>
        <div>
          <button
            className={styles.confirmButton}
            onClick={() => confirmOrder()}
          >
            Confirmar Compra
          </button>
        </div>
        <div>
          <button onClick={() => clear()}>Clear</button>
        </div>
      </div>
      {contact.phone !== "" &&
        contact.address !== "" &&
        contact.comment !== "" &&
        contact.name !== "" && (
          <div>
            <h4>Nombre: {contact.name}</h4>
            <h4>Telefono: {contact.phone}</h4>
            <h4>Direccion: {contact.address}</h4>
            <h4>Comentario: {contact.comment}</h4>
            <button
              onClick={() =>
                setContact({ phone: "", address: "", comment: "" })
              }
              className="Button"
              style={{ backgroundColor: "#db4025" }}
            >
              Borrar datos de contacto
            </button>
          </div>
        )}
      <div>
        <Link to={"/"}>
          <button className={styles.navigateButton}>Seguir Navegando</button>
        </Link>
      </div>
    </div>
  );
}
