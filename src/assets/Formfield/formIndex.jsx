import "./formIndex.css";
import FormField from "./Components/formField/formField";
import { useState } from "react";
import Table from "./Components/Table/Table";
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";

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
    tagtype: "input",
    label: "P.O. Number",
    id: "poNumber",
    className: "inputField",
    type: "text",
    labelClass: "hideClass",
    placeholder: "P.O. Number",
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
    poNumber: "",
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

  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#E4E4E4",
    },
    section: {
      height: "10vh",
      margin: 20,
      padding: 10,
      flexGrow: 1,
      border: 2,
      fontSize: "12px",
    },
    table: {
      borderTop: "2px solid grey",
    },
    tableHCell: {
      padding: "10px",
      textAlign: "center",
    },
  });

  const MyDoc = () => (
    <Document>
      <Page
        style={{
          backgroundColor: "#E4E4E4",
          flexDirection: "column",
          fontSize: 12,
        }}
      >
        <View
          id="header"
          style={{
            padding: 10,
            margin: 10,
            /*border: 2,*/ flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: 800 }}>
            {data.sendersName || "Sender Name"}
          </Text>
          <Text>{"#" + data.invoiceNum || "Invoice Number"}</Text>
        </View>
        <View
          id="div2"
          style={{
            padding: 10,
            margin: 10,
            /*border: 2,*/ flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View id="SendersDetails" style={{ maxWidth: "50vw" }}>
            <Text>{data.sendersAddress || "Sender's Address"}</Text>
            <Text>{data.sendersEmail || "Sender's Email"}</Text>
            <Text>{data.sendersPhone || "Sender's Phone"}</Text>
          </View>
          <View id="particulars" style={{ maxWidth: "50vw" }}>
            <Text>{"Date: " + data.invoiceDate || "Date"}</Text>
            <Text>{"P.O. Num: " + data.poNumber || "P.O. Number"}</Text>
            <Text>{"Currency: " + data.currency || "Currency"}</Text>
          </View>
        </View>
        <View
          id="div3"
          style={{
            padding: 10,
            margin: 10,
            /*border: 2,*/ flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View id="billToDiv" style={{ maxWidth: "50vw" }}>
            <Text style={{ fontSize: 14 }}>Bill To: </Text>
            <hr style={{ height: "2vh" }}></hr>
            <Text>{data.clientsName || "Client's Name"}</Text>
            <Text>{data.clientsAddress || "Client's Address"}</Text>
            <Text>{data.clientsEmail || "Client's Email"}</Text>
            <Text>{data.clientsPhone || "Client's Phone"}</Text>
          </View>
          <View style={{ maxWidth: "30vw" }}>
            <Text>
              {data.remarks.length > 0 ? "Remarks: " + data.remarks : " "}
            </Text>
          </View>
        </View>

        <View
          id="div4"
          style={{
            padding: 10,
            margin: 10,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <View
            style={[styles.table, { flexDirection: "row", margin: "auto" }]}
          >
            <Text style={[styles.tableHCell, { width: "10vw" }]}>No.</Text>
            <Text style={[styles.tableHCell, { width: "35vw" }]}>
              Description
            </Text>
            <Text style={[styles.tableHCell, { width: "15vw" }]}>Quantity</Text>
            <Text style={[styles.tableHCell, { width: "15vw" }]}>Price</Text>
            <Text style={[styles.tableHCell, { width: "15vw" }]}>Total</Text>
          </View>

          {tableRow.map((data, index) => (
            <View
              style={[styles.table, { flexDirection: "row", margin: "auto" }]}
              key={index}
            >
              <Text style={[styles.tableHCell, { width: "10vw" }]}>
                {index + 1}
              </Text>
              <Text style={[styles.tableHCell, { width: "35vw" }]}>
                {data.Description}
              </Text>
              <Text style={[styles.tableHCell, { width: "15vw" }]}>
                {data.Quantity}
              </Text>
              <Text style={[styles.tableHCell, { width: "15vw" }]}>
                {data.Price}
              </Text>
              <Text style={[styles.tableHCell, { width: "15vw" }]}>
                {data.Total}
              </Text>
            </View>
          ))}
        </View>

        <View
          id="div5"
          style={{
            padding: 10,
            margin: 10,
            /*border: 2,*/ flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View id="notes">
            <Text>
              {data.addNote.length > 0
                ? "Additional Notes: " + data.addNote || "Additional Notes"
                : ""}
            </Text>
          </View>
        </View>
        <View
          id="div6"
          style={{
            padding: 10,
            margin: 10,
            /*border: 2,*/ flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View id="paymentInfo">
            <Text>
              {data.paymentInfo.length > 0
                ? "Payment Info: " + data.paymentInfo || "Payment Info"
                : ""}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );


let uniqueFileName = Date.now();

  return (
    <>
      {/* <button
        onClick={() => {
          console.log("Data: ", data, "tabledata: ", tableRow);
          // console.log(tableRow);
        }}
      >
        Print
      </button> */}
      <button>
        {<PDFDownloadLink document={<MyDoc />} fileName={data.clientsName.length > 0 ? `${data.clientsName + uniqueFileName}.pdf`: `${uniqueFileName}.pdf` }>
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>}
      </button>

      <div className="formBodyDiv">
        {/* <PDFViewer style={{ height: "100vh" }}>
          <MyDoc />
        </PDFViewer> */}
        <DivSenderDeets setData={setData} />
        <DivClientDeets setData={setData} />
        <ParticularsDiv setData={setData} />
        <Table tableRow={tableRow} setTableRow={setTableRow} />
        <NotesDiv setData={setData} />
        <PaymentInfoDiv setData={setData} />
      </div>
    </>
  );
}

export default FormBody;
