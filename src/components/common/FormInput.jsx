import { useState, useTransition } from "react";

import { IconClose, IconSearch } from "components/icon/Icons";
import { uxInputPlaceholder as placeholder } from "tools/constants";

const FormInput = () => {
  const [value, setValue] = useState('');
  let [isPending, startTransition] = useTransition();

  const onChange = (e) => {
    startTransition(() => {
      setValue(e.target.value);
    })
  }
  const onClickSearch = () => {
    console.log("go search")
  }

  return <form
    action="get"
    className="form-container"
  >
    <div className="input-container">
      <div className="input-wrap">
        <input
          type="text"
          value={value}
          // onKeyDown
          onChange={(e) => onChange(e)}
          autoFocus={true}
          placeholder={placeholder[0]}
        />
      </div>
      <button className="btn-close-wrap">
        <IconClose />
      </button>
    </div>

    <div className="btn-search-wrap">
      <button // Link 
        className="btn btn-search"
        onClick={onClickSearch}
      >
        <IconSearch />
      </button>
    </div>
  </form>
}

export default FormInput;