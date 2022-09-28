import { getEmployee, postEmployee, putEmployee, deleteEmployee } from "../../../controller/employeController";

export default async function handler(req, res) {


    // getting type of request
    const { method } = req;

    switch (method) {
        case "GET":
            getEmployee(req, res);
            break;
        case "POST":
            postEmployee(req, res);
            break;
        case "PUT":
            putEmployee(req, res);
            break;
        case "DELETE":
            deleteEmployee(req, res);
            break;

        default:
            res.setHeader('allow', ['get', 'post', 'put', 'delete']);;
            res.status(405).end(`method ${method} is not allowed`)
            break;
    }
}