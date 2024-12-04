import "./formIndex.css";
import FormField from "./Components/formField/formField";
import { useState } from "react";
import Table from "./Components/Table/Table";


const sendersDetails = [
  {
    tagtype: "input",
    label: "Sender's Name",
    id: "sendersName",
    className: "inputField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "Sender's Name",
  },
  {
    tagtype: "textArea",
    label: "Sender's Address",
    id: "sendersAddress",
    className: "textField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "Sender's Address",
  },
  {
    tagtype: "input",
    label: "Email",
    id: "sendersEmail",
    className: "inputField",
    type: "email",
    labelClass: "hideClass",
    placeholder: "Email",
  },
  {
    tagtype: "input",
    label: "Phone",
    id: "sendersPhone",
    className: "inputField",
    type: "tel",
    labelClass: "hideClass",
    placeholder: "Phone",
  },
];

function DivSenderDeets({ setData }) {
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
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  [item.id]: e.target.value,
                }));
              }}
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
    placeholder: "Client's Name",
  },
  {
    tagtype: "textArea",
    label: "Client's Address",
    id: "clientsAddress",
    className: "textField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "Client's Address",
  },
  {
    tagtype: "input",
    label: "Email",
    id: "clientsEmail",
    className: "inputField",
    type: "email",
    labelClass: "hideClass",
    placeholder: "Email",
  },
  {
    tagtype: "input",
    label: "Phone",
    id: "clientsPhone",
    className: "inputField",
    type: "tel",
    labelClass: "hideClass no-arrow",
    placeholder: "Phone",
  },
];

function DivClientDeets({ setData }) {
  return (
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
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  [item.id]: e.target.value,
                }));
              }}
            />
          );
        })}
      </div>
    </>
  );
}

const particulars = [
  {
    tagtype: "input",
    label: "Invoice Number",
    id: "invoiceNum",
    className: "inputField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "Invoice Number",
  },
  {
    tagtype: "input",
    label: "Date",
    id: "invoiceDate",
    className: "inputField",
    type: "date",
    labelClass: "hideClass",
    placeholder: "DD-MM-YYYY",
  },
  {
    tagtype: "input",
    label: "Currency",
    id: "currency",
    className: "inputField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "Currency e.g. USD / EUR",
  },
  {
    tagtype: "textArea",
    label: "Remarks",
    id: "remarks",
    className: "inputField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "Remarks",
  },
];

function ParticularsDiv({ setData }) {
  return (
    <>
      <div className="container">
        <h2 className="h2Class">Particulars</h2>
        {particulars.map((item) => {
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
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  [item.id]: e.target.value,
                }));
              }}
            />
          );
        })}
      </div>
    </>
  );
}

const notesDiv = [
  {
    tagtype: "textArea",
    label: "Additional Notes",
    id: "addNote",
    className: "inputField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "Additional Notes",
  },
];

function NotesDiv({ setData }) {
  return (
    <>
      <div className="container">
        {notesDiv.map((item) => {
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
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  [item.id]: e.target.value,
                }));
              }}
            />
          );
        })}
      </div>
    </>
  );
}

const paymentInfo = [
  {
    tagtype: "textArea",
    label: "Payment Info",
    id: "paymentInfo",
    className: "inputField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "Payment Info",
  },
];

function PaymentInfoDiv({ setData }) {
  return (
    <>
      <div className="container">
        <h2 className="h2Class">Payment Info</h2>
        {paymentInfo.map((item) => {
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
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  [item.id]: e.target.value,
                }));
              }}
            />
          );
        })}
      </div>
    </>
  );
}

function FormBody() {
  const [data, setData] = useState({
    sendersName: "",
    sendersAddress: "",
    sendersEmail: "",
    sendersPhone: "",
    clientsName: "",
    clientsAddress: "",
    clientsEmail: "",
    clientsPhone: "",
    invoiceNum: "",
    invoiceDate: "",
    currency: "",
    remarks: "",
    addNote: "",
    paymentInfo: "",
  });

  const [tableRow, setTableRow] = useState([
    {
      No: 1,
      Description: "",
      Quantity: "",
      Price: "",
      Total: "",
      Action: "",
    },
  ]);



  return (
    <>
      <button
        onClick={() => {
          console.log(data);
          console.log(tableRow);
        }}
      >
        Print
      </button>
      <div className="formBodyDiv">
        <DivSenderDeets setData={setData} />
        <DivClientDeets setData={setData} />
        <ParticularsDiv setData={setData} />
        <Table tableRow={tableRow} setTableRow={setTableRow}/>
        <NotesDiv setData={setData} />
        
        <PaymentInfoDiv setData={setData} />
      </div>
    </>
  );
}

export default FormBody;
