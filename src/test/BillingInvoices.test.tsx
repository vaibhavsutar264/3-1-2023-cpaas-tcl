import React from 'react'
import { getByText, queryByDisplayValue, render, screen, waitFor } from '@testing-library/react'
import Billing from '../components/billing/Billing'
import { Provider } from 'react-redux'
import { store, persistor } from '../redux/store'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

describe('App', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Billing />
        </Provider>
      </BrowserRouter>
    )
  })
  const textInput = ['pending', 'completed']

  test('inputs should exist', () => {
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
    const searchElement = screen.getByTestId(
        'search-element'
      ) as HTMLInputElement
      userEvent.type(searchElement, textInput[0])
    expect(searchElement.value).toBe('pending')
  })
  test('when the user type in input and click on search button then it should display the searched text input only not the alternative', async () => {
    //   const flushPromises = () => new Promise(process.nextTick);
    const searchElement = screen.getByTestId(
        'search-element'
      ) as HTMLInputElement
      const searchButtonElement = screen.getByTestId(
        'search-button-element'
      ) as HTMLInputElement
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
        expect(screen.getByText("vaibhav")).toBeInTheDocument()
      })

    expect(paraElement).toBeInTheDocument()
    // expect(entityElement).toBeInTheDocument()
    // expect(searchElement.value).toBe('completed')
    // const data = screen.getByText('Pending')
    // await flushPromises();
    // expect(data).toBeTruthy();
  })
})
