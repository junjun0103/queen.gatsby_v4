<<<<<<< HEAD
import React, {useState} from 'react';
import UseItinerary from "../../hooks/useItinerary";
import PreviewIterinary from './previewIterinary';
=======
import React, { useState, useEffect } from "react"
import UseItinerary from "../../hooks/useItinerary"
import PreviewIterinary from "./previewIterinary"
import Title from "../title"
import SubTitle from "../subtitle"
>>>>>>> 3e685a45c924cf0e0e646c7c4dc6dbd20154fbcb

const ListIterinary = () => {
  //bring data from hook
  const result = UseItinerary()

  //use state for keep the data
  const [iterinaries] = useState(result)

  return (
    <>
      <section className="section">
        <Title title="best sale"></Title>
        <SubTitle subtitle="Iterinary subtitle"></SubTitle>
        <SubTitle subtitle="Iterinary subtitle"></SubTitle>
        <div className="section-center iternaries-center">
          {/**Map for the datas */}
          {iterinaries.map(iterinary => (
            <PreviewIterinary key={iterinary.id} iterinary={iterinary} />
          ))}
        </div>
      </section>
    </>
  )
}

export default ListIterinary
