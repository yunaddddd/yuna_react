import styled from "styled-components";


const SContainer = styled.div`
color: red;
`

const STitle = styled.h1`
color: red;
`

const SButton = styled.button`
color: #000;
  
`



const Input = styled.input`
color: #000;
  
`

export const StyledComponents = () => {
    return (
        <SContainer>
            <STitle>styled components 입니다</STitle>
            <SButton value={1}>버튼</SButton>
            <Input placeholder={`이름`} />
        </SContainer>
    );
};