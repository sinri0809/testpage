import { useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";

import { IconClose, IconSearch } from "components/icon/Icons";
import { uxInputPlaceholder as placeholder, randomIndex as index } from "tools/constants";

const FormInput = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  let [isPending, startTransition] = useTransition();

  const onChange = (e) => {
    startTransition(() => {
      setValue(e.target.value);
    })
  };

  const onClickClose = () => {
    setValue("")
  };

  const handleSubmit = () => {
    navigate({
      pathname: '/search_result',
      search: `?input=${value}`
    })
  };

  return <div className="form-container">
    <form
      onSubmit={handleSubmit}
      className="form-wrap"
    >
      <div className="input-container">
        <InputWrap value={value} onChange={onChange} />
        <ButtonClose onClick={onClickClose} />
      </div>
      <ButtonSubmit />
    </form>
  </div>
}

export default FormInput;

const InputWrap = ({ value, onChange }) => {
  return <div className="input-wrap">
    <input
      className="input"
      type="text"
      value={value}
      // onKeyDown={(e) => onKeyDown(e)}
      onChange={(e) => onChange(e)}
      autoFocus={true}
      placeholder={placeholder[index]}
    />
  </div>
}

const ButtonClose = ({ onClick }) => {
  return <button type="button" className="btn-close-wrap" onClick={onClick}>
    <IconClose />
  </button>
}

const ButtonSubmit = ({ onClick }) => {
  return <div className="btn-search-wrap">
    <button
      type="submit"
      className="btn btn-search"
    >
      <IconSearch />
    </button>
  </div>
}