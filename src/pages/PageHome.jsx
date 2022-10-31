import React, { useState } from "react";

import Header from "components/layout/Header";
import Loading from "components/layout/Loading";

const PageHome = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return <div className="home">
    <Header />
    {isLoading && <Loading />}
    home
  </div>
}

export default PageHome;