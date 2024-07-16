import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ModalProvider } from './context/ModalContext.jsx'
import { FormProvider } from './context/FormContext.jsx'


// import SomeOtherComponent from './context/SomeOtherComponent.jsx'
// import ModalDelete from './sections/ModalDelete/index.jsx'
// import ModalForm from './sections/ModalForm/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

    <FormProvider>
        <ModalProvider>
            <App />
        </ModalProvider>
    </FormProvider>

)
