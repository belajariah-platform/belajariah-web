import { AlertForm, Buttons } from '../components'

const Index = () => {
  return (
    <div>
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
