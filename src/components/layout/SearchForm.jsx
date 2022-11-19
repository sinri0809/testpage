import { IconArrowPrev } from "components/icon/Icons";

import FormInput from "components/common/FormInput";

const SearchFrom = () => {

  const onClickGoBack = () => {
    const page = document.querySelector(".search-form");
    page.style.right = '-100%'
  };

  return <div className="search-form">
    <div className="form-top">
      <button
        className="btn"
        onClick={onClickGoBack}
      >
        <IconArrowPrev />
      </button>
    </div>

    <div className="form-bottom">
      <div className="form-bottom-wrap">
        <FormInput />
      </div>
    </div>
  </div>
}

export default SearchFrom;