import React, { SyntheticEvent, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Box, Stack, Badge, Avatar, TextField, Button } from '@mui/material'
import AvatarImg from '../../../assets/images/avatar.png'
import AvatarBg from '../../../assets/images/avatar-bg.png'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import { useSelector, useDispatch } from '../../../redux/store'
import { userLoginData, account } from '../../../services/api/index'
import { useNavigate } from 'react-router-dom'
import { getAcDetails } from '../../../redux/slices/accountSlice'


const initialValue = {
    firstname: '',
    lastName: ''
}

const BillingAvatar = () => {
    const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth || {})
  const { emailId } = user;
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 44,
    height: 44,
    // border: `2px solid ${theme.palette.background.paper}`,
  }))

  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timezone, setTimezone] = useState("");

  // const [users, setUsers] = useState(initialValue);
  // const { firstname, lastName } = users;
//   const { id } = useParams();
  const id = 1
//   const email = 'bruno@email.com'
  
  const navigate = useNavigate();

  useEffect(() => {
      loadUserDetails();
      dispatch(getAcDetails())
  }, [dispatch]);

  const loadUserDetails = async() => {
    const response = await userLoginData.getUserInfo(id).then((res) => {
      setFirstname(res.data.firstname);
      setLastName(res.data.lastName);
      setPhoneNumber(res.data.attributes.phoneNumber);
      setTimezone(res.data.attributes.timezone);
    })
      // setUsers(response.data);
  }

  const data = {
    firstname: firstname,
    lastName: lastName,
    phoneNumber: phoneNumber,
    timezone: timezone
  }

  const editUserDetails = async(e: SyntheticEvent) => {
    e.preventDefault();
    // await account.editUserDetails(id, data).then(navigate("/invoices"));
    await account.editUserDetails(id, data)
    navigate('/');
  }

  // const onValueChange = (e: SyntheticEvent) => {
  //   e.preventDefault()
  //     console.log((e.target as HTMLInputElement).value);
  //     setUsers({...users, [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value})
  // }
  console.log(firstname)
  return (
    <>
      {/* 1st left row container starts here */}
      <Box
        className="bd-single-content"
        sx={{
          bgcolor: '#fff',
          height: 1,
          borderRadius: '20px',
          py: '52px',
          px: '50px',
          // mb: '40px',
          backgroundImage: `url(${AvatarBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        {/* 1st row starts here */}
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
                src={AvatarImg}
                sx={{
                  width: '156px',
                  height: '156px',
                }}
              />
            </Badge>
          </Stack>
        </Box>

        {/* 2nd row starts here */}
        <form>
        <Box
          component="form"
          className="billing-details-input"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            display: 'flex',
            flexWrap: 'wrap',
            rowGap: '48px',
            justifyContent: 'space-between',
            marginBottom: '40px',
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="first name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            // name='firstname'
            variant="standard"
            type="text"
            sx={{
              // border: '1px solid #eee',
              borderRadius: '10px !important',
              flexBasis: '45%',
              textTransform: 'capitalize',
            }}
          />
          <TextField
            label="last name"
            variant="standard"
            type="text"
            value={lastName}
            // name='lastName'
            onChange={(e) => setLastName(e.target.value)}
            sx={{
              // border: '1px solid #eee',
              borderRadius: '10px !important',
              flexBasis: '45%',
              textTransform: 'capitalize',
            }}
          />
          <TextField
            label="mobile no"
            variant="standard"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{
              // border: '1px solid #eee',
              borderRadius: '10px !important',
              flexBasis: '45%',
              textTransform: 'capitalize',
            }}
          />
          <TextField
            label="communication"
            variant="standard"
            type="text"
            value="Phone"
            sx={{
              // border: '1px solid #eee',
              borderRadius: '10px !important',
              flexBasis: '45%',
              textTransform: 'capitalize',
            }}
          />
          <TextField
            label="timezone"
            variant="standard"
            type="text"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            sx={{
              // border: '1px solid #eee',
              borderRadius: '10px !important',
              flexBasis: '100%',
              textTransform: 'capitalize',
            }}
          />
        </Box>
        <Button
          color="error"
          variant="outlined"
          type="submit"
          onClick={editUserDetails}
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
          }}
        >
          edit personal details
        </Button>
        </form>
      </Box>
    </>
  )
}

export default BillingAvatar
