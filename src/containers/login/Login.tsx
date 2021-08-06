import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { stateUserAction } from '../../store/user/actions';
import { isLogedSelector } from '../../store/user/selectors';

const Login = () => {
  const login = useSelector(isLogedSelector);
  const history = useHistory()
  const [name, setName] = useState("")
  const dispatch = useDispatch();

  const handleOnSubmit = (e:any)=>{
      e.preventDefault()
      dispatch(stateUserAction(!login));
      history.push('/products')
  }

  return (
    <form onSubmit={e=>handleOnSubmit(e)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Email address
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          value= {name}
          onChange = {e=>setName(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
