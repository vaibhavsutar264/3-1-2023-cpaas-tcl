import React from 'react'
import { getByText, queryByDisplayValue, render, screen, waitFor, cleanup } from '@testing-library/react'
import Billing from '../components/billing/Billing'
import { Provider } from 'react-redux'
import { store, persistor } from '../redux/store'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { billing } from '../services/api'
import * as APIService from '../__mocks__/api';
import AxiosMock from 'axios'

// afterEach(cleanup)

// test('mock axios calls', ()=>{
//   AxiosMock.get.mockResolvedValue({data : [
//     {
//       "id": 1,
//       "Invoice_no": 134,
//       "Customer_LE": "a",
//       "Tata_Entity": "vaibhav",
//       "PO_number": 1050,
//       "Payment_Status": "pending",
//       "Invoice_amt": 1000.87,
//       "Currency": "Rupees",
//       "Invoice_date": "2000-06-23",
//       "Due_date": "2000-09-23",
//       "Payment done date & time": "2000-07-23",
//       "Time Zone": "IST"
//     },
//     {
//       "id": 2,
//       "Invoice_no": 134,
//       "Customer_LE": "xyz",
//       "Tata_Entity": "Dummy b Tata Entity",
//       "PO_number": 110,
//       "Payment_Status": "completed",
//       "Invoice_amt": 2000.87,
//       "Currency": "Rupees",
//       "Invoice_date": "2000-06-23",
//       "Due_date": "2000-09-23",
//       "Payment done date & time": "2000-07-23",
//       "Time Zone": "IST"
//     }
//   ]})
//   const url = 'http://localhost:4000/Invoices'
//   const {} = render(
//     <BrowserRouter>
//       <Provider store={store}>
//         <Billing toggleTheme={toggleTheme}/>
//       </Provider>
//     </BrowserRouter>
//   )
// })

// jest.mock('../__mocks__/api');

describe('App', () => {
  // beforeEach(() => {
  //   render(
  //     <BrowserRouter>
  //       <Provider store={store}>
  //         <Billing />
  //       </Provider>
  //     </BrowserRouter>
  //   )
  // })
  const toggleTheme = false
  const textInput = ['pending', 'completed']

  test('inputs should exist', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Billing toggleTheme={toggleTheme}/>
        </Provider>
      </BrowserRouter>
    )
    // const response = billing.loadInvoices()
    // console.log('RESPONSE',response)
    const searchElement = screen.getByTestId(
      'search-element'
    ) as HTMLInputElement
    const searchButtonElement = screen.getByTestId(
      'search-button-element'
    ) as HTMLInputElement
    const tableBodyElement = screen.getByTestId(
      'table-body-element'
    ) as HTMLInputElement
    // const tableBodyDataElement = queryByDisplayValue(/INVOICE ID/i) as HTMLTableElement
    expect(searchButtonElement).toBeInTheDocument()
    expect(tableBodyElement).toBeInTheDocument()
    // expect(tableBodyDataElement).toBeInTheDocument()
    // expect(screen.getByDisplayValue('Dummy a Tata Entity')).toBeTruthy()
    // expect(confirmPasswordElement).toBeInTheDocument()
  })

  test('should be able to type in it for searching', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Billing toggleTheme={toggleTheme}/>
        </Provider>
      </BrowserRouter>
    )
    const searchElement = screen.getByTestId(
        'search-element'
      ) as HTMLInputElement
      userEvent.type(searchElement, textInput[0])
    expect(searchElement.value).toBe('pending')
  })


test('billing page makes a api call with proper params', async  () => {
  // APIService.getData.mockResolvedValueOnce();
  const data = [
    {
      "id": 1,
      "Invoice_no": 134,
      "Customer_LE": "a",
      "Tata_Entity": "vaibhav",
      "PO_number": 1050,
      "Payment_Status": "pending",
      "Invoice_amt": 1000.87,
      "Currency": "Rupees",
      "Invoice_date": "2000-06-23",
      "Due_date": "2000-09-23",
      "Payment done date & time": "2000-07-23",
      "Time Zone": "IST"
    },
    {
      "id": 2,
      "Invoice_no": 134,
      "Customer_LE": "xyz",
      "Tata_Entity": "Dummy b Tata Entity",
      "PO_number": 110,
      "Payment_Status": "completed",
      "Invoice_amt": 2000.87,
      "Currency": "Rupees",
      "Invoice_date": "2000-06-23",
      "Due_date": "2000-09-23",
      "Payment done date & time": "2000-07-23",
      "Time Zone": "IST"
    }
  ]
  // await waitFor(()=>{
  //   console.log(APIService.getData(data))
  //   expect(APIService.getData(data)).toHaveBeenCalledTimes(1)
  //   // APIService.getData
  // })
  // const {getByText, getByLabelText, debug} = render(<Billing/>);
  // const inputField = getByLabelText(/Body:/i);
  // const submitBtn = getByText(/Post/i);
  // fireEvent.change(inputField, {'target': {'value' : 'sample title'}});
  // fireEvent.click(submitBtn);
  // debug(submitBtn);
  // expect(APIService.getData).toHaveBeenCalledTimes(1)
  // expect(APIService.getData).toHaveBeenCalledWith("sample title")
  // await wait(() => null)
})


  test('when the user type in input and click on search button then it should display the searched text input only not the alternative', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Billing toggleTheme={toggleTheme}/>
        </Provider>
      </BrowserRouter>
    )
    const searchElement = screen.getByTestId(
      'search-element'
      ) as HTMLInputElement
      const searchButtonElement = screen.getByTestId(
        'search-button-element'
        ) as HTMLButtonElement
        userEvent.type(searchElement, textInput[0])
        userEvent.click(searchButtonElement)
          await waitFor(()=>{
            expect(screen.getAllByText(/vaibhav/i)).toBeTruthy()
          })







        //   const flushPromises = () => new Promise(process.nextTick);
      // const searchButtonElement = screen.getByRole('button', {
      //   name: /pagingsearch/i,
      // }) as HTMLButtonElement
    //   const entityElement = waitFor(screen.getByTestId(
    //     'entity-element'
    //   )) as HTMLParagraphElement
    //   const outputElement = screen.getByText('vaibhav') as HTMLParagraphElement
      

    // expect(entityElement).toBeInTheDocument()
    // expect(searchElement.value).toBe('completed')
    // const data = screen.getByText('Pending')
    // await flushPromises();
    // expect(data).toBeTruthy();
  })
})
