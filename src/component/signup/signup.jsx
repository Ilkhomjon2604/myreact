import React from "react";
import { Wrapper, Title, Lable, Input, Btn, Or, IconWrap } from "../style";
import Insta from '../../assents/icons/instagram.svg';
import Google from '../../assents/icons/google.svg';
import Linkedin from '../../assents/icons/linkedin.svg';

export default function SignUp (props){
    return(
        <Wrapper>
        <Title>Sign Up </Title>
        <Lable>Name <br />
            <Input type="text" placeholder="Type your name..."  required/>
        </Lable>
        <Lable>Password <br />
            <Input type="password" placeholder="Type your password" required/>
        </Lable>
        <Lable>Repeat password <br />
            <Input type="password" placeholder="Repeat your password" required />
        </Lable>

      
        <Btn className="btn">Sign up</Btn>
        <div className="or-wrap">
        <hr />
        <Or>or</Or>
        </div>
        

        <IconWrap>
            <a href="https://www.instagram.com/"><img src={Insta} alt="Instagram"  width={30}/></a>
            <a  href="https://myaccount.google.com/"><img src={Google} alt="Google"width={30} /></a>
            <a  href="https://pl.linkedin.com/"><img src={Linkedin} alt="Linkedin" width={30}/></a>
        </IconWrap>



        <p className="info">Already the User? <span className="link" onClick={() =>props.changePage(true)}>Login</span></p>
        
        </Wrapper>
        
    )
}