import React, { Component } from 'react';
import {FiMail, FiLock} from 'react-icons/fi';

import { Container, Content } from './styles';

import { Button, Col, Row, Timeline } from "antd"
import "antd/dist/antd.css"

import Input from '../../components/Input'
import {ILogin, IUser, IUserCreate} from '../../interfaces/user'
import userStore from '../../stores/user'
import { CheckCircleOutlined, MinusCircleOutlined } from "@ant-design/icons"
import Password from 'antd/lib/input/Password';

export default class Signin extends Component {

  public store = new userStore;

  public state = {
    email: '',
    password: '',
  }

  public setEmail(e:any) {
    this.setState({email: e.target.value});
  }

  public setPassword(e:any) {
    this.setState({password: e.target.value});
  }

  public async submit(payload:ILogin){

    const loginResponse = await this.store.userLogin(payload.email, payload.password);

    if (loginResponse.valid ==  true) {
      console.log(loginResponse)
      console.log("logged in");
    } else {
      console.log(loginResponse)
    }

    this.setState({email:'', password:''});

  } 

  public render() {
    const {email, password} = this.state;

    const payload: ILogin = {email, password};
    return (
      <Container className="container">
        <Content className="content">
          <form>
            <h1>Faça seu login</h1>
            <Input
              icon={FiMail}
              name="email"
              value={email}
              onChange={(e) => this.setEmail(e)}
              placeholder="E-mail"
              autoComplete="false"
            />

            <Input
              icon={FiLock}
              name="password"
              value={password}
              onChange={e => this.setPassword(e)}
              type="password"
              placeholder="Senha"
            />

            <Button>Criar Conta</Button>
            <Button onClick={() => this.submit(payload)} type="link">Entrar</Button>
            <a href="forgot">Esqueci minha senha</a>
          </form>
        </Content>
      </Container>
    )
  }  
}

// const Signin: React.FC = () => {

//   const store = new userStore;

//   let email = '';
//   let password = '';

//   let state = {
//     email: '',
//     password: '',
//   }

//   return (
    
//   <Container className="container">
//     <Content className="content">
//       <form>
//         <h1>Faça seu login</h1>
//         <Input 
//           icon={FiMail}
//           name="email" 
//           value={email}
//           onChange={(e) => setCriteria()}
//           placeholder="E-mail" 
//           autoComplete="false"
//         />

//         <Input 
//           icon={FiLock}
//           name="password" 
//           type="password" 
//           placeholder="Senha"
//         />

//         <Button>Criar Conta</Button>
//         <Button onClick={test} type="link">Entrar</Button>
//         <a href="forgot">Esqueci minha senha</a>
//       </form>
//     </Content>
//   </Container>)
// }

// export default Signin;