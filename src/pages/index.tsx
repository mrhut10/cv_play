import React, { ReactElement } from "react"
import Header from '../components/header'
import SideInfo from '../components/sideInfo'

interface Props {}

const experiance = [
  <>
    <h3 className=""><span className="font-bold">Sole Fullstack Developer</span> Futures Fine Furniture and Bedding (2018 to current)</h3>
      <p>
        Created and manage there Ecommerce website - 300+ products <a className="text-teal-800" href="www.futuresfinefurnitureandbedding.com/">www.futuresfinefurnitureandbedding.com/</a><br/>
        using technologies like GatsbyJS, React, Snipcart, Sanity
      </p>
  </>,
  <>
    <h3 className=""><span className="font-bold">Solar Installer</span> Danuel Mattews Electrical and Airconditioning (2019 to current)</h3>
    <p>
      part time solar installer
    </p>
  </>,
  <>
    <h3 className=""><span className="font-bold">Owner of  Contracted Sales Team Company/Contractor</span> Sole Trader and Jokina Pty Ltd (2012 to 2018)</h3>
    <p>
      My own contracted sales staff company I ran for 5 years <br/>
      Majour clients included TR Digital and Colourworks Australia <br/>
      Services included Marketing products/services, managing a sales team and on the road sales in B2B environment
    </p>
  </>
].map(el => <li className="m-4">{el}</li>)


const passions = [
  <>
    <h3 className=""><span className="font-bold">Gatsby-Source-Gooten</span></h3>
      <p>
        created a gatsby plugin to source data from www.gooten.com REST API and make it avaliable via a graphql
      </p>
  </>,
  <>
    <h3 className=""><span className="font-bold">todaysCuriosity</span></h3>
      <p>
        web application to provide a a set of single_image_processing effects inspired by the art work by Kensuke Koike
      </p>
  </>,
  <>
    <h3 className=""><span className="font-bold">funky</span></h3>
      <p>
        suite of tools aimming to provide functional programming paradym methods and tools Mathematical category theory methods
      </p>
  </>,
].map(el => <li className="m-4">{el}</li>)


const content = [
  <>
    <h2 className="font-bold underline">Experience</h2>
    <ul>
      {experiance}
    </ul>
  </>,
  <>
    <h2 className="font-bold underline">Passions Projects</h2>
    <ul>
      {passions}
    </ul>
  </>,
].map(el => <li className="m-4">{el}</li>)



function cv({}: Props): ReactElement {
  return (
    <div className="">
      <Header title="Alistair Hutten - CV" />
      <div className="">
        <SideInfo />
        <div className="mx-auto min-w-50 text-center">
          <ul>
            {content}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default cv;