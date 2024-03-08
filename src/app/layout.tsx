import { PortraitContext, ThemeContext } from '../contexts';
import StyledComponentsRegistry from '../lib/registry';
import GlobalStyles from '../styles/GlobalStyles';

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
          <ThemeContext.Provider>
            <PortraitContext.Provider>
              <GlobalStyles />
              {props.children}
            </PortraitContext.Provider>
          </ThemeContext.Provider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
