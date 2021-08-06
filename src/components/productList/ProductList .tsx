import Detalle from '../productDetalle/ProductDetalle '
import styles from './ProductList.module.css';
import { Modal, Button } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductAction } from '../../store/products/actions';
import { productListSelector } from '../../store/products/selectors';
import { useState } from 'react';
import { isLogedSelector } from '../../store/user/selectors';


function ProductList () {
    const productList = useSelector(productListSelector);
    const dispatch = useDispatch();
    const [productDetail, setProductDetail] = useState({ name: '', price: 0, description: '', id: 0, color:'' });
    const [showModal, setShowModal] = useState(false);
    const login = useSelector(isLogedSelector);
    const history = useHistory()

    const handlerDelete = (id: any) => {
        if(login){
            dispatch(deleteProductAction(id));
        }else{
            history.push('/')
        }
    }

    const showDetail = (id: any) => {
        let aux :any 
        aux=productList.find(prod=> prod.id == id);
        setProductDetail(aux);
    }

    const handlerModal = () => {
        if(login){
            setShowModal(!showModal);
        }else{
            history.push('/')
        }
    }
   
    return (
        <div className={`${styles.table} mt-5`} >
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <td>Producto</td>
                            <td>Precio (CLP)</td>
                            <td>Color</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody >
                        {productList.map((product: any) => (


                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.color}</td>
                                <td>
                                    <Button className="btn btn-sm btn-danger py-0" onClick={() => handlerDelete(product.id)}>Remover</Button>
                                </td>
                                <td>
                                    <Button className="btn btn-sm btn-warning py-0" onClick={() => { showDetail(product.id); handlerModal() }}>Detalle</Button>
                                </td>
                                <td>
                                    <Link to={`products/detail/${product.id}`} >
                                        <Button className="btn btn-sm btn-info py-0" >go-Detail</Button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`products/update/${product.id}`} >
                                        <Button className="btn btn-sm btn-info py-0" onClick={() => { showDetail(product); handlerModal() }}>go-Update</Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* <!-- Modal --> */}
            </div>
            <Modal show={showModal} onHide={() => handlerModal()}>
                <Modal.Header closeButton>Detalle de Producto (#{productDetail.id})</Modal.Header>
                <Modal.Body>
                    <Detalle name={productDetail.name} price={productDetail.price} description={productDetail.description} id={productDetail.id} color={productDetail.color} /></Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => handlerModal()}>Ok</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProductList 
