import React from "react";
import { Link } from "react-router-dom";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import * as S from "./styles";
import { ButtonComponent } from "components";

const Login = () => {
    return (
        <S.Section>
            <h1>Login</h1>
            <form action="cadastrar.html" method="post">
                <label htmlFor="email">E-mail</label>
                <div>
                    <MdEmail />
                    <input type="email" name="email" id="email" placeholder="E-mail" />
                </div>
                <label htmlFor="senha">Senha</label>
                <div>
                    <FaKey />
                    <input type="password" name="senha" id="senha" placeholder="Senha" />
                </div>
                <p>
                    Não possui conta? <Link to="/cadastrar">Cadastrar-se</Link>
                    <ButtonComponent>Entrar</ButtonComponent>
                </p>
            </form>
        </S.Section>
    );
};

export default Login;