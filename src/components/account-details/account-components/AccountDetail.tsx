import { useEffect, useState } from 'react'
import {
  Box,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import { useDispatch, useSelector } from '../../../redux/store'

const AccountDetail = ({
  LegalEntity,
  setLegalEntity,
  setsendInvoice,
}: any) => {
  const dispatch = useDispatch()
  const [leEntity, setLeEntity] = useState<any>(null)
  const { accountDetails } = useSelector((state: any) => state.account)

  useEffect(() => {
    try {
      setLeEntity(accountDetails.legalentities[0][GetLegalEntities()[0]])
      setsendInvoice(accountDetails.legalentities[0].sendInvoiceToContact)
      setLegalEntity(GetLegalEntities()[0])
    } catch { }

  }, [dispatch])

  const GetLegalEntities = () => {
    try {
      return accountDetails.legalentities.map((e: any) => Object.keys(e)[0])
    } catch {
      return []
    }
  }
  const handleChange = (event: SelectChangeEvent) => {
    const index = GetLegalEntities().indexOf(event.target.value)
    setLeEntity(accountDetails.legalentities[index][event.target.value])
    setsendInvoice(accountDetails.legalentities[index].sendInvoiceToContact)
    setLegalEntity(event.target.value)
  }

  return (
    <>
      {/* 1st right row container starts here */}
      <Box
        className="bd-single-content"
        sx={{
          bgcolor: '#fff',
          height: 1,
          borderRadius: '20px',
          pt: '40px',
          pb: '133px',
          px: '50px',
        }}
      >
        {/* 1st row starts here */}
        <Box
          sx={{
            mb: 6,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h5"
              component="h1"
              sx={{
                maxWidth: 'unset',
                textAlign: 'left',
                padding: 0,
                fontSize: '24px',
                lineHeight: '22px',
                color: '#303030',
                fontWeight: 700,
                fontFamily: 'ubuntu',
              }}
            >
              Billing Details
            </Typography>
            <Box
              id="select-entity-form"
              sx={{
                minWidth: 200,
                '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                {
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
                  top: LegalEntity.length > 1 ? '1px' : '-11px',
                  height: 'min-content',
                  backgroundColor: '#fff !important',
                },
              }}
            >
              {GetLegalEntities().length > 0 && (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Legal Entity
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={LegalEntity}
                    onChange={handleChange}
                  >
                    {GetLegalEntities().map((val: any, index: any) => (
                      <MenuItem value={val} key={`legalEnt${index}`}>
                        Legal Entity Name {index + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </Box>
          </Stack>
        </Box>

        {/* 2nd row starts here */}
        {leEntity != null && (
          <Box
            component="form"
            className="billing-details-input"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              rowGap: '48px',
            }}
            noValidate
            autoComplete="off"
          >
            <Stack
              sx={{
                flexBasis: '30%',
              }}
            >
              <Typography
                className="prefilled-title"
                component="h3"
                sx={{
                  border: '1px solid #eee',
                  borderRadius: '10px !important',
                  fontSize: '14px',
                  color: '#344857',
                  fontFamily: 'ubuntu',
                  opacity: 0.7,
                  textTransform: 'capitalize',
                }}
              >
                account name
              </Typography>
              <Typography
                className="prefilled-content"
                id="account-name-details"
                component="span"
                sx={{
                  color: '#344857',
                  fontWeight: 700,
                  fontSize: '16px',
                  fontFamily: 'ubuntu',
                  lineHeight: '18px',
                }}
              >
                {leEntity && leEntity?.billingDetails.accountName}
              </Typography>
            </Stack>

            <Stack
              sx={{
                flexBasis: '30%',
              }}
            >
              <Typography
                className="prefilled-title"
                component="h3"
                sx={{
                  border: '1px solid #eee',
                  borderRadius: '10px !important',
                  fontSize: '14px',
                  color: '#344857',
                  fontFamily: 'ubuntu',
                  opacity: 0.7,
                  flexBasis: '30%',
                  textTransform: 'capitalize',
                }}
              >
                legal entity
              </Typography>
              <Typography
                className="prefilled-content"
                id="legal-entity"
                component="span"
                sx={{
                  color: '#344857',
                  fontWeight: 700,
                  fontSize: '16px',
                  fontFamily: 'ubuntu',
                  lineHeight: '18px',
                }}
              >
                {leEntity && leEntity?.billingDetails.legalEntity}
              </Typography>
            </Stack>

            <Stack
              sx={{
                flexBasis: '30%',
              }}
            >
              <Typography
                className="prefilled-title"
                component="h3"
                sx={{
                  border: '1px solid #eee',
                  borderRadius: '10px !important',
                  fontSize: '14px',
                  color: '#344857',
                  fontFamily: 'ubuntu',
                  opacity: 0.7,
                  flexBasis: '30%',
                  textTransform: 'capitalize',
                }}
              >
                billing type
              </Typography>
              <Typography
                className="prefilled-content"
                id="billing-type"
                component="span"
                sx={{
                  color: '#344857',
                  fontWeight: 700,
                  fontSize: '16px',
                  fontFamily: 'ubuntu',
                  lineHeight: '18px',
                }}
              >
                {leEntity && leEntity?.billingDetails.billingtype}
              </Typography>
            </Stack>

            <Stack
              sx={{
                flexBasis: '30%',
              }}
            >
              <Typography
                className="prefilled-title"
                component="h3"
                sx={{
                  border: '1px solid #eee',
                  borderRadius: '10px !important',
                  fontSize: '14px',
                  color: '#344857',
                  fontFamily: 'ubuntu',
                  opacity: 0.7,
                  flexBasis: '30%',
                  textTransform: 'capitalize',
                }}
              >
                billing cycle
              </Typography>
              <Typography
                className="prefilled-content"
                id="billing-cycle"
                component="span"
                sx={{
                  color: '#344857',
                  fontWeight: 700,
                  fontSize: '16px',
                  fontFamily: 'ubuntu',
                  lineHeight: '18px',
                }}
              >
                {leEntity && leEntity?.billingDetails.billingCycle}
              </Typography>
            </Stack>

            <Stack
              sx={{
                flexBasis: '30%',
              }}
            >
              <Typography
                className="prefilled-title"
                component="h3"
                sx={{
                  border: '1px solid #eee',
                  borderRadius: '10px !important',
                  fontSize: '14px',
                  color: '#344857',
                  fontFamily: 'ubuntu',
                  opacity: 0.7,
                  flexBasis: '30%',
                  textTransform: 'capitalize',
                }}
              >
                payment period
              </Typography>
              <Typography
                className="prefilled-content"
                id="payment-period"
                component="span"
                sx={{
                  color: '#344857',
                  fontWeight: 700,
                  fontSize: '16px',
                  fontFamily: 'ubuntu',
                  lineHeight: '18px',
                }}
              >
                {leEntity && leEntity?.billingDetails.paymentPeriod}
              </Typography>
            </Stack>

            <Stack
              sx={{
                flexBasis: '30%',
              }}
            >
              <Typography
                className="prefilled-title"
                component="h3"
                sx={{
                  border: '1px solid #eee',
                  borderRadius: '10px !important',
                  fontSize: '14px',
                  color: '#344857',
                  fontFamily: 'ubuntu',
                  opacity: 0.7,
                  flexBasis: '30%',
                  textTransform: 'capitalize',
                }}
              >
                VAT/GST No./Tax ID
              </Typography>

              <Typography
                className="prefilled-content"
                id="vat"
                component="span"
                sx={{
                  color: '#344857',
                  fontWeight: 700,
                  fontSize: '16px',
                  fontFamily: 'ubuntu',
                  lineHeight: '18px',
                }}
              >
                {leEntity && leEntity?.billingDetails.vatOrGSTNoOrTxId}
              </Typography>
            </Stack>

            <Stack
              sx={{
                flexBasis: '30%',
              }}
            >
              <Typography
                className="prefilled-title"
                component="h3"
                sx={{
                  border: '1px solid #eee',
                  borderRadius: '10px !important',
                  fontSize: '14px',
                  color: '#344857',
                  fontFamily: 'ubuntu',
                  opacity: 0.7,
                  flexBasis: '30%',
                  textTransform: 'capitalize',
                }}
              >
                Company Pan or Equivalent No.
              </Typography>
              <Typography
                className="prefilled-content"
                id="company-pan"
                component="span"
                sx={{
                  color: '#344857',
                  fontWeight: 700,
                  fontSize: '16px',
                  fontFamily: 'ubuntu',
                  lineHeight: '18px',
                }}
              >
                {leEntity && leEntity?.billingDetails.companyPAN}
              </Typography>
            </Stack>

            <Stack
              sx={{
                flexBasis: '30%',
              }}
            >
              <Typography
                className="prefilled-title"
                component="h3"
                sx={{
                  border: '1px solid #eee',
                  borderRadius: '10px !important',
                  fontSize: '14px',
                  color: '#344857',
                  fontFamily: 'ubuntu',
                  opacity: 0.7,
                  flexBasis: '30%',
                  textTransform: 'capitalize',
                }}
              >
                applicable currency
              </Typography>
              <Typography
                className="prefilled-content"
                id="applicable-currency"
                component="span"
                sx={{
                  color: '#344857',
                  fontWeight: 700,
                  fontSize: '16px',
                  fontFamily: 'ubuntu',
                  lineHeight: '18px',
                }}
              >
                {leEntity && leEntity?.billingDetails.applicableCurrency}
              </Typography>
            </Stack>
            <Stack
              sx={{
                flexBasis: '30%',
              }}
            >
              <Typography
                className="prefilled-title"
                component="h3"
                sx={{
                  border: '1px solid #eee',
                  borderRadius: '10px !important',
                  fontSize: '14px',
                  color: '#344857',
                  fontFamily: 'ubuntu',
                  opacity: 0.7,
                  flexBasis: '30%',
                  textTransform: 'capitalize',
                }}
              >
                contact term
              </Typography>
              <Typography
                className="prefilled-content"
                id="contract-term"
                component="span"
                sx={{
                  color: '#344857',
                  fontWeight: 700,
                  fontSize: '16px',
                  fontFamily: 'ubuntu',
                  lineHeight: '18px',
                }}
              >
                {leEntity && leEntity?.billingDetails.contractTerm}
              </Typography>
            </Stack>
            <Stack
              sx={{
                flexBasis: '30%',
              }}
            >
              <Typography
                className="prefilled-title"
                component="h3"
                sx={{
                  border: '1px solid #eee',
                  borderRadius: '10px !important',
                  fontSize: '14px',
                  color: '#344857',
                  fontFamily: 'ubuntu',
                  opacity: 0.7,
                  flexBasis: '30%',
                  textTransform: 'capitalize',
                }}
              >
                rate change notification period(in days)
              </Typography>
              <Typography
                className="prefilled-content"
                id="rate-change-notification-period"
                component="span"
                sx={{
                  color: '#344857',
                  fontWeight: 700,
                  fontSize: '16px',
                  fontFamily: 'ubuntu',
                  lineHeight: '18px',
                }}
              >
                {leEntity &&
                  leEntity?.billingDetails.rateChangeNotificationPeriod}
              </Typography>
            </Stack>
            <Stack
              sx={{
                flexBasis: '30%',
              }}
            >
              <Typography
                className="prefilled-title"
                component="h3"
                sx={{
                  border: '1px solid #eee',
                  borderRadius: '10px !important',
                  fontSize: '14px',
                  color: '#344857',
                  fontFamily: 'ubuntu',
                  opacity: 0.7,
                  flexBasis: '30%',
                  textTransform: 'capitalize',
                }}
              >
                rate & coverLegalEntity change time zone
              </Typography>
              <Typography
                className="prefilled-content"
                id="rate-coverLegalEntity-change-timeZone"
                component="span"
                sx={{
                  color: '#344857',
                  fontWeight: 700,
                  fontSize: '16px',
                  fontFamily: 'ubuntu',
                  lineHeight: '18px',
                }}
              >
                {leEntity && leEntity?.billingDetails.rateCoverageChangeTimeZone}
              </Typography>
            </Stack>
            <Stack
              sx={{
                flexBasis: '30%',
              }}
            >
              <Typography
                className="prefilled-title"
                component="h3"
                sx={{
                  border: '1px solid #eee',
                  borderRadius: '10px !important',
                  fontSize: '14px',
                  color: '#344857',
                  fontFamily: 'ubuntu',
                  opacity: 0.7,
                  flexBasis: '30%',
                  textTransform: 'capitalize',
                }}
              >
                account status & remark
              </Typography>
              <Typography
                className="prefilled-content"
                id="account-status"
                component="span"
                sx={{
                  color: '#344857',
                  fontWeight: 700,
                  fontSize: '16px',
                  fontFamily: 'ubuntu',
                  lineHeight: '18px',
                }}
              >
                {leEntity && leEntity?.billingDetails.accountStatus}
              </Typography>
            </Stack>
          </Box>
        )}
      </Box>
    </>
  )
}

export default AccountDetail
