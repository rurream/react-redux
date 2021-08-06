import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { productListSelector } from '../../store/products/selectors';
import styles from './ProductDetail.module.css';
import { deleteProductAction } from '../../store/products/actions';
import { useDispatch} from 'react-redux';

function ProductDetail () {
    const {id}  = useParams<any>();
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] =useState('');
    const [color, setColor] = useState("");
    const history = useHistory();
    const productList = useSelector(productListSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        let aux :any 
        aux=productList.find(prod=> prod.id == id);
        setName(aux.name);
        setPrice(aux.price);
        setDescription(aux.description);
        setColor(aux.color);
        
    }, [id]);

    const handlerDelete = () => {
        dispatch(deleteProductAction(parseInt(id)));
        history.push('/products');
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

export default ProductDetail 
