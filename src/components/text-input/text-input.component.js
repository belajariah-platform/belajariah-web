import { useEffect, useState } from 'react'
import { TextField } from '@material-ui/core'

import { Images } from '../../assets'
import styles from '../../assets/css/auth.module.css'
import { Title, InputIcon, ErrorMsg, ContainerPhone, ContainerTitle } from './text-input.styled'

const TextInput = (props) => {
  const [showPassword, setShowPassword] = useState(false)

  const errorIcon = () => {
    if(props.form && props.form.touched[props.name]) {
      switch (props.form.errors[props.name]) {
      case 'required':
        return <InputIcon src={Images.IconEmailRequired}/>
      case 'invalid':
        return <InputIcon src={Images.IconEmailInvalid}/>
      case 'registered':
        return <InputIcon src={Images.IconEmailRegistered} />
      case 'notregistered':
        return <InputIcon src={Images.IconEmailRegistered} />
      default:
        <span />
      }
    }
  }

  const errorTitle = () => {
    if(props.form && props.form.touched[props.name]) {
      switch (props.form.errors[props.name]) {
      case 'namerequired':
        return <ErrorMsg>Harap masukan nama anda.</ErrorMsg>
      case 'emailrequired':
        return <ErrorMsg>Harap masukan alamat email anda.</ErrorMsg>
      case 'phonerequired':
        return <ErrorMsg>Harap masukan nomor telepon anda.</ErrorMsg>
      case 'passrequired':
        return <ErrorMsg>Harap masukan password anda.</ErrorMsg>
      case 'coderequired':
        return <ErrorMsg>Harap masukan kode verifikasi</ErrorMsg>
      case 'passmatch':
        return <ErrorMsg>Password harus sama</ErrorMsg>
      case 'max11':
        return <ErrorMsg>Maksimal 11 angka</ErrorMsg>
      case 'min8':
        return <ErrorMsg>Minimal 8 karakter</ErrorMsg>
      case 'invalid':
        return <ErrorMsg>Email yang anda masukan tidak valid.</ErrorMsg>
      case 'registered':
        return <ErrorMsg>Email ini telah terdaftar.</ErrorMsg>
      case 'notregistered':
        return <ErrorMsg>Email ini tidak terdaftar.</ErrorMsg>
      default:
        <span />
      }
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <ContainerTitle>
        <Title>{props.title}</Title>
        {errorTitle()}
      </ContainerTitle>
      {props.name == 'Full_Name' ? (
        <TextField
          size='small'
          variant='outlined'
          style={{ width : '100%' }}
          value={props.form && `${props.form.values[props.name]}`}
          onBlur={props.form && props.form.handleBlur(props.name)}
          onChange={props.form && props.form.handleChange(props.name)}
          inputProps={{
            style: {
              fontSize: 12
            }
          }} />
      ) : props.name == 'Email' ? (
        <TextField
          size='small'
          variant='outlined'
          disabled={props.disabled}
          style={{ width : '100%' }}
          value={props.disabled ? props.value : props.form && `${props.form.values[props.name]}`}
          onBlur={props.disabled ? props.value : props.form && props.form.handleBlur(props.name)}
          onChange={props.disabled ? props.value : props.form && props.form.handleChange(props.name)}
          InputProps={{
            endAdornment: errorIcon(),
          }}
          inputProps={{
            style: {
              fontSize: 12
            }
          }} />
      ) : props.name == 'Password' || props.name == 'Confirm_Password' ? (
        <TextField
          size='small'
          variant='outlined'
          style={{ width : '100%' }}
          type={showPassword? 'text' : 'password'}
          value={props.form && `${props.form.values[props.name]}`}
          onBlur={props.form && props.form.handleBlur(props.name)}
          onChange={props.form && props.form.handleChange(props.name)}
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
              fontSize: 12
            }
          }}
        />
      ) : props.name == 'Phone' ? (
        <ContainerPhone>
          <TextField
            disabled
            size='small'
            value = '+62'
            variant='outlined'
            style = {{ width : '17%', marginRight: 4 }}
            inputProps={{
              style: {
                fontSize: 12
              }
            }} />
          <TextField
            size='small'
            variant='outlined'
            style={{ width : '82.5%' }}
            value={props.form && `${props.form.values[props.name]}`}
            onBlur={props.form && props.form.handleBlur(props.name)}
            onChange={props.form && props.form.handleChange(props.name)}
            inputProps={{
              style: {
                fontSize: 12
              }
            }}/>
        </ContainerPhone>
      ) : props.name == 'Code' && (
        <TextField
          size='small'
          variant='outlined'
          style={{ width : '100%' }}
          value={props.form && `${props.form.values[props.name]}`}
          onBlur={props.form && props.form.handleBlur(props.name)}
          onChange={props.form && props.form.handleChange(props.name)}
          inputProps={{
            style: {
              fontSize: 12
            }
          }} />
      )}
    </>
  )
}

export default TextInput