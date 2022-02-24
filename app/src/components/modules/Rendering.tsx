import SubTitle from '../atoms/SubTitle'
import ChildLayout from '../templates/ChildLayout'

const Rendering = () => {
  return (
    <>
      <SubTitle title={'Rendering'} />
      <ChildLayout>rendering revalidate fallback</ChildLayout>
    </>
  )
}

export default Rendering
