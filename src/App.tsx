import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import Form from "react-bootstrap/Form";
import { BsThreeDotsVertical, BsFillPencilFill, BsX } from "react-icons/bs";

interface Geo {
  lat: string;
  lng: string;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

function App() {
  const [users, setUsers] = useState<Array<User>>([]);
  const [usernameColumn, setUsernameColumn] = useState<boolean>(true);
  const [emailColumn, setEmailColumn] = useState<boolean>(true);
  const [clienteColumn, setClienteColumn] = useState<boolean>(true);
  const [perfilColumn, setPerfilColumn] = useState<boolean>(true);
  const [padrao, setPadrao] = useState<boolean>(true);

  useEffect(() => {
    fetchUsers();
  }, [padrao]);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        setUsers(result.slice(0, padrao ? 5 : 10));
      })
      .catch((err) => {
        console.error("Failed retrieving information", err);
      });
  };

  const deleteUser = (user: User) => {
    setUsers(users.filter((u) => u.id != user.id));
  };

  return (
    <main>
      <Table striped hover borderless className="users-table">
        <thead>
          <tr>
            {usernameColumn && <th>Usuário</th>}
            {emailColumn && <th>Email</th>}
            {clienteColumn && <th>Cliente</th>}
            {perfilColumn && <th>Perfil de acesso</th>}
            <th>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink} className="threeDots">
                  <BsThreeDotsVertical size={13} color="#3f76ad" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Header>Linhas por página</Dropdown.Header>
                  <Form.Check
                    type="checkbox"
                    label="Padrão"
                    checked={padrao}
                    onChange={() => setPadrao(!padrao)}
                  />
                  <Form.Check
                    type="checkbox"
                    label="10 Linhas"
                    checked={!padrao}
                    onChange={() => setPadrao(!padrao)}
                  />
                  <Dropdown.Divider />
                  <Dropdown.Header>Colunas</Dropdown.Header>
                  <Form.Check
                    type="checkbox"
                    label="Usuário"
                    checked={usernameColumn}
                    onChange={() => setUsernameColumn(!usernameColumn)}
                  />
                  <Form.Check
                    type="checkbox"
                    label="E-mail"
                    checked={emailColumn}
                    onChange={() => setEmailColumn(!emailColumn)}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Cliente"
                    checked={clienteColumn}
                    onChange={() => setClienteColumn(!clienteColumn)}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Perfil de acesso"
                    checked={perfilColumn}
                    onChange={() => setPerfilColumn(!perfilColumn)}
                  />
                </Dropdown.Menu>
              </Dropdown>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {usernameColumn && <td>{user.name}</td>}
              {emailColumn && <td>{user.email}</td>}
              {clienteColumn && <td>{user.address.city}</td>}
              {perfilColumn && (
                <td>
                  <Alert variant={"primary"}>{user.username}</Alert>
                </td>
              )}
              <td>
                <BsFillPencilFill color="#6e97c0" />{" "}
                <BsX
                  onClick={() => deleteUser(user)}
                  color="red"
                  size={18}
                  className="delete"
                />
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={5} className="last-line" />
          </tr>
        </tbody>
      </Table>
    </main>
  );
}

export default App;
