interface Props {
  name: string
  email: string
  address: string
}

const User = (props: Props) => {
  const { name, email, address } = props

  return (
    <>
      <p>{name}</p>
      <p>{email}</p>
      <p>{address}</p>
    </>
  )
}

export default User
