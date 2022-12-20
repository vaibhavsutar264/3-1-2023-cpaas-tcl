import React, { useEffect } from 'react'
import {Box, Stack, Typography, FormControl, InputLabel, Select, MenuItem, TextField, SelectChangeEvent } from '@mui/material'
import { useDispatch, useSelector } from '../../../redux/store'
import { getAcDetails } from '../../../redux/slices/accountSlice'


const BillingDetail = ({age, setAge}:{age: any, setAge: any}) => {
    const dispatch = useDispatch()
    const { accountDetails } = useSelector((state: any) => state.account);  
    const { legalentities } = accountDetails
    // const { billingDetails } = le1

    useEffect(() => {
        // dispatch(getAcDetails())
    }, [dispatch])

    const entityNo = 0

    // const handleChange = () => {
    //     if (entityNo == 0){
    //       return legalentities[0].le1.billingDetails.accountName
    //     }   
    // else if (entityNo == 1){
    // legalentities[1].le2.billingDetails.accountName}
    // else
    //   return '';
    //   };

        // const [age, setAge] = React.useState('');
      
        const handleChange = (event: SelectChangeEvent) => {
          setAge(event.target.value as string);
        };

        if(age == 'legal entity name2'){
            const entityNo = 1
            const accountNameElement = document.getElementById(
                'account-name-details'
            ) as HTMLElement
            const legalEntityElement = document.getElementById(
                'legal-entity'
            ) as HTMLElement
            const billingTypeElement = document.getElementById(
                'billing-type'
            ) as HTMLElement
            const billingCycleElement = document.getElementById(
                'billing-cycle'
            ) as HTMLElement
            const paymentPeriodElement = document.getElementById(
                'payment-period'
            ) as HTMLElement
            const vatElement = document.getElementById(
                'vat'
            ) as HTMLElement
            const companyPanElement = document.getElementById(
                'company-pan'
            ) as HTMLElement
            const applicableCurrencyElement = document.getElementById(
                'applicable-currency'
            ) as HTMLElement
            const contractTermElement = document.getElementById(
                'contract-term'
            ) as HTMLElement
            const notificationElement = document.getElementById(
                'rate-change-notification-period'
            ) as HTMLElement
            const coverageElement = document.getElementById(
                'rate-coverage-change-timeZone'
            ) as HTMLElement
            const accountStatusElement = document.getElementById(
                'account-status'
            ) as HTMLElement
            accountNameElement.innerHTML = legalentities[entityNo].le2.billingDetails.accountName
            legalEntityElement.innerHTML = legalentities[entityNo].le2.billingDetails.legalEntity
            billingTypeElement.innerHTML = legalentities[entityNo].le2.billingDetails.billingtype
            billingCycleElement.innerHTML = legalentities[entityNo].le2.billingDetails.billingCycle
            paymentPeriodElement.innerHTML = legalentities[entityNo].le2.billingDetails.paymentPeriod
            vatElement.innerHTML = legalentities[entityNo].le2.billingDetails.vatOrGSTNoOrTxId
            companyPanElement.innerHTML = legalentities[entityNo].le2.billingDetails.companyPAN
            applicableCurrencyElement.innerHTML = legalentities[entityNo].le2.billingDetails.applicableCurrency
            contractTermElement.innerHTML = legalentities[entityNo].le2.billingDetails.contractTerm
            notificationElement.innerHTML = legalentities[entityNo].le2.billingDetails.rateChangeNotificationPeriod
            coverageElement.innerHTML = legalentities[entityNo].le2.billingDetails.rateCoverageChangeTimeZone
            accountStatusElement.innerHTML = legalentities[entityNo].le2.billingDetails.accountStatus
        }


        if(age == 'legal entity name1'){
            const entityNo = 0
            const accountNameElement = document.getElementById(
                'account-name-details'
            ) as HTMLElement
            const legalEntityElement = document.getElementById(
                'legal-entity'
            ) as HTMLElement
            const billingTypeElement = document.getElementById(
                'billing-type'
            ) as HTMLElement
            const billingCycleElement = document.getElementById(
                'billing-cycle'
            ) as HTMLElement
            const paymentPeriodElement = document.getElementById(
                'payment-period'
            ) as HTMLElement
            const vatElement = document.getElementById(
                'vat'
            ) as HTMLElement
            const companyPanElement = document.getElementById(
                'company-pan'
            ) as HTMLElement
            const applicableCurrencyElement = document.getElementById(
                'applicable-currency'
            ) as HTMLElement
            const contractTermElement = document.getElementById(
                'contract-term'
            ) as HTMLElement
            const notificationElement = document.getElementById(
                'rate-change-notification-period'
            ) as HTMLElement
            const coverageElement = document.getElementById(
                'rate-coverage-change-timeZone'
            ) as HTMLElement
            const accountStatusElement = document.getElementById(
                'account-status'
            ) as HTMLElement
            accountNameElement.innerHTML = legalentities[entityNo].le1.billingDetails.accountName
            legalEntityElement.innerHTML = legalentities[entityNo].le1.billingDetails.legalEntity
            billingTypeElement.innerHTML = legalentities[entityNo].le1.billingDetails.billingtype
            billingCycleElement.innerHTML = legalentities[entityNo].le1.billingDetails.billingCycle
            paymentPeriodElement.innerHTML = legalentities[entityNo].le1.billingDetails.paymentPeriod
            vatElement.innerHTML = legalentities[entityNo].le1.billingDetails.vatOrGSTNoOrTxId
            companyPanElement.innerHTML = legalentities[entityNo].le1.billingDetails.companyPAN
            applicableCurrencyElement.innerHTML = legalentities[entityNo].le1.billingDetails.applicableCurrency
            contractTermElement.innerHTML = legalentities[entityNo].le1.billingDetails.contractTerm
            notificationElement.innerHTML = legalentities[entityNo].le1.billingDetails.rateChangeNotificationPeriod
            coverageElement.innerHTML = legalentities[entityNo].le1.billingDetails.rateCoverageChangeTimeZone
            accountStatusElement.innerHTML = legalentities[entityNo].le1.billingDetails.accountStatus
        }

        if(age == 'legal entity name3'){
            const entityNo = 2
            const accountNameElement = document.getElementById(
                'account-name-details'
            ) as HTMLElement
            const legalEntityElement = document.getElementById(
                'legal-entity'
            ) as HTMLElement
            const billingTypeElement = document.getElementById(
                'billing-type'
            ) as HTMLElement
            const billingCycleElement = document.getElementById(
                'billing-cycle'
            ) as HTMLElement
            const paymentPeriodElement = document.getElementById(
                'payment-period'
            ) as HTMLElement
            const vatElement = document.getElementById(
                'vat'
            ) as HTMLElement
            const companyPanElement = document.getElementById(
                'company-pan'
            ) as HTMLElement
            const applicableCurrencyElement = document.getElementById(
                'applicable-currency'
            ) as HTMLElement
            const contractTermElement = document.getElementById(
                'contract-term'
            ) as HTMLElement
            const notificationElement = document.getElementById(
                'rate-change-notification-period'
            ) as HTMLElement
            const coverageElement = document.getElementById(
                'rate-coverage-change-timeZone'
            ) as HTMLElement
            const accountStatusElement = document.getElementById(
                'account-status'
            ) as HTMLElement
            accountNameElement.innerHTML = legalentities[entityNo].le3.billingDetails.accountName
            legalEntityElement.innerHTML = legalentities[entityNo].le3.billingDetails.legalEntity
            billingTypeElement.innerHTML = legalentities[entityNo].le3.billingDetails.billingtype
            billingCycleElement.innerHTML = legalentities[entityNo].le3.billingDetails.billingCycle
            paymentPeriodElement.innerHTML = legalentities[entityNo].le3.billingDetails.paymentPeriod
            vatElement.innerHTML = legalentities[entityNo].le3.billingDetails.vatOrGSTNoOrTxId
            companyPanElement.innerHTML = legalentities[entityNo].le3.billingDetails.companyPAN
            applicableCurrencyElement.innerHTML = legalentities[entityNo].le3.billingDetails.applicableCurrency
            contractTermElement.innerHTML = legalentities[entityNo].le3.billingDetails.contractTerm
            notificationElement.innerHTML = legalentities[entityNo].le3.billingDetails.rateChangeNotificationPeriod
            coverageElement.innerHTML = legalentities[entityNo].le3.billingDetails.rateCoverageChangeTimeZone
            accountStatusElement.innerHTML = legalentities[entityNo].le3.billingDetails.accountStatus
        }



        console.log(age)

  return (
    <>
      {/* 1st right row container starts here */}
      <Box  className='bd-single-content' sx={{
                bgcolor: '#fff',
                height: 1,
                borderRadius: '20px',
                pt: '40px',
                pb: '133px',
                px: '50px',
            }}>

                {/* 1st row starts here */}
                <Box sx={{
                    mb: 6,
                }}>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant='h5' component='h1' sx={{
                            maxWidth: 'unset',
                            textAlign: 'left',
                            padding: 0,
                            fontSize: '24px',
                            lineHeight: '22px',
                            color: '#303030',
                            fontWeight: 700,
                            fontFamily: 'ubuntu',
                        }}>Billing Details</Typography>
                        {/* <Box
                            className='select-form'
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                                '& label': {
                                    maxWidth: 'unset',
                                }
                            }} noValidate autoComplete="off"
                        >
                            <FormControl fullWidth
                                sx={{
                                    flexBasis: '40%',
                                }}>
                                <InputLabel id="demo-simple-select-label" sx={{ textTransform: 'capitalize', }}>select legal entity</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                >
                                    <MenuItem value='legal entity name1' onClick={entityone}>Legal Entity Name1</MenuItem>
                                    <MenuItem value='legal entity name2' onClick={entitytwo}>Legal Entity Name2</MenuItem>
                                    <MenuItem value='legal entity name3' onClick={entitythree}>Legal Entity Name3</MenuItem>
                                </Select>
                            </FormControl>
                            </Box> */}

                        <Box id='select-entity-form' sx={{ minWidth: 200,
                        '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                            top: '1px',
                            height: 'min-content',
                            backgroundColor: '#fff !important',
                        },
                            '& [role="button"]': {
                                color: '#222',
                                textTransform: 'capitalize',
                                fontWeight: 400,
                            },
                            '& label': {
                                // top: '-9px',
                                top: age.length > 1? '1px' : '-11px',
                                height: 'min-content',
                                backgroundColor: '#fff !important',
                            }
                        }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Legal Entity</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                    <MenuItem value='legal entity name1'>Legal Entity Name1</MenuItem>
                                    <MenuItem value='legal entity name2'>Legal Entity Name2</MenuItem>
                                    <MenuItem value='legal entity name3'>Legal Entity Name3</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Stack>
                </Box>

                {/* 2nd row starts here */}
                <Box
                    component="form"
                    className='billing-details-input'
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        rowGap: '48px',
                        // marginBottom: '40px',
                        // paddingBottom: '133px',
                    }} noValidate autoComplete="off"
                >
                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography className='prefilled-title' component='h3' sx={{
                            border: '1px solid #eee',
                            borderRadius: '10px !important',
                            fontSize: '14px',
                            color: '#344857',
                            fontFamily: 'ubuntu',
                            opacity: 0.7,
                            textTransform: 'capitalize',
                        }}>account name</Typography>
                        {/* <Typography className='prefilled-content' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.accountName}</Typography> */}
                        <Typography className='prefilled-content' id='account-name-details' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{legalentities[entityNo].le1.billingDetails.accountName}</Typography>
                    </Stack>

                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography className='prefilled-title' component='h3' sx={{
                            border: '1px solid #eee',
                            borderRadius: '10px !important',
                            fontSize: '14px',
                            color: '#344857',
                            fontFamily: 'ubuntu',
                            opacity: 0.7,
                            flexBasis: '30%',
                            textTransform: 'capitalize',
                        }}>legal entity</Typography>
                        {/* <Typography className='prefilled-content' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.legalEntity}</Typography> */}
                        <Typography className='prefilled-content' id='legal-entity' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{legalentities[entityNo].le1.billingDetails.legalEntity}</Typography>
                    </Stack>

                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography className='prefilled-title' component='h3' sx={{
                            border: '1px solid #eee',
                            borderRadius: '10px !important',
                            fontSize: '14px',
                            color: '#344857',
                            fontFamily: 'ubuntu',
                            opacity: 0.7,
                            flexBasis: '30%',
                            textTransform: 'capitalize',
                        }}>billing type</Typography>
                        {/* <Typography className='prefilled-content' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.billingtype}</Typography> */}
                        <Typography className='prefilled-content' id='billing-type' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{legalentities[entityNo].le1.billingDetails.billingtype}</Typography>
                    </Stack>

                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography className='prefilled-title' component='h3' sx={{
                            border: '1px solid #eee',
                            borderRadius: '10px !important',
                            fontSize: '14px',
                            color: '#344857',
                            fontFamily: 'ubuntu',
                            opacity: 0.7,
                            flexBasis: '30%',
                            textTransform: 'capitalize',
                        }}>billing cycle</Typography>
                        {/* <Typography className='prefilled-content' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.billingCycle}</Typography> */}
                        <Typography className='prefilled-content' id='billing-cycle' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{legalentities[entityNo].le1.billingDetails.billingCycle}</Typography>
                    </Stack>

                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography className='prefilled-title' component='h3' sx={{
                            border: '1px solid #eee',
                            borderRadius: '10px !important',
                            fontSize: '14px',
                            color: '#344857',
                            fontFamily: 'ubuntu',
                            opacity: 0.7,
                            flexBasis: '30%',
                            textTransform: 'capitalize',
                        }}>payment period</Typography>
                        {/* <Typography className='prefilled-content' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.paymentPeriod}</Typography> */}
                        <Typography className='prefilled-content' id='payment-period' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{legalentities[entityNo].le1.billingDetails.paymentPeriod}</Typography>
                    </Stack>

                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography className='prefilled-title' component='h3' sx={{
                            border: '1px solid #eee',
                            borderRadius: '10px !important',
                            fontSize: '14px',
                            color: '#344857',
                            fontFamily: 'ubuntu',
                            opacity: 0.7,
                            flexBasis: '30%',
                            textTransform: 'capitalize',
                        }}>VAT/GST No./Tax ID</Typography>
                        {/* <Typography className='prefilled-content' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.vatOrGSTNoOrTxId}</Typography> */}
                        <Typography className='prefilled-content' id='vat' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{legalentities[entityNo].le1.billingDetails.vatOrGSTNoOrTxId}</Typography>
                    </Stack>

                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography className='prefilled-title' component='h3' sx={{
                            border: '1px solid #eee',
                            borderRadius: '10px !important',
                            fontSize: '14px',
                            color: '#344857',
                            fontFamily: 'ubuntu',
                            opacity: 0.7,
                            flexBasis: '30%',
                            textTransform: 'capitalize',
                        }}>Company Pan or Equivalent No.</Typography>
                        {/* <Typography className='prefilled-content' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.companyPAN}</Typography> */}
                        <Typography className='prefilled-content' id='company-pan' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{legalentities[entityNo].le1.billingDetails.companyPAN}</Typography>
                    </Stack>

                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography className='prefilled-title' component='h3' sx={{
                            border: '1px solid #eee',
                            borderRadius: '10px !important',
                            fontSize: '14px',
                            color: '#344857',
                            fontFamily: 'ubuntu',
                            opacity: 0.7,
                            flexBasis: '30%',
                            textTransform: 'capitalize',
                        }}>applicable currency</Typography>
                        {/* <Typography className='prefilled-content' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.applicableCurrency}</Typography> */}
                        <Typography className='prefilled-content' id='applicable-currency' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{legalentities[entityNo].le1.billingDetails.applicableCurrency}</Typography>
                    </Stack>
                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography className='prefilled-title' component='h3' sx={{
                            border: '1px solid #eee',
                            borderRadius: '10px !important',
                            fontSize: '14px',
                            color: '#344857',
                            fontFamily: 'ubuntu',
                            opacity: 0.7,
                            flexBasis: '30%',
                            textTransform: 'capitalize',
                        }}>contact term</Typography>
                        {/* <Typography className='prefilled-content' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.contractTerm}</Typography> */}
                        <Typography className='prefilled-content' id='contract-term' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{legalentities[entityNo].le1.billingDetails.contractTerm}</Typography>
                    </Stack>
                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography className='prefilled-title' component='h3' sx={{
                            border: '1px solid #eee',
                            borderRadius: '10px !important',
                            fontSize: '14px',
                            color: '#344857',
                            fontFamily: 'ubuntu',
                            opacity: 0.7,
                            flexBasis: '30%',
                            textTransform: 'capitalize',
                        }}>rate change notification period(in days)</Typography>
                        {/* <Typography className='prefilled-content' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.rateChangeNotificationPeriod}</Typography> */}
                        <Typography className='prefilled-content' id='rate-change-notification-period' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{legalentities[entityNo].le1.billingDetails.rateChangeNotificationPeriod}</Typography>
                    </Stack>

                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography className='prefilled-title' component='h3' sx={{
                            border: '1px solid #eee',
                            borderRadius: '10px !important',
                            fontSize: '14px',
                            color: '#344857',
                            fontFamily: 'ubuntu',
                            opacity: 0.7,
                            flexBasis: '30%',
                            textTransform: 'capitalize',
                        }}>rate & coverage change time zone</Typography>
                        {/* <Typography className='prefilled-content' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.rateCoverageChangeTimeZone}</Typography> */}
                        <Typography className='prefilled-content' id='rate-coverage-change-timeZone' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{legalentities[entityNo].le1.billingDetails.rateCoverageChangeTimeZone}</Typography>
                    </Stack>
                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography className='prefilled-title' component='h3' sx={{
                            border: '1px solid #eee',
                            borderRadius: '10px !important',
                            fontSize: '14px',
                            color: '#344857',
                            fontFamily: 'ubuntu',
                            opacity: 0.7,
                            flexBasis: '30%',
                            textTransform: 'capitalize',
                        }}>account status & remark</Typography>
                        {/* <Typography className='prefilled-content' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.accountStatus}</Typography> */}
                        <Typography className='prefilled-content' id='account-status' component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{legalentities[entityNo].le1.billingDetails.accountStatus}</Typography>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default BillingDetail
