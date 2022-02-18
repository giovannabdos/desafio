import React from "react";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import Form from "react-bootstrap/Form";
import { BsThreeDotsVertical, BsFillPencilFill, BsX } from "react-icons/bs";

function App() {
  return (
    <main>
      <Table striped hover borderless>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Email</th>
            <th>Cliente</th>
            <th>Perfil de acesso</th>
            <th>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>
                  <BsThreeDotsVertical />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Header>Linhas por página</Dropdown.Header>
                  <Form.Check type="checkbox" label="Padrão" />
                  <Form.Check type="checkbox" label="50 Linhas" />
                  <Dropdown.Divider />
                  <Dropdown.Header>Colunas</Dropdown.Header>
                  <Form.Check type="checkbox" label="Usuário" />
                  <Form.Check type="checkbox" label="E-mail" />
                  <Form.Check type="checkbox" label="Cliente" />
                  <Form.Check type="checkbox" label="Perfil de acesso" />
                </Dropdown.Menu>
              </Dropdown>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Giovanna Sacramento</td>
            <td>gile-2008@hotmail.com</td>
            <td>Opleplan</td>
            <td>
              <Alert variant={"primary"}>@giovanna</Alert>
            </td>
            <td>
              <BsFillPencilFill /> <BsX />
            </td>
          </tr>
          <tr>
            <td>Wellington</td>
            <td>Wellington@hotmail.com</td>
            <td>Opleplan</td>
            <td>
              <Alert variant={"primary"}>@wellington</Alert>
            </td>
            <td>
              <BsFillPencilFill /> <BsX />
            </td>
          </tr>
          <tr>
            <td>Adriana</td>
            <td>adriana@hotmail.com</td>
            <td>Opleplan</td>
            <td>
              <Alert variant={"primary"}>@adriana</Alert>
            </td>
            <td>
              <BsFillPencilFill /> <BsX />
            </td>
          </tr>
        </tbody>
      </Table>
    </main>
  );
}

export default App;
