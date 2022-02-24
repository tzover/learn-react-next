import React from 'react'
import SubTitle from '../atoms/SubTitle'
import ChildLayout from '../templates/ChildLayout'

const GetStatic = () => {
  return (
    <>
      <SubTitle title={'GetStatic'} />
      <ChildLayout>getStaticProps getStaticPaths</ChildLayout>
    </>
  )
}

export default GetStatic
