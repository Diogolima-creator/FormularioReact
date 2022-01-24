import { useHistory, Link } from "react-router-dom";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent,useEffect } from "react";


export const FormStep3 = () => {
    
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === ''){
            history.push('/')
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        });
    },[]);

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== ''){
        console.log(state);
        }else{
            alert("Preencha os dados");
        }
    }

    const handleEmailChange = (e = ChangeEvent) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleGithubChange = (e = ChangeEvent) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }
    
    return(
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.nome}, onde te achamos?</h1>
                <p>Preencha com esus contatos para conseguirmos te achar.</p>

                <hr/>

                <label>
                    Qual seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    >
                    </input>
                    
                </label>

                <label>
                    Qual seu GitHub?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    >
                    </input>
                    
                </label>

                <Link className="backButton"to="/step2">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro!</button>
            </C.Container>
        </Theme>
        
    );
}