import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import useStore from 'host/store'

type SectionProps = {
  id: number
}
const NftSection = ({ id }: SectionProps) => {
  return (
    <div className="nftsection">
      <img src='/img/docker.svg' className='top-0 p-2 border rounded'/>
      <p>NFT SECTION {id}</p>
      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="secBtn"
     >Click me</button>
    </div>
  )
}

export default () => {
  const { count } = useStore()
  const sections = []

  for (let i = 0; i <= count; i ++) {
    sections.push(i)
  }
  return (
    <div className='collection'>
      {sections.map(id => {
        return <NftSection id={id}/>
      })}
    </div>
  )
};
