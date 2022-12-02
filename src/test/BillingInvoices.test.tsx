import React from 'react'
import { getByText, queryByDisplayValue, render, screen, waitFor } from '@testing-library/react'
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


  test('when the user type in input and click on search button then it should display the searched text input only not the alternative', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Billing toggleTheme={toggleTheme}/>
        </Provider>
      </BrowserRouter>
    )
    //   const flushPromises = () => new Promise(process.nextTick);
    const searchElement = screen.getByTestId(
        'search-element'
      ) as HTMLInputElement
      const searchButtonElement = screen.getByTestId(
        'search-button-element'
      ) as HTMLButtonElement
      // const searchButtonElement = screen.getByRole('button', {
      //   name: /pagingsearch/i,
      // }) as HTMLButtonElement
      const paraElement = screen.getByText(
        'abc'
      ) as HTMLInputElement
    //   const entityElement = waitFor(screen.getByTestId(
    //     'entity-element'
    //   )) as HTMLParagraphElement
    //   const outputElement = screen.getByText('vaibhav') as HTMLParagraphElement
      
    userEvent.type(searchElement, textInput[0])
    userEvent.click(searchButtonElement)
      await waitFor(()=>{
        expect(screen.getAllByText(/vaibhav/i)).toBeTruthy()
      })

    expect(paraElement).toBeInTheDocument()
    // expect(entityElement).toBeInTheDocument()
    // expect(searchElement.value).toBe('completed')
    // const data = screen.getByText('Pending')
    // await flushPromises();
    // expect(data).toBeTruthy();
  })
})
