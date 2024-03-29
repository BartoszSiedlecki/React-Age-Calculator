import { FormEvent } from "react"
import "./style.scss"
import { FormData } from "./types"

interface FormProps{
  updateFormData: (formData: FormData) => void;
}

export function Form({ updateFormData }: FormProps){

    function formData(e: FormEvent<HTMLFormElement>){
      e.preventDefault()

      const formElements = e.currentTarget.elements
      const day = formElements.namedItem("day") as HTMLInputElement
      const month = formElements.namedItem("month") as HTMLInputElement
      const year = formElements.namedItem("year") as HTMLInputElement

      const newFormData: FormData ={
        days: parseInt(day.value, 10),
        months: parseInt(month.value, 10),
        years: parseInt(year.value, 10)
      }

      updateFormData(newFormData)
    }

    return(
        <form 
            className="top"
            onSubmit={formData}
        >
          <div className="fields">
            <div className="field">
              <label htmlFor="day"> Day </label>
              <input type="number" id="day" name="day" required
                placeholder="DD"
                min={1} max={31}
              />
            </div>
            <div className="field">
              <label htmlFor="month"> Month</label>
              <input type="number" id="month" name="month" required 
                placeholder="MM"
                min={1} max={12}
              />
            </div>
            <div className="field">
              <label htmlFor="year"> Year </label>
              <input type="number" id="year" name="year" required
                placeholder="YYYY"
                maxLength={4}
                min={1850} max={2024}    
              />
            </div>
          </div>
          <div className="submit">
            <div className="line"></div>
            <button type="submit" className="btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44">
                <g fill="none" stroke="#FFF" strokeWidth="2">
                  <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/>
                </g>
              </svg>
            </button>
          </div>
        </form>
    )
}