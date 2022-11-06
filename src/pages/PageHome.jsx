import React, { useState } from "react";

import Header from "components/layout/Header";
import Loading from "components/layout/Loading";

const PageHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loadingTime = 2000;

  setTimeout(() => {
    setIsLoading(false);
  }, loadingTime);

  return <div className="home">
    <Header />
    {isLoading && <Loading loadingTime={loadingTime} />}
    home
  </div>
}

export default PageHome;