import React from "react";

import {Redirect} from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Home() {
	return <Redirect to={useBaseUrl("/docs/Rest API_Doc/SharePro Rest API")} />;
}

export default Home;