// import QuizForm from "../../../components/QuizForm/QuizForm";
import QuizForm from "../../../components/OperationForm//OperationForm";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { CREATE_QUIZ_PAGE_TITLE } from "../../../constants/Constants";
import { Operation } from "../../../models/Operation";
import { useNavigate } from "react-router-dom";
import HttpClient from "../../../services/HttpClient";
import ToastService from "../../../services/ToastService";

const TransfertOperation = () => {

    const navigate = useNavigate();
    console.log("+++++>HttpClient",HttpClient)
    const handleSubmit = (operation: Operation) => {
        console.log("+++++>operation",operation)
        HttpClient.post('/perform', operation).then(() => {
            ToastService.success('Transfert effectué avec succès');
            navigate('/admin/quiz');
        });
        console.log("+++++>HttpClient",HttpClient)
    }

    return (
        <>
            <PageTitle value={CREATE_QUIZ_PAGE_TITLE} />
            <QuizForm onSubmit={handleSubmit} />
        </>
    );
};

export default TransfertOperation;