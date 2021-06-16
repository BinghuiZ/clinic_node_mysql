
# Clinic Node.js MySQL Project

A project using Node.js and MySQL to create a web API server

## Set up & Run 

Clone the project and run in docker

```bash 
  git clone https://github.com/BinghuiZ/clinic_node_mysql.git
  cd ~/clinic_node_mysql

  docker-compose up
```
**Ready to go**

## Doctor Name for API Testing

To add new record from API, you will need to add the following doctor name to the API

`Emmett Reid`
`Duncan Curtis`
`Maxine Padilla`
`Christian Mitchell`
`Vanessa Rowe`
`Dwight Nicholls`
`Theo Brooks`
`Grant Marsh`
`Joseph Ogley`

  
## API Reference

#### Domain

```http
  localhost:3000
```

#### Create system account

```http
  POST /register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. email of account |
| `password` | `string` | **Required**. password of account |
| `phone_no` | `string` | **Required**. mobile number |
| `address` | `string` | **Required**. address of account user |

**Remark**

password: Minimum 8 char, at least 1 uppercase, 1 lowercase & 1 number

**Return**

Token 

#### Login to system

```http
  POST /login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` | `string` | **Required**. email of account |
| `password` | `string` | **Required**. password of account |

**Return**

Token 

#### add new record

```http
  POST /add
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token` | `string` | **Required**. user token, "Bearer {token}" |
| `doctor_name` | `string` | **Required**. name of doctor |
| `patient_name` | `string` | **Required**. name of patient |
| `diagnosis` | `string` | **Required**. diagnosis of patient |
| `medication` | `string` |  medication of patient |
| `consultation` | `int` | consultation fee |
| `follow_up` | `Boolean` | record status |


#### Get list of records

```http
  GET /login
```

| Header | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `authorization` | `string` | **Required**. user token, "Bearer {token}" |


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `from` | `string` | **Required**. selection date from |
| `to` | `string` | **Required**. selection date to |
| `limit` | `string` | **Required**. size of list |
| `offset` | `string` | **Required**. from which position to select |


**Return**

list of records
  
## ERD

![ERD](https://github.com/BinghuiZ/clinic_node_mysql/blob/master/images/Clinic_ERD.png)

  
## Authors

- [@Binghui Zhong](https://github.com/BinghuiZ)

  