import React from "react"
import { useHistory } from "react-router-dom"
import { Auth0Provider, AppState } from "@auth0/auth0-react"

const Auth0ProviderWithHistory = ({
  children
}: {
  children: React.ReactNode
}) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || ""
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || ""

  const history = useHistory()

  const onRedirectCallback = (appState: AppState) => {
    history.push(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithHistory
