import { SyntheticEvent, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Box, Stack, Badge, Avatar, TextField, Button } from '@mui/material'
import AvatarBg from '../../../assets/images/avatar-bg.png'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import { useSelector, useDispatch } from '../../../redux/store'
import { updateUserDetails } from '../../../redux/slices/accountSlice'
import { getuserInfo } from '../../../redux/slices/authSlice'

const AccountAvatar = () => {
  const dispatch = useDispatch()
  const { user, userEmail } = useSelector((state: any) => state.auth || {})
  const { emailId } = user
  const SmallAvatar = styled(Avatar)(({ theme }: any) => ({ width: 44, height: 44 }))
  const [firstname, setFirstname] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [timezone, setTimezone] = useState('')
  const [communication, setCommunication] = useState('')
  const [editable, setEditable] = useState<boolean>(false)

  useEffect(() => {
    dispatch(getuserInfo(emailId));
    if (user) {
      setFirstname(user.firstname)
      setLastName(user.lastName)
      setPhoneNumber(user.attributes.phoneNumber)
      setTimezone(user.attributes.timezone)
      setCommunication(user.attributes.preferredCommunicationMode)
    }
  }, [dispatch])

  const buttonElement = document.getElementById(
    'button-edit'
) as HTMLElement

// if(buttonElement.innerText == 'edit personal details'){

// }

  const editUserDetails = async (e: SyntheticEvent) => {
    e.preventDefault()
    const body = {
      firstname: firstname,
      lastName: lastName,
      phoneNumber: phoneNumber,
      timezone: timezone,
      communication: communication
    }
    dispatch(updateUserDetails(body))
    setEditable(false)
  }

  const abcd = ()=>{
    setEditable(!false)
  }

  return (
    <>
      <Box
        className="bd-single-content"
        sx={{
          bgcolor: '#fff',
          height: 1,
          borderRadius: '20px',
          py: '52px',
          px: '50px',
          backgroundImage: `url(${AvatarBg})`,
          //   backgroundImage: {
          //     getitem == 'light'? 
          //     `url(${AvatarBg})` : 
          //     `url(${AvatarBg})`
          // },
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        <Box
          sx={{
            mb: '36px',
          }}
        >
          <Stack direction="row" justifyContent="center" alignItems="center">
            {/* <Avatar alt="Remy Sharp" src={AvatarImg} sx={{
                        width: '156px',
                        height: '156px',
                    }} /> */}
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={
                <SmallAvatar
                  sx={{ bgcolor: '#EDEFF0', color: '#52626F' }}
                  variant="circular"
                >
                  <CameraAltOutlinedIcon />
                </SmallAvatar>
              }
            >
              <Avatar
                alt="Travis Howard"
                className='avatar-initials'
                // src={AvatarImg}
                sx={{
                  width: '156px',
                  height: '156px',
                }}
              >
                {firstname.charAt(0) + lastName.charAt(0)}
              </Avatar>
            </Badge>
          </Stack>
        </Box>

        <form>
          <Box
            component="form"
            className="billing-details-input"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
              display: 'flex',
              flexWrap: 'wrap',
              rowGap: '20px',
              justifyContent: 'space-between',
              marginBottom: '40px',
              '& label': {
                top: editable ? '14px' : 0,
              },
              '& label:not(.MuiFormLabel-filled, .MuiInputLabel-shrink)': {
                top: '-3px',
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="first name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              variant={editable ? 'outlined' : 'standard'}
              type="text"
              sx={{
                borderRadius: '10px !important',
                flexBasis: '45%',
                textTransform: 'capitalize',
              }}
            />
            <TextField
              label="last name"
              variant={editable ? 'outlined' : 'standard'}
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              sx={{
                borderRadius: '10px !important',
                flexBasis: '45%',
                textTransform: 'capitalize',
              }}
            />
            <TextField
              label="mobile no"
              variant={editable ? 'outlined' : 'standard'}
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              sx={{
                borderRadius: '10px !important',
                flexBasis: '45%',
                textTransform: 'capitalize',
              }}
            />
            <TextField
              label="communication"
              variant={editable ? 'outlined' : 'standard'}
              type="text"
              value={communication}
              onChange={(e) => setCommunication(e.target.value)}
              sx={{
                borderRadius: '10px !important',
                flexBasis: '45%',
                textTransform: 'capitalize',
              }}
            />
            <TextField
              label="timezone"
              variant={editable ? 'outlined' : 'standard'}
              type="text"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              sx={{
                borderRadius: '10px !important',
                flexBasis: '100%',
                textTransform: 'capitalize',
              }}
            />
          </Box>
          <Button
            color="error"
            variant="outlined"
            type="button"
            id='button-edit'
            onClick={editable ? editUserDetails : abcd}
            sx={{
              textTransform: 'uppercase',
              borderRadius: '100px',
              width: 1,
              px: 6,
              py: 2,
              fontSize: '12px',
              lineHeight: '13px',
              fontWeight: 700,
              fontFamily: 'ubuntu',
              '&:hover': {
                backgroundColor: '#D63548',
                color: '#fff',
              },
            }}
          >
            {editable ? 'save' : 'edit personal details'}
          </Button>
        </form>
      </Box>
    </>
  )
}

export default AccountAvatar
