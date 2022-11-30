import { getByRole, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../redux/store'
import Login from '../components/login/login-screen/Login'
import { act } from 'react-dom/test-utils'

const mockDispatch = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockDispatch,
}))

describe('Given a Login Page', () => {
  describe("When it's invoked and an user clicks on the 'Login' button and login successfully", () => {
    test('Then it should be redirectioned to the setpassword Page', async () => {
      // const promise = Promise.resolve()
      const textInput = ['vaibhavsutar264@gmail.com', 'Vaibhav@123']

      //below is the mock jsonserverapi with fake jwt token api
      //   const textInput = ['nilson8@email.com', 'nilson']

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Login />
          </Provider>
        </BrowserRouter>
      )
      const emailElement = screen.getByTestId(
        'email-element'
      ) as HTMLInputElement
      const passwordElement = screen.getByTestId(
        'password-element'
      ) as HTMLInputElement

      userEvent.type(emailElement, textInput[0])
      userEvent.type(passwordElement, textInput[1])

      const NavigateToSetpasswordScreen = screen.getByTestId(
        'button-element'
      ) as HTMLButtonElement
      const setpasswordscreen = 'jjk'
      userEvent.click(NavigateToSetpasswordScreen)
      // await waitFor(screen.getByText('Set Password'))
      // expect(waitFor(screen.getByRole('button', { name: /Done/i }))).toBeDisabled()
      // await act(() => promise)
    })
  })
})
