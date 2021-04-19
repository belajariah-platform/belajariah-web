import { CardForm } from '../components'
import { Login, Register } from '../containers'
import { AlertForm, Buttons } from '../components'

const Index = () => {
  return (
    <div>
      {/* <HeaderUser /> */}
      {/* <Login /> */}
      {/* <Register /> */}

      <AlertForm
        success={false}
        width='350px'
        title='Alamat email atau kata sandi yang anda masukan tidak valid'
      />
      <Buttons
        title='Login'
        onClick={() => console.log('k')}
      />
    </div>
  )
}

export default Index
