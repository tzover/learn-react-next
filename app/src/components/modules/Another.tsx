import SubTitle from '../atoms/SubTitle'
import ChildLayout from '../templates/ChildLayout'

const Another = () => {
  return (
    <>
      <SubTitle title={'Another'} />
      <ChildLayout>page404 page500 next/image next/router</ChildLayout>
    </>
  )
}

export default Another
