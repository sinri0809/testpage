import { useSearchParams } from "react-router-dom";

import FormInput from "components/common/FormInput";

const PageSearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const result = searchParams.get("input");

  return <section className="view search-result">
    <div className="search-result-top">
      <FormInput setSearchParams={setSearchParams} />
    </div>
    {result && <>
      this is search result
    </>}
  </section>
}

export default PageSearchResult;