import { useState } from 'react'
import { TextField } from '@material-ui/core'

import { Images } from '../../assets'
import styles from '../../assets/css/auth.module.css'
import { Title, FlexRow, InputIcon, ErrorMsg } from './text-input.styled'

/*
  usage:
  type = email to input email
  type = password to input password
  type = phone to input phone number
*/

const TextInput = (props) => {
  const [showPassword, setShowPassword] = useState(false)
  const errorIcon = props.error && props.error =='required' ? (
    <InputIcon src={Images.IconEmailRequired}/>
  ) : (
    props.error && props.error =='invalid' ? (
      <InputIcon src={Images.IconEmailInvalid}/>
    ) : (
      props.error && props.error =='registered' ? (
        <InputIcon src={Images.IconEmailRegistered} />
      ) : (
        <span/>
      )
    )
  )

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <FlexRow>
        <Title>{props.title}</Title>
        {props.error && props.error == 'required' ? (
          <ErrorMsg>Harap Masukan Alamat Email anda.</ErrorMsg>
        ) : (
          props.error && props.error == 'invalid' ? (
            <ErrorMsg>Email yang anda masukan tidak valid.</ErrorMsg>
          ) : (
            props.error && props.error == 'registered' && (
              <ErrorMsg>Email ini telah terdaftar.</ErrorMsg>
            )
          )
        )
        }
      </FlexRow>
      {props.type == 'email' ? (
        <TextField
          size='small'
          variant='outlined'
          style={{ width : '100%' }}
          InputProps={{
            endAdornment: errorIcon,
          }}
          inputProps={{
            style: {
              fontSize: 14
            }
          }} />
      ) : props.type == 'password' ? (
        <TextField
          size='small'
          variant='outlined'
          style={{ width : '100%' }}
          type={showPassword? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              showPassword ? (
                <InputIcon src={Images.IconShowPassword} onClick={handleShowPassword}/>
              ) : (
                <InputIcon src={Images.IconHidePassword} onClick={handleShowPassword}/>
              )
            )
          }}
          inputProps={{
            style: {
              fontSize: 14
            }
          }}
        />
      ) : props.type == 'phone' ? (
        <FlexRow>
          <TextField
            disabled
            size='small'
            value = '+62'
            variant='outlined'
            style = {{ width : '17%', marginRight: 4 }}
            inputProps={{
              style: {
                fontSize: 14
              }
            }} />
          <TextField
            size='small'
            variant='outlined'
            style={{ width : '82.5%' }}
            inputProps={{
              style: {
                fontSize: 14
              }
            }}/>
        </FlexRow>
      ) : (
        <TextField
          size='small'
          variant='outlined'
          style={{ width : '100%' }}
          inputProps={{
            style: {
              fontSize: 14
            }
          }} />
      )}
    </>
  )
}

export default TextInput