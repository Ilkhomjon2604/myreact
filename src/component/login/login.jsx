import React  from "react";
import { Wrapper, Title, Lable, Input, Btn, Or, IconWrap } from "../style";
import Insta from '../../assents/icons/instagram.svg';
import Google from '../../assents/icons/google.svg';
import Linkedin from '../../assents/icons/linkedin.svg';


export default function Login (props){
    return(
        <Wrapper className="card">
        <Title>Login </Title>
        <Lable>Name <br />
            <Input type="text" placeholder="Type your name..."  required/>
        </Lable>
        <Lable>Password <br />
            <Input type="password" placeholder="Type your password..." required/>
        </Lable>
        

        <Lable className="checkbox">
            <Input type="checkbox" /> <span>Remember me?</span>
        </Lable>
        <Btn className="btn">Login</Btn>
        <div className="or-wrap">
        <hr />
        <Or>or</Or>
        </div>
        

        <IconWrap>
            <a href="https://www.instagram.com/"><img src={Insta} alt="Instagram"  width={30}/></a>
            <a  href="https://myaccount.google.com/"><img src={Google} alt="Google"width={30} /></a>
            <a  href="https://pl.linkedin.com/"><img src={Linkedin} alt="Linkedin" width={30}/></a>
        </IconWrap>



        <p className="info">Need an Account? <span className="link" onClick={() =>props.changePage(false)}>SignUp</span></p>
        
        </Wrapper>
    )
}