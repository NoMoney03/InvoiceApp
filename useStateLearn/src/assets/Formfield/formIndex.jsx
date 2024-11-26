import "./formIndex.css";
import FormField from "./Components/formField/formField";

const sendersDetails = [
  {
    tagtype: "input",
    label: "Sender's Name",
    id: "sendersName",
    className: "inputField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "Sender's Name"
  },
  {
    tagtype: "textArea",
    label: "Sender's Address",
    id: "sendersAddress",
    className: "textField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "Sender's Address"
  },
  {
    tagtype: "input",
    label: "Email",
    id: "sendersEmailField",
    className: "inputField",
    type: "email",
    labelClass: "hideClass",
    placeholder: "Email"
  },
  {
    tagtype: "input",
    label: "Phone",
    id: "phoneField",
    className: "inputField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "Phone"
  },
];

function DivSenderDeets() {
  return (
    <>
    <div className="container">
      <h2 className="h2Class">From</h2>
      {sendersDetails.map((item) => {
        return (
          <FormField
            key={item.id}
            tagtype={item.tagtype}
            label={item.label}
            id={item.id}
            className={item.className}
            type={item.type}
            labelClass={item.labelClass}
            placeholder={item.placeholder}
          />
        );
      })}
      </div>
    </>
  );
}

const clientDetails = [
  {
    tagtype: "input",
    label: "Client's Name",
    id: "clientsName",
    className: "inputField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "Client's Name"
  },
  {
    tagtype: "textArea",
    label: "Client's Address",
    id: "clientAddress",
    className: "textField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "Client's Address"
  },
  {
    tagtype: "input",
    label: "Email",
    id: "clientEmailField",
    className: "inputField",
    type: "email",
    labelClass: "hideClass",
    placeholder: "Email"
  },
  {
    tagtype: "input",
    label: "Phone",
    id: "clientphoneField",
    className: "inputField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "Phone"
  },
];


function DivClientDeets(){

  return(
    <>
    <div className="container">
    <h2 className="h2Class">Bill To</h2>
    {clientDetails.map((item) => {
        return (
          <FormField
            key={item.id}
            tagtype={item.tagtype}
            label={item.label}
            id={item.id}
            className={item.className}
            type={item.type}
            labelClass={item.labelClass}
            placeholder={item.placeholder}
          />
        );
      })}

    </div>
    </>
  )
}


const particulars = [
  {
    tagtype: "input",
    label: "Invoice Number",
    id: "invoiceNum",
    className: "inputField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "Invoice Number"
  },
  {
    tagtype: "input",
    label: "Date",
    id: "invoiceDate",
    className: "inputField",
    type: "date",
    labelClass: "hideClass",
    placeholder: "DD-MM-YYYY"
  },
  {
    tagtype: "input",
    label: "Currency",
    id: "currency",
    className: "inputField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "Currency e.g. USD / EUR"
  },
  {
    tagtype: "textArea",
    label: "Remarks",
    id: "remarks",
    className: "inputField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "Remarks"
  },



]

function ParticularsDiv(){

  return(
    <>
    <div className="container">
    <h2 className="h2Class">Particulars</h2>
    {particulars.map((item => {
        return (
          <FormField
            key={item.id}
            tagtype={item.tagtype}
            label={item.label}
            id={item.id}
            className={item.className}
            type={item.type}
            labelClass={item.labelClass}
            placeholder={item.placeholder}
          />
        );
      

    }))}
    </div>
    </>
  )

}



function FormBody() {
  return (
    <>
    <div className="formBodyDiv">
      <DivSenderDeets />
      <DivClientDeets />
      <ParticularsDiv />
      </div>
    </>
  );
}

export default FormBody;
