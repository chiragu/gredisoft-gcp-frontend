import { useState } from "react";

const TriviaOption = ({option, correct_answer}) => {


    const [optionSelected, setOptionSelected] = useState(false);

    const getClassName = (option, correct_answer) => {
        if (!optionSelected) {
            return "btn";
        }
        
        if (option === correct_answer) {
            return "btn btn-success";
        }
        else {
            return "btn btn-danger";
        }
    }

    return ( 
        <p>
            <button disabled={optionSelected} className={getClassName(option,correct_answer)} dangerouslySetInnerHTML={{__html: `${option}`}} onClick={() => setOptionSelected(true)}/>
        </p>
     );
}
 
export default TriviaOption;