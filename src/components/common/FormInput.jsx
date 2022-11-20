import { useState, useTransition, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IconClose, IconSearch } from "components/icon/Icons";
import { uxInputPlaceholder as placeholder, randomIndex as index } from "tools/constants";

const FormInput = ({ result = "" }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(result);
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
        {value && <ButtonClose onClick={onClickClose} />}
      </div>
      <ButtonSubmit />
    </form>
  </div>
}

export default FormInput;

const InputWrap = ({ value, onChange }) => {

  const onInvalid = () => (e) => {
    e.preventDefault();
    makeClass(true);
  };

  const makeClass = (invalid = false) => {
    const invalidClass = invalid ? "invalid" : ""
    return `input ${invalidClass}`;
  }

  return <div className="input-wrap">
    <input
      className={makeClass()}
      type="text"
      value={value}
      // onKeyDown={(e) => onKeyDown(e)}
      onChange={(e) => onChange(e)}
      autoFocus={true}
      placeholder={placeholder[index]}
      required={true}
      onInvalid={onInvalid()}
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