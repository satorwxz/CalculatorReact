import React, {useState} from 'react';
import CustomBtn from "./Components/CustomBtn";


const App = ()=>{

    const[field,setField]= useState('')
    console.log(field)


  return(
      <div className="wrapper">
          <input onChange={(e) => setField(e.target.value)}
                 className={'input-screen'}
                 value={field}
                 type="text"/>
          <div className={'btn-wrapper'}>
              <CustomBtn title={1} field={field} setState={setField} />
              <CustomBtn title={2} field={field} setState={setField} />
              <CustomBtn title={3} field={field} setState={setField} />
              <CustomBtn title={4} field={field} setState={setField} />
              <CustomBtn title={5} field={field} setState={setField} />
              <CustomBtn title={6} field={field} setState={setField} />
              <CustomBtn title={7} field={field} setState={setField} />
              <CustomBtn title={8} field={field} setState={setField} />
              <CustomBtn title={9} field={field} setState={setField} />
              <CustomBtn title={0} field={field} setState={setField} />
              <CustomBtn title={'+'} field={field} setState={setField} />
              <CustomBtn title={'-'} field={field} setState={setField} />
              <CustomBtn title={'*'} field={field} setState={setField} />
              <CustomBtn title={'/'} field={field} setState={setField} />
              <CustomBtn title={'='} field={field} setState={setField} />
          </div>
      </div>
  )
}
export default App;