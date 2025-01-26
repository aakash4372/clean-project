import React from 'react'
import Head from './components/head'
import Form from './components/form'
import Card from './components/card'
import Imagecard from './components/Imagecard'
import Logoimage from './components/Logoimage'
import Carousel from './components/Carousel'
import Imagelogo from './components/Imagelogo'
import Boxsection from './components/Boxsection';
import Textimage from './components/Textimage'
import Last from './components/Last'

export default function App() {
  return (
    <div>
      <Head/>
      <Form/>
      <Card/>
      <Imagecard/>
      <Logoimage/>
      <Carousel/>
      <Imagelogo/>
      <Boxsection/>
      <Textimage/>
      <Last/>
    </div>
  )
}
