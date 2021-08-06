import { deleteProductAction } from '../../store/products/actions';
import styles from './ProductDetalle.module.css';
import { useDispatch } from 'react-redux';

interface ProductModel {
    name: string,
    price: number,
    description: string,
    id: number,
    color: string
}

function ProductDetalle({ name, price, description, id, color }: ProductModel) {
    const dispatch = useDispatch();


    const handlerDelete = () => {
        dispatch(deleteProductAction(id));
    }

    return (
        <div>
            {
                <div className="mt-4">
                    <div className={styles.detalleCont}>
                        <p>Nombre: {name} </p>
                        <p>Precio: ${price}</p>
                        <p>Descripción: {description}</p>
                        <p>Color: {color}</p>
                    </div>
                    <hr />
                    <div>
                        <button className="btn btn-danger" onClick={handlerDelete}>Eliminar Producto</button>
                    </div>
                </div>

            }
        </div>
    )
}

export default ProductDetalle
