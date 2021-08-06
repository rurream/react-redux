import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createProductAction } from '../../store/products/actions';
import { productListSelector } from '../../store/products/selectors';
import useInput from "../../hooks/useInput";

function ProductCreate () {
    const {id}  = useParams<any>();
    const [name, setName] = useInput("");
    const [price, setPrice] = useInput(0+'');
    const [description, setDescription] =useInput('');
    const [color, setColor] = useInput("");
    const history = useHistory();
    const productList = useSelector(productListSelector);
    const dispatch = useDispatch();

    const validarText = (text:string)=>{
        return text.trim().length > 0? true:false;
    }

    const validarNumber = (num:any)=>{console.log(num);
        return isNaN(num) || num < 0 || num == '' ? false : true;
    }

    const handlerSubmit = (event: any) => {
        event.preventDefault();

        if(validarText(name) && validarText(description) && validarText(color) && validarNumber(price)){
            let aux = {
                id: new Date().getTime(),
                name: name,
                price: price,
                description:description,
                color:color
            }
            
            dispatch(createProductAction(aux));
        history.push('/products');
        }else{
            console.log("Error, los datos no son válidos");
        }
        
    }

    const disabled = () => {
        return name === '' || price === '' ||  description === '' || color === '';
    }

    return (
        <div className="mt-5" >
        <form onSubmit={handlerSubmit} >
            <label className="small">Nombre fruta</label>
            <input type="text" className="form-control py-0 mb-1" value={name} onChange={setName} />
            <label className="small">Precio</label>
            <input type="number" className="form-control py-0 mb-1" value={price} onChange={setPrice} />
            <label className="small">Descripción</label>
            <input type="text" className="form-control py-0 mb-1" value={description} onChange={setDescription} />
            <label className="small">Color</label>
            <input type="text" className="form-control py-0 mb-1" value={color} onChange={setColor} />
            <button className="btn btn-primary mt-2 px-5" disabled={disabled()}>Registrar nuevo producto</button>
        </form>
    </div>
    )
}

export default ProductCreate 
