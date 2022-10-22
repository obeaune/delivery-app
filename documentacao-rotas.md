# Rotas possíveis

# Login 👨‍💻

  > ### **localhost:3001/login**

  - Requisição do tipo `POST` que loga **um usuário anteriormente cadastrado** no banco de dados.
  - As credenciais do usuário precisam estar corretas.
<details>
<summary>O que precisa ser enviado:</summary>

- No body

```js script
{
  email: "zebirita@email.com",
  password: "$#zebirita#$"
}
```
</details>
<details>
<summary>O que é retornado:</summary>

```js script
{
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkNsaWVudGUgWsOpIEJpcml0YSIsImVtYWlsIjoiemViaXJpdGFAZW1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjYxOTkxNTM3LCJleHAiOjE2NjI1OTYzMzd9.Kgl171c_TBU_KRw9jmNl3ycw1kTBhwPI7JkdSnu_RgI",
  role: "customer"
}
```
</details><br><br>




# Register 🚀

  > ### **localhost:3001/register**
  - Requisição do tipo `GET` que retorna uma **lista com todos os usuários cadastrados** no banco de dados.
  - O usuário não precisa enviar nada.
<details>
<summary>O que é retornado:</summary>

``` js script
[
  {
    id: 1,
    name: "Delivery App Admin",
    password: "a4c86edecc5aee06eff8fdeda69e0d04",
    email: "adm@deliveryapp.com",
    role: "administrator"
  },
  {
    id: 2,
    name: "Fulana Pereira",
    password: "3c28d2b0881bf46457a853e0b07531c6",
    email: "fulana@deliveryapp.com",
    role: "seller"
  },
  {
    id: 3,
    name: "Cliente Zé Birita",
    password: "1c37466c159755ce1fa181bd247cb925",
    email: "zebirita@email.com",
    role: "customer"
  }
]
```
</details><br><br>




  > ### **localhost:3001/register**
  - Requisição do tipo `POST` que retorna uma **lista com todos os usuários cadastrados** no banco de dados.
<details>
<summary>O que precisa ser enviado:</summary>
- No body

``` js script
{
  name: "Ada Lovelace",
  email: "ada@lovelace.com",
  password: "mathIsCoolAndAwesome"
}
```
</details>
<details>
<summary>O que é retornado:</summary>

``` js script
{
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkFkYSBMb3ZlbGFjZSIsImVtYWlsIjoiYWRhQGxvdmVsYWNlLmNvbSIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY2MTk4MDUwMiwiZXhwIjoxNjYyNTg1MzAyfQ.kj_-fphFETEe4E0TYzeiyxvEJPhkn0YlP9OK1YIEHxQ",
  role: "customer"
}
```
</details><br><br>




# Customer 🚀

  > ### **localhost:3001/customer/products**
  
  - Requisição do tipo `GET` que retorna ao usuário **todos os produtos cadastrados** no banco de dados.
  - O usuário não precisa enviar nada.
<details>
<summary>O que é retornado:</summary>

```js script
[
  {
    id: 1,
    name: "Skol Lata 250ml",
    price: "2.20",
    url_image: "http://localhost:3001/images/skol_lata_350ml.jpg"
  },
  {
    id: 2,
    name: "Heineken 600ml",
    price: "7.50",
    url_image: "http://localhost:3001/images/heineken_600ml.jpg"
  },
  {
    id: 3,
    name: "Antarctica Pilsen 300ml",
    price: "2.49",
    url_image: "http://localhost:3001/images/antarctica_pilsen_300ml.jpg"
  },
  ...
]
```
</details><br><br>




  > ### **localhost:3001/customer/sellers**
  - Requisição do tipo `GET` que retorna ao usuário **uma lista com todas as pessoas vendedoras cadastrados** no banco de dados.
  - O usuário não precisa enviar nada.
<details>
<summary>O que é retornado:</summary>

```js script
[
  {
      id: 2,
      name: "Fulana Pereira",
      password: "3c28d2b0881bf46457a853e0b07531c6",
      email: "fulana@deliveryapp.com",
      role: "seller"
  }
]
```
</details><br><br>




  > ### **localhost:3001/customer/order**
  - Requisição do tipo `GET` que retorna **um array com todos os pedidos cadastrados** no banco de dados.
  - O usuário precisa estar logado e com um token válido no momento da requisição.
<details>
<summary>O que precisa ser enviado:</summary>

- No header - Authorization

``` js script
{
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkNsaWVudGUgWsOpIEJpcml0YSIsImVtYWlsIjoiemViaXJpdGFAZW1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjYxOTkxNTM3LCJleHAiOjE2NjI1OTYzMzd9.Kgl171c_TBU_KRw9jmNl3ycw1kTBhwPI7JkdSnu_RgI",
}
```
</details>
<details>
<summary>O que é retornado:</summary>

```js script
{
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: "4.69",
  deliveryAddress: "Rua Cachaça 51, Bairro Tequila",
  deliveryNumber: "+553199120-2020",
  saleDate: "2022-08-01T19:58:00.000Z",
  status: "Pendente"
}
```
</details><br><br>




  > ### **localhost:3001/customer/orders/:id**
  - Requisição do tipo `GET` que retorna **um objeto com todas as informações do pedido em questão (id)**.
  - O usuário precisa estar logado e com um token válido no momento da requisição.
<details>
<summary>O que precisa ser enviado:</summary>

- No header - Authorization

``` js script
{
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkNsaWVudGUgWsOpIEJpcml0YSIsImVtYWlsIjoiemViaXJpdGFAZW1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjYxOTkxNTM3LCJleHAiOjE2NjI1OTYzMzd9.Kgl171c_TBU_KRw9jmNl3ycw1kTBhwPI7JkdSnu_RgI",
}
```
</details>
<details>
<summary>O que é retornado:</summary>

```js script
{
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: "4.69",
  deliveryAddress: "Rua Cachaça 51, Bairro Tequila",
  deliveryNumber: "+553199120-2020",
  saleDate: "2022-08-01T19:58:00.000Z",
  status: "Pendente",
  seller: {
    name: "Fulana Pereira"
  },
  products: [
    {
      id: 1,
      name: "Skol Lata 250ml",
      price: "2.20",
      url_image: "http://localhost:3001/images/skol_lata_350ml.jpg",
      SaleProduct: {
        quantity: 1
      }
    },
    {
      id: 3,
      name: "Antarctica Pilsen 300ml",
      price: "2.49",
      url_image: "http://localhost:3001/images/antarctica_pilsen_300ml.jpg",
      SaleProduct: {
        quantity: 1
      }
    }
  ]
}
```
</details><br><br>



  > ### **localhost:3001/customer/checkout**
  - Requisição do tipo `POST` que retorna **o id do pedido recém cadastrado pelo usuário** no banco de dados.
  - O usuário precisa estar logado e com um token válido no momento da requisição.
<details>
<summary>O que precisa ser enviado:</summary>

- No header - Authorization

``` js script
{
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkNsaWVudGUgWsOpIEJpcml0YSIsImVtYWlsIjoiemViaXJpdGFAZW1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjYxOTkxNTM3LCJleHAiOjE2NjI1OTYzMzd9.Kgl171c_TBU_KRw9jmNl3ycw1kTBhwPI7JkdSnu_RgI",
}
```
- No body

``` js script
{
  sellerId: 2,
  totalPrice: 123,
  deliveryAddress: "Rua do ze birita",
  deliveryNumber: "+551198168-9500",
  products: [
    {
      productId: 2,
      quantity: 3
    },
    {
      productId: 4,
      quantity: 3
    }
  ]
}
```
</details>
<details>
<summary>O que é retornado:</summary>

```js script
{
  id: 2
}
```
</details><br><br>




# Seller 🚀


  > ### **localhost:3001/seller/orders**
  - Requisição do tipo `GET` que retorna uma **lista com todas as vendas cadastradas** do vendedor.
  - O usuário precisa estar logado e com um token válido no momento da requisição.
<details>
<summary>O que precisa ser enviado:</summary>

- No header - Authorization

``` js script
{
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkNsaWVudGUgWsOpIEJpcml0YSIsImVtYWlsIjoiemViaXJpdGFAZW1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjYxOTkxNTM3LCJleHAiOjE2NjI1OTYzMzd9.Kgl171c_TBU_KRw9jmNl3ycw1kTBhwPI7JkdSnu_RgI",
}
```

</details>
<details>
<summary>O que é retornado:</summary>

``` js script
[
  {
    id: 1,
    userId: 3,
    sellerId: 2,
    totalPrice: "4.69",
    deliveryAddress: "Rua Cachaça 51, Bairro Tequila",
    deliveryNumber: "+553199120-2020",
    saleDate: "2022-08-01T19:58:00.000Z",
    status: "Pendente"
  }
]
```
</details><br><br>




  > ### **localhost:3001/seller/orders/:id**
  - Requisição do tipo `GET` que retorna um **objeto com a venda específica (id) cadastrada** no banco de dados.
  - O usuário precisa estar logado e com um token válido no momento da requisição.
<details>
<summary>O que precisa ser enviado:</summary>

- No header - Authorization

``` js script
{
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkNsaWVudGUgWsOpIEJpcml0YSIsImVtYWlsIjoiemViaXJpdGFAZW1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjYxOTkxNTM3LCJleHAiOjE2NjI1OTYzMzd9.Kgl171c_TBU_KRw9jmNl3ycw1kTBhwPI7JkdSnu_RgI",
}
```
</details>
<details>
<summary>O que é retornado:</summary>

``` js script
{
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: "4.69",
  deliveryAddress: "Rua Cachaça 51, Bairro Tequila",
  deliveryNumber: "+553199120-2020",
  saleDate: "2022-08-01T19:58:00.000Z",
  status: "Pendente"
}
```
</details><br><br>



# Admin 🚀

  > ### **localhost:3001/admin/manage**
  - Requisição do tipo `POST` utilizada pelo administrador para **adicionar um novo usuário** no banco de dados.
  - O administrador precisa estar logado e com um token válido no momento da requisição.

<details>
<summary>O que precisa ser enviado:</summary>

- No header - Authorization

``` js script
{
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbGl2ZXJ5IEFwcCBBZG1pbiIsImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjYyNDA3NTAyLCJleHAiOjE2NjMwMTIzMDJ9.9s2UYHUgKQtlZgJMdxV_TjBZNZKa-2bn1UD8ixSyiRE",
}
```
- No body

``` js script
{
    name: "Ada Lovelace2",
    email: "ada2@lovelace.com",
    password: "mathIsCoolAndAwesome",
    role: "customer"
}
```
</details>
<details>
<summary>O que é retornado:</summary>

``` js script
{
  id: 6,
  name: "Ada Lovelace2",
  email: "ada2@lovelace.com",
  password: "4c3267509a3a2888155ebfd4440e23c0",
  role: "customer"
}
```
</details><br><br>





  > ### **localhost:3001/admin/manage**
  - Requisição do tipo `GET` utilizada pelo administrador para retornar **uma lista com todos os usuários (com exceção do próprio administrador) salvos** no banco de dados.
  - O administrador precisa estar logado e com um token válido no momento da requisição.

<details>
<summary>O que precisa ser enviado:</summary>

- No header - Authorization

``` js script
{
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbGl2ZXJ5IEFwcCBBZG1pbiIsImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjYyNDA3NTAyLCJleHAiOjE2NjMwMTIzMDJ9.9s2UYHUgKQtlZgJMdxV_TjBZNZKa-2bn1UD8ixSyiRE",
}
```

</details>
<details>
<summary>O que é retornado:</summary>

``` js script
[
    {
        id: 2,
        name: "Fulana Pereira",
        email: "fulana@deliveryapp.com",
        role: "seller"
    },
    {
        id: 3,
        name: "Cliente Zé Birita",
        email: "zebirita@email.com",
        role: "customer"
    },
    {
        id: 4,
        name: "Ada Lovelace",
        email: "ada@lovelace.com",
        role: "customer"
    },
    {
        id: 6,
        name: "Ada Lovelace2",
        email: "ada2@lovelace.com",
        role: "customer"
    }
]
```
</details><br><br>



  > ### **localhost:3001/admin/manage**
  - Requisição do tipo `DELETE` utilizada pelo administrador para **excluir um usuário com o id especificado** no banco de dados.
  - O administrador precisa estar logado e com um token válido no momento da requisição.

<details>
<summary>O que precisa ser enviado:</summary>

- No header - Authorization

``` js script
{
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbGl2ZXJ5IEFwcCBBZG1pbiIsImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjYyNDA3NTAyLCJleHAiOjE2NjMwMTIzMDJ9.9s2UYHUgKQtlZgJMdxV_TjBZNZKa-2bn1UD8ixSyiRE",
}
```

- No body

``` js script
{
  id: 6
}
```

</details>
<details>
<summary>O que é retornado:</summary>

``` js script
1
```
</details><br><br>

