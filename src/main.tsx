    import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
    import App from "./App.tsx";

    // import {ParentUseStateComm} from "./UseState/ParentUseStateComm.tsx";
    // import {ControlledInput} from "./UseState/ControlledInput.tsx";
    // import {CountComponent} from "./UseState/CountComponent.tsx";
    // import {ParentUserList} from "./ParentChildComm/ParentUserList.tsx";
    // import {ParentReceivingData} from "./ParentChildComm/ParentReceivingData.tsx";
    // import {ParentComm} from "./ParentChildComm/ParentComm.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<ParentComm />*/}
    {/*  <ParentReceivingData></ParentReceivingData>*/}
    {/*  <ParentUserList></ParentUserList>*/}
    {/*  <CountComponent></CountComponent>*/}
    {/*  <ControlledInput></ControlledInput>*/}
    {/*  <ParentUseStateComm></ParentUseStateComm>*/}
      <App></App>
  </StrictMode>,
)
