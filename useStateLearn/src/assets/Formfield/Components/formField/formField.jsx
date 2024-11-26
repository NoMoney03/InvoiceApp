
import './Formfield.css'
export default function FormField ( {tagtype, label, id, className, type, value, placeholder, onChange, onInput, labelClass}){

    return(
        <>

        {tagtype === "input" ? (

            <div className = "formField">
                <label htmlFor={id} className={labelClass}>{label}</label>
                <input id={id} className={className} type={type} value={value} placeholder={placeholder} onChange={onChange} onInput={onInput}></input>
            </div>
        ) : tagtype = "textArea" ?(
            <div className = "formField">
                <label htmlFor={id} className={labelClass}>{label}</label>
                <textarea id={id} className={className} value={value} placeholder={placeholder} onChange={onChange} onInput={onInput}></textarea>
            </div>
        ) : null
        }
        </>
    )

}