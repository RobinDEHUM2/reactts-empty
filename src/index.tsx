import { ThemeProvider } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import { IntlProvider } from "react-intl"
import { BrowserRouter } from "react-router-dom"

import App from "./App"
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history"
import fr_FR from "./internationalization/fr-FR.json"
import theme from "./theme/default"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <ThemeProvider theme={theme}>
          <IntlProvider locale={"fr"} messages={fr_FR}>
            <App />
          </IntlProvider>
        </ThemeProvider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
