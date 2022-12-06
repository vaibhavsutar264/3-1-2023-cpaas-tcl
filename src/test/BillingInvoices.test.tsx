import React from 'react'
import { getByText, queryByDisplayValue, render,act, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import Billing from '../components/billing/Billing'
import { Provider } from 'react-redux'
import { store, persistor } from '../redux/store'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { billing } from '../services/api'


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
    ) as HTMLElement
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


// test('billing page makes a api call with proper params', async  () => {
//   // APIService.getData.mockResolvedValueOnce();
//   const data = [
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
//   ]
//   // await waitFor(()=>{
//   //   console.log(APIService.getData(data))
//   //   expect(APIService.getData(data)).toHaveBeenCalledTimes(1)
//   //   // APIService.getData
//   // })
//   // const {getByText, getByLabelText, debug} = render(<Billing/>);
//   // const inputField = getByLabelText(/Body:/i);
//   // const submitBtn = getByText(/Post/i);
//   // fireEvent.change(inputField, {'target': {'value' : 'sample title'}});
//   // fireEvent.click(submitBtn);
//   // debug(submitBtn);
//   // expect(APIService.getData).toHaveBeenCalledTimes(1)
//   // expect(APIService.getData).toHaveBeenCalledWith("sample title")
//   // await wait(() => null)
// })


  test('Search funtionality testing : when the user type in input (as pending) and click on search button then it should display the searched text input only not the alternative (as completed)', async () => {
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
      const ButtonElement = screen.getByTestId(
        'search-button-element'
        )
        userEvent.type(searchElement, textInput[0])
        userEvent.click(ButtonElement)
        expect(screen.queryByText(/INVOICE ID/i)).toBeTruthy()
        expect(screen.queryByText(/completed/i)).toBeFalsy()
          // await waitFor(()=>{
            //this wait for i will use for actual api
          // })
  })

  test("Test select option", () => {
     render(
      <BrowserRouter>
        <Provider store={store}>
          <Billing toggleTheme={toggleTheme}/>
        </Provider>
      </BrowserRouter>
    )
    const buttonEl = screen.getByText(/showing 10/i);
    userEvent.click(buttonEl)
    const buttonE2 = screen.getByText(/showing 15/i);
    const buttonE3 = screen.getByText(/showing 25/i);
      
    // userEvent.
    expect(buttonEl).toBeInTheDocument()
    expect(buttonE2).toBeInTheDocument()
    expect(buttonE3).toBeInTheDocument()
    expect(buttonEl).toHaveAttribute('value','10')
    expect(buttonE2).toHaveAttribute('value','15')
    expect(buttonE3).toHaveAttribute('value','25')
  });


  test("Test total invoices cards", () => {
     render(
      <BrowserRouter>
        <Provider store={store}>
          <Billing toggleTheme={toggleTheme}/>
        </Provider>
      </BrowserRouter>
    )
    const h3element = screen.getAllByTestId('total-data-card');
    expect(h3element[0]).toContainHTML('2') //as we have taken 2 mock invoices 
    expect(h3element[1]).toContainHTML('0') // as we did not taken payment status as overdue in our invoices mock data
    expect(h3element[2]).toContainHTML('1') // as we have 1 unpaid pending invoice data
    expect(h3element[3]).toContainHTML('1') // as we have 1 paid completed invoice data
  });
  
  test("Test Export to csv button", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Billing toggleTheme={toggleTheme}/>
        </Provider>
      </BrowserRouter>
    )
    const buttonEl = screen.getByText(/export to csv/i);
    userEvent.click(buttonEl);
    expect(buttonEl).toBeInTheDocument()
    expect(buttonEl).toHaveTextContent(/EXPORT TO CSV/i);
    expect(buttonEl).toHaveAttribute('download','InvoicesData.csv')
  });
  
})



