import { useRef, useState } from 'react'
// import './App.css'

import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"

import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'

function App() {
  const dialogRef = useRef(null)
  const [dialogVisible, setDialogVisible] = useState(false)

  const renderFooter = () => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={() => {
            // dialogRef.current.props.onHide()
            setDialogVisible(false)
          }}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={() => setDialogVisible(false)}
          autoFocus
        />
      </div>
    )
  }

  return (
    <>

      <Button
        label="Show"
        icon="pi pi-external-link"
        onClick={() => {
          // console.log("onClick")
          setDialogVisible(true)
        }}
      />
      <Dialog
        ref={dialogRef}
        header="Header"
        footer={renderFooter()}
        style={{ width: "50vw" }}
        visible={dialogVisible}
        onHide={() => {
          // console.log("onHide")
          setDialogVisible(false)
        }}
      >
        <p>
          The content of the Dialog component will be written here
        </p>
      </Dialog>

    </>
  )
}

export default App
