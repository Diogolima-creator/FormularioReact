import * as C from './styles';
import { Header } from '../Header';
import { SiderbarItem } from '../Sidebaritem';
import { useForm } from '../../contexts/FormContext';

export const Theme = ({ children} ) => {

    const { state } = useForm();
    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        <SiderbarItem
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />

                        <SiderbarItem
                            title="Profissional"
                            description="Seu nivel"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />

                        <SiderbarItem
                            title="Contatos"
                            description="Comote achar"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />

                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}