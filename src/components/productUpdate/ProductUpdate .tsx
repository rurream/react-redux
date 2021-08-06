import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateProductAction } from '../../store/products/actions';
import { productListSelector } from '../../store/products/selectors';

function ProductUpdate () {
    const {id}  = useParams<any>();
    const [name, setName] = useState("");
    const [price, setPrice] = useState('');
    const [description, setDescription] =useState('');
    const [color, setColor] = useState("");
    const history = useHistory();
    const productList = useSelector(productListSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        let aux :any 
        aux=productList.find(prod=> prod.id == parseInt(id));
        setName(aux.name);
        setPrice(aux.price);
        setDescription(aux.description);
        setColor(aux.color);
        
    }, [id]);

    const handlerSubmit = (event: any) => {
        event.preventDefault();
       
        dispatch(updateProductAction({name:name, price, description, id:parseInt(id), color}));
        history.push('/products');
    }

    const disabled = () => {
        return name === '' || price === '' ||  description === '' || color === '';
    }
    const handlerNameChange = (e:any)=>{
        setName(e.target.value)
    }
    const handlerPriceChange = (e:any)=>{
        setPrice(e.target.value)
    }
    const handlerDescripChange = (e:any)=>{
        setDescription(e.target.value)
    }
    const handlerColorChange = (e:any)=>{
        setColor(e.target.value)
    }
    
    return (
        <div className="mt-5">
            <form onSubmit={handlerSubmit}>
                <label className="small">Nombre fruta</label>
                <input type="text" className="form-control py-0 mb-1" value={name} onChange={handlerNameChange} />
                <label className="small">Precio</label>
                <input type="number" className="form-control py-0 mb-1" value={price} onChange={handlerPriceChange} />
                <label className="small">Descripción</label>
                <input type="text" className="form-control py-0 mb-1" value={description} onChange={handlerDescripChange} />
                <label className="small">Color</label>
                <input type="text" className="form-control py-0 mb-1" value={color} onChange={handlerColorChange} />
                <button className="btn btn-primary mt-2 px-5" disabled={disabled()}>Registrar modificación</button>
            </form> 
        </div>
    )
}

export default ProductUpdate 
