import { useAuth0 } from "@auth0/auth0-react"
import { Button, ButtonGroup } from "@material-ui/core"
import React from "react"
import { FormattedMessage } from "react-intl"

const LoginGroup = ({ children }: { children?: React.ReactNode }) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <ButtonGroup color='inherit'>
      <Button onClick={loginWithRedirect}>
        <FormattedMessage id='header.login' defaultMessage='login' />
      </Button>
      <Button onClick={() => loginWithRedirect({ screen_hint: "signup" })}>
        <FormattedMessage id='header.signIn' defaultMessage='sign in' />
      </Button>
    </ButtonGroup>
  )
}

export default LoginGroup
