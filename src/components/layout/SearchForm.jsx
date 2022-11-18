import { useNavigate } from "react-router-dom";

import { IconSearch } from "components/icon/Icons";
import { uxInputPlaceholder as placeholder } from "tools/constants";

const SearchFrom = () => {
  const navigate = useNavigate();

  const onClickGoBack = () => {
    console.log("go back page")
  };

  // const onClic

  return <div className="search-form">
    <div className="form-top">
      <button 
        className="btn"
        onClick={onClickGoBack}
      >
        {"<-"}
      </button>
    </div>

    <div className="form-bottom">
      <form action="get">
        <div className="input-container">
          <div className="input-wrap">
            <input 
              type="text"

              autoFocus={true}
              placeholder={placeholder[0]}
            />
          </div>
          <div className="btn-close">
          </div>
        </div>
        <div className="btn-wrap">
          <button 
            className="btn btn-search"
          >
            <IconSearch />
          </button>
        </div>
      </form>
    </div>
  </div>
}

export default SearchFrom;