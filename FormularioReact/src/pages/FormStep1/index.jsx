import { useHistory } from "react-router";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent,useEffect } from "react";


export const FormStep1 = () => {
    
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    },[]);

    const handleNextStep = () => {
        if(state.name !== ''){
        history.push('/step2');
        }else{
            alert("Preencha seus dados");
        }
    }

    const handleNameChange = (e = ChangeEvent) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }
    
    return(
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o camp abaixo com seu nome completo.</p>

                <hr/>

                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    >
                    </input>
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
        
    );
}