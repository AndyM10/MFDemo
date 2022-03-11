import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const NftSection = () => {
  return (
    <div className="nftsection">
      <p>NFT SECTION</p>
    </div>
  )
}

export default () => {
  return (
    <div className='collection'>
      <NftSection/>
      <NftSection/>
      <NftSection/>
      <NftSection/>
      <NftSection/>
    </div>


  )
};
