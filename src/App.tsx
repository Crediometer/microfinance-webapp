import React from 'react';
import './App.css';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';


export const COLOR = {
  50: "#234FE3",
  100: "#1366D9",
  150: "#1C1C1C"

}
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: COLOR["50"],
          colorTextSecondary: COLOR["100"],
          colorText:COLOR["150"],
          fontFamily: "'Inter', sans-serif",
        },
        components:{
          Button:{
            colorLink: COLOR["100"],
            paddingInline: 20
          },
          Input:{
            borderRadius: 4
          }
        }
      }}
    >
      <RouterProvider router={routes}/>
    </ConfigProvider>
  );
}

export default App;
