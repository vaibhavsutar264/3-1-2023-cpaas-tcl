import React, { SyntheticEvent, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Box, Stack, Badge, Avatar, TextField, Button } from '@mui/material'
import AvatarImg from '../../../assets/images/avatar.png'
import AvatarBg from '../../../assets/images/avatar-bg.png'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import { useSelector, useDispatch } from '../../../redux/store'
import { userLoginData, account } from '../../../services/api/index'
import { useNavigate, useParams } from 'react-router-dom'
import { getAcDetails, updateUserDetails } from '../../../redux/slices/accountSlice'


const initialValue = {
    firstname: '',
    lastName: ''
}

const BillingAvatar = () => {
    const dispatch = useDispatch();
  const { user, userEmail } = useSelector((state: any) => state.auth || {})
  const { emailId } = user;
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 44,
    height: 44,
  }))

  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timezone, setTimezone] = useState("");
  // const { id } = useParams();
  const id = 1
  
  const navigate = useNavigate();

  useEffect(() => {
      loadUserDetails();
  }, [dispatch]);

  const loadUserDetails = async() => {
    const response = await userLoginData.getUserInfo(emailId).then((res) => {
      if(res.data.data.data.emailId == userEmail){
        setFirstname(res.data.data.data.firstname);
        setLastName(res.data.data.data.lastName);
        setPhoneNumber(res.data.data.data.attributes.phoneNumber);
        setTimezone(res.data.data.data.attributes.timezone);
      }else{
        setFirstname('firstname is not available due to non registered email');
        setLastName('lastName is not available due to non registered email');
        setPhoneNumber('phoneNumber is not available due to non registered email');
        setTimezone('timezone is not available due to non registered email');
      }
      
    })
  }

  const data = {
    firstname: firstname,
    lastName: lastName,
    phoneNumber: phoneNumber,
    timezone: timezone
  }

  const editUserDetails = async(e: SyntheticEvent) => {
    dispatch(updateUserDetails(id, data))
    e.preventDefault();
    // await account.editUserDetails(id, data).then(navigate("/invoices"));
    // await account.editUserDetails(id, data)
    navigate('/');
  }
  console.log(firstname)

  const [editable, setEditable] = useState<boolean>(false);

  const editMode = () => {
    // setEditable(!editable);
  };

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
                // src={AvatarImg}
                sx={{
                  width: '156px',
                  height: '156px',
                  bgcolor: '#870000',
                }}
              >
              {firstname.charAt(0) + lastName.charAt(0)}
              </Avatar>
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
            rowGap: '20px',
            justifyContent: 'space-between',
            marginBottom: '40px',
            '& label': {
              top: editable? '14px' : 0,
            }
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="first name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            // name='firstname'
            variant={editable? 'outlined' : 'standard'}
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
            variant={editable? 'outlined' : 'standard'}
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
            variant={editable? 'outlined' : 'standard'}
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
            variant={editable? 'outlined' : 'standard'}
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
            variant={editable? 'outlined' : 'standard'}
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
          onClick={editMode}
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
          {editable? 'save' : 'edit personal details'}
        </Button>
        </form>
      </Box>
    </>
  )
}

export default BillingAvatar
