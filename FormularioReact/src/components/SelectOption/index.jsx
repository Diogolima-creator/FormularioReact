import * as C from './styles';

const Props = {
    title: String,
    description: String,
    icon: String,
    selected: Boolean,
    onClick: () => {}
}

export const SelectOption = ({ title, description, icon, selected, onClick} = Props ) => {
    return(
        <C.Container onClick={onClick} selected={selected}>
            <C.Icon>{icon}</C.Icon>
            <C.Info>
                <C.Title>{title}</C.Title>
                <C.Description>{description}</C.Description>
            </C.Info>
        </C.Container>
    );
    

}